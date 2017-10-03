'use strict'
const joi = require('joi')

module.exports = {
  signRequestRule: joi.object().keys({
    fileType: joi.string().required()
  }).required()
}
