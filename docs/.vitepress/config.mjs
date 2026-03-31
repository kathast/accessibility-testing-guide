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
    sidebar: [],
    socialLinks: [],
  },
})
