import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Accessibility Testing Guide',
  description: 'Documentation for accessibility testing',
  base: '/accessibility-testing-guide/',
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],
  vite: {
    css: {
      postcss: {},
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
        ],
      },
      {
        text: 'Automated Testing',
        items: [
          { text: 'Axe DevTools', link: '/automated-testing/axe-devtools' },
          { text: 'Level Access', link: '/automated-testing/level-access' },
          { text: 'Issue Reporting', link: '/issue-reporting' },
        ],
      },
      {
        text: 'Manual Testing',
        items: [
          { text: 'Toolkit', link: '/manual-testing/toolkit' },
          { text: 'Instructions', link: '/manual-testing/instructions' },
          { text: 'Principles', link: '/manual-testing/principles' },
          { text: 'Using Screen Readers', link: '/manual-testing/using-screen-readers' },
          { text: 'Documentation', link: '/manual-testing/documentation' },
        ],
      },
    ],
    socialLinks: [],
  },
})
