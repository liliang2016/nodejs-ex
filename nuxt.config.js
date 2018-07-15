module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '社交网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // { type: 'scss', src: '~/assets/scss/base.scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'element-ui'],
    // styleResources: {
    //   scss: './assets/scss/vars.scss'
    // },
    babel: {
      plugins: [
        [
          'component', [
            {
              'libraryName': 'element-ui',
              'styleLibraryName': 'theme-chalk'
            }
          ]
        ]
      ]
    }
  },
  serverMiddleware: [
    // API middleware
  ],
  plugins: [
    '@/plugins/element-ui'
  ]
}
