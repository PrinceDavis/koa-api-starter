'use strict'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const validator = require('koa-request-validation')
const app = new Koa()
const router = require('./router')
const { catchErrors } = require('./utils').errorHandler

app.use(cors())
  .use(bodyParser())
  .use(validator())
  .use(catchErrors())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
