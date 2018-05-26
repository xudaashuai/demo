module.exports = {
  title: 'Demo 合集',
  description: 'Just playing around',
  themeConfig: {
    sidebar: {
      '/demo/': [
        '',     /* /foo/ */
        ['card','卡片']  /* /foo/one.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
