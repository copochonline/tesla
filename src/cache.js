const debug = require('debug')('cache')
const Stamp = require('./stamp')
const store = require('./store')
const { normalize } = require('path')
const fs = require('fs')
const readFile = require('./common/readFile')
const writeFile = require('./common/writeFile')

exports.get = async (name) => {
  debug('get', 'name', name)
  let stamp = await this.getStamp(name)
  let filename = await this.getFile(name)
  debug('get', 'filename', filename)
  let isExists = fs.existsSync(filename)
  debug('get', 'isExists', isExists)
  let isExpire = await stamp.isExpire()
  debug('get', 'isExpire', isExpire)
  let value = isExists ? await readFile(filename) : null
  return { isExists, isExpire, value }
}

exports.getStamp = async (name) => {
  return new Stamp(`${name}.cache`)
}

exports.getFile = async (name) => {
  let cacheDir = await store.getPath('caches')

  return normalize(`${cacheDir}/${name}.cache`)
}

exports.set = async (name, value) => {
  debug('set', 'name', name)
  let stamp = await this.getStamp(name)
  let filename = await this.getFile(name)
  debug('set', 'filename', filename)
  await Promise.all([
    writeFile(filename, value),
    stamp.write()
  ])
}
