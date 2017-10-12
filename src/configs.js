const { rcPath } = require('./common/paths')
const fs = require('fs')
const pkg = require('../package')
const utils = require('./common/utils')
const debug = require('debug')('configs')

exports.getLocalRc = async (name) => {
  let rcFile = rcPath()
  if (!fs.existsSync(rcFile)) return name ? '' : {}
}

exports.getRemoteRc = async (name) => {

}

exports.getRc = async (name, options) => {
  options = Object.assign({}, options)
  let value = await this.getLocalRc(name) || (options.remote !== false && await this.getRemoteRc(name)) ||
    pkg.configs[name] || ''
  debug('getRc', name, value || '<null>')
  return utils.isString(value) ? value.trim() : value
}
