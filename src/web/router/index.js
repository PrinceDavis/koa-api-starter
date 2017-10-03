'use strict'

const Router = require('koa-router')
const aws = require('aws-sdk')
const mime = require('mime-types')
const util = require('util')
const config = require('../../config')
const router = new Router({prefix: '/v1'})
const rules = require('../validation-rules')
router.get('/', async ctx => {
  ctx.body = 'welcome to smart challenge image service'
})

router.post('/start-upload', async ctx => {
  ctx.validateBody(rules.image.signRequestRule)
  const s3 = new aws.S3()
  const { fileType } = ctx.request.body
  const fileName = util.format(
    'upload-%s.%s',
    new Date().getTime(),
    mime.extension(fileType)
  )
  const s3Params = {
    Bucket: config.S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }
  const data = await s3.getSignedUrl('putObject', s3Params)
  ctx.body = {
    signedRequest: data,
    url: `https://${config.S3_BUCKET}.s3.amazonaws.com/${fileName}`
  }
})

module.exports = router
