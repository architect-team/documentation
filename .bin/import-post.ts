import * as path from 'https://deno.land/std/path/mod.ts';
import Rss from 'npm:rss-parser@3.13.0';
import HtmlParser from 'npm:node-html-parser@6.1.11';
import Turndown from 'npm:turndown@7.1.2';

const mainModuleDir = path.dirname(path.fromFileUrl(Deno.mainModule));

const error = (message: string) => {
  console.error(`%c${message}`, 'color: red');
  Deno.exit(1);
};

if (Deno.args.length <= 0) {
  error('No RSS feed specified');
}

const rssParser = new Rss();
const feed = await rssParser.parseURL(Deno.args[0]);

const turndownService = new Turndown();

for (const item of feed.items) {
  const slug = item.link
    .split('/')
    .filter((i) => i !== '')
    .pop();
  const date = new Date(item.pubDate);

  const month = date.getMonth() + 1;
  let monthStr = '';
  if (month < 10) {
    monthStr = `0${month}`;
  } else {
    monthStr = month.toString();
  }

  const day = date.getDate();
  let dayStr = '';
  if (day < 10) {
    dayStr = `0${day}`;
  } else {
    dayStr = day.toString();
  }

  const folderSlug = `${date.getFullYear()}-${monthStr}-${dayStr}-${slug}`;
  const fileSlug = `${folderSlug}/index.mdx`;

  // Retrieve markdown contents
  const data = await fetch(item.link);
  const html = await data.text();
  const parsedHtml = HtmlParser.parse(html);
  const main = parsedHtml.querySelector('main');
  if (!main) {
    console.error('%cNo <main> element found in ' + folderSlug, 'color: red');
    continue;
  }
  const mainStr = main.toString();
  const markdown = turndownService.turndown(mainStr, {
    codeBlockStyle: 'fenced',
  });

  try {
    await Deno.readTextFile(path.join(mainModuleDir, `../blog/${fileSlug}`));
    console.log('Skipped: ' + folderSlug);
  } catch (err) {
    if (err.name === 'NotFound') {
      await Deno.mkdir(path.join(mainModuleDir, `../blog/${folderSlug}`));
      await Deno.writeTextFile(
        path.join(mainModuleDir, `../blog/${fileSlug}`),
        `---
title: ${item.title}
---
${markdown}`
      );

      console.log(`%cCreated: ${folderSlug}`, 'color: green');
    } else {
      throw err;
    }
  }
}
