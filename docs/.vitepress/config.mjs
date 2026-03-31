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
        text: 'Automated Testing',
        items: [
          { text: 'Axe DevTools', link: '/automated-testing/axe-devtools' },
          { text: 'Level Access', link: '/automated-testing/level-access' },
        ],
      },
      { text: 'Accessibility Bug Report Template', link: '/accessibility-bug-report-template' },
      {
        text: 'Manual Testing',
        items: [
          { text: 'Essential Toolkit', link: '/manual-testing/essential-toolkit' },
          { text: 'Step-by-Step Evaluation Process', link: '/manual-testing/step-by-step-evaluation' },
          { text: 'Recommended Methodology: The "Big Four"', link: '/manual-testing/recommended-methodology' },
          { text: 'Screen Reader Testing', link: '/manual-testing/screen-reader-testing' },
          { text: 'Documentation', link: '/manual-testing/documentation' },
        ],
      },
    ],
    socialLinks: [],
  },
})
