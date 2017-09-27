const requireDir = require('require-dir')

exports.Context = require('./context')
exports.middlewares = requireDir('./middlewares')