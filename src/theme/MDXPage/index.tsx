import React from 'react';
import clsx from 'clsx';
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import TOC from '@theme/TOC';
import styles from './styles.module.css';
export default function MDXPage(props) {
  const { content: MDXPageContent } = props;
  const {
    metadata: { title, description, frontMatter },
  } = MDXPageContent;
  const { wrapperClassName, hide_table_of_contents: hideTableOfContents } = frontMatter;
  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage
      )}
    >
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className="container container--fluid my-8">
          <div className={clsx('row', styles.mdxPageWrapper)}>
            {!hideTableOfContents && MDXPageContent.toc.length > 0 ? (
              <>
                <div className={clsx('col', !hideTableOfContents && 'col--9')}>
                  <article className={clsx('prose dark:prose-invert max-w-none')}>
                    <MDXContent>
                      <MDXPageContent />
                    </MDXContent>
                  </article>
                </div>
                <div className="col col--3">
                  <TOC
                    toc={MDXPageContent.toc}
                    minHeadingLevel={frontMatter.toc_min_heading_level}
                    maxHeadingLevel={frontMatter.toc_max_heading_level}
                  />
                </div>
              </>
            ) : (
              <article className={clsx('prose dark:prose-invert')}>
                <MDXContent>
                  <MDXPageContent />
                </MDXContent>
              </article>
            )}
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
