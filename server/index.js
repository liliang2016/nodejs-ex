
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.set('port', port)

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)

  app.listen(port, ip)
  console.log('Server listening on http://' + ip + ':' + port) // eslint-disable-line no-console
}
start()