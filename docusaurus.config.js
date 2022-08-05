// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dodbrit',
  tagline: 'Documentation Repo',
  url: 'https://dodbrit.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dodbrit', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: '',
        style: 'dark',
        logo: {
          alt: 'dodbrit logo',
          src: 'img/logo.png',
        },
        items: [
          // LEFT
          // {
          //   type: 'doc',
          //   docId: 'home',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          // {
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
          {
            to: '/', 
            label: 'Home', 
            position: 'left'
          },
          // RIGHT
          {
            href: 'https://github.com/dodbrit/documentation',
            className: 'github-link',
            'aria-label': 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/peter-keech-b88183a2',
            className: 'linkedin-link',
            'aria-label': 'LinkedIn',
            position: 'right',
          },
          {
            href: 'mailto:peter@dodbrit.dev',
            className: 'email-link',
            'aria-label': 'email',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        //logo: {
        //  alt: 'DODBRIT',
        //  src: 'img/dodbrit-logo.png',
        //  width: 300,
        //  height: 300,
        //},
        copyright: `Copyright © ${new Date().getFullYear()} <br /><i>Posts have been created from personal experiences working on personal and professional projects and have not been influenced by any vendor. Built with Docusaurus.</i>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;