import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { theme as prismTheme } from './src/prism/theme.js';

const config: Config = {
  title: 'Architect.io',
  tagline: 'Any app, anywhere',
  trailingSlash: true,
  url: 'https://architect.io',
  baseUrl: '/',

  organizationName: 'architect-team',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: '/img/favicons/favicon.ico',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/img/favicons/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicons/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicons/favicon-32x32.png',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      admonitions: true,
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/architect-team/documentation/tree/main/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Architect Logo',
        src: 'img/architect-horizontal-full-color-rgb.svg',
        srcDark: 'img/architect-horizontal-inverted-rgb.svg',
        height: '24px',
      },
      items: [
        {
          label: 'Home',
          position: 'left',
          to: '/',
        },
        {
          label: 'Documentation',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'root',
              label: 'Getting started',
              description: 'Learn the basics of using Architect',
              icon: 'AcademicCapIcon',
            },
            {
              type: 'docSidebar',
              sidebarId: 'componentGuides',
              label: 'Component Guides',
              description:
                'Incorporate all the latest tools and architectures into your cloud applications.',
              icon: 'CodeBracketIcon',
            },
            {
              type: 'docSidebar',
              sidebarId: 'datacenterGuides',
              label: 'Datacenter Guides',
              description:
                'Configure your own cloud platform to deploy to your favorite cloud providers with your favorite tools.',
              icon: 'CloudIcon',
            },
          ],
        },
        {
          label: 'Blog',
          position: 'left',
          to: '/blog',
        },
      ],
    },
    footer: {
      logo: {
        src: 'img/architect-horizontal-inverted-rgb.svg',
        srcDark: 'img/architect-horizontal-inverted-rgb.svg',
        style: {
          height: '32px',
        },
      },
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/docs/getting-started/introduction',
            },
            {
              label: 'Component guides',
              to: '/guides/components/architecture/full-stack-apps',
            },
            {
              label: 'Datacenter guides',
              to: '/guides/datacenters/starters/local',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Github',
              href: 'https://github.com/architect-team/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/architect_team',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/architect.io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Contact us',
              to: '/contact-us',
            },
            {
              label: 'Write for us',
              to: '/write-for-us',
            },
            {
              label: 'Status',
              href: 'https://architectio.statuspage.io/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy policy',
              to: '/privacy-policy',
            },
            {
              label: 'User agreement',
              to: '/user-agreement',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Architect.io, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismTheme,
      additionalLanguages: ['hcl'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    function () {
      return {
        name: 'docusaurus-plugin-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindcss);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
