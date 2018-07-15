import express from 'express'
import compression from 'compression'
import { Nuxt, Builder } from 'nuxt'

const app = express()
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.use(compression())

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(port)
console.log('Server listening on ' + ':' + port)