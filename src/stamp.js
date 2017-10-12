const debug = require('debug')('stamp')
const store = require('./store')
const { normalize }  = require('path')
const configs = require('./configs')
const fs = require('fs')
const writeFile = require('./common/writeFile')

class TimeStamp {
  constructor(name) {
    this.name = name.replace(/\//, '-')
    debug("constructor", name)
  }

  async getFileName() {
    debug('getFileName', this.name)
    let storeDir = await store.getPath('stamps')
    return normalize(`${storeDir}/${this.name}.stamp`)
  }

  async read() {
    let filename = await this.getFileName()
    debug('read', filename)
    if (!fs.existsSync(filename)) return 0
  }

  async write() {
    let filename = await this.getFileName()
    debug('write', filename)
    return writeFile(filename, Date.now())
  }

  async isExpire() {
    debug('isExpire', this.name)
    let stamp = await this.read()
    let ttl = process.env.DN_NO_CACHE ?
      0 : Number(await configs.getRc('cacheTTL', { remote: false }))

    return Date.now() - stamp >= ttl
  }
}

module.exports = TimeStamp