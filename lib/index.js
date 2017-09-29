const requireDir = require('require-dir')

exports.Context = require('./context')
exports.middlewares = requireDir('./middlewares')

exports.middlewareManager = require('./managers/middleware')
exports.templateManager = require('./managers/template')
