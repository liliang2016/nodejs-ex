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
    { type: 'scss', src: '~/assets/scss/base.scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    styleResources: {
      scss: './assets/scss/vars.scss'
    }
  },
  serverMiddleware: [
    // API middleware
  ],
  plugins: [
    
  ]
}
