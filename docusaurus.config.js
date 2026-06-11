// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Round Rock Bitcoiners Wiki',
  tagline: 'Community-maintained knowledge base for meetups, tools, and Bitcoin education.',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.roundrockbitcoiners.com',
  baseUrl: '/',

  organizationName: 'jason-me',
  projectName: 'rrbtc-wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['@easyops-cn/docusaurus-search-local'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Round Rock Bitcoiners',
        logo: {
          alt: 'Round Rock Bitcoiners Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Round Rock Bitcoiners. Content released under the <a href="/license">MIT License</a>.<br /><a href="https://github.com/jason-me/rrbtc-wiki">Contribute on GitHub</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;