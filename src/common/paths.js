const { normalize } = require('path')
let { name } = require('../../package')
const ENV = process.env

// 过滤删除 scope
function extractName(name = '') {
  if (!name) return name

  return name.split('/').pop()
}

name = extractName(name)

exports.homePath = () => {
  return ENV.HOME || ENV.USERPROFILE || (ENV.HOMEDRIVE + ENV.HOMEPATH)
}

exports.dataPath = () => {
  return ENV.HOME || ENV.APPDATA || ENV.LOCALAPPDATA || ENV.TMPDIR || ENV.TEMP
}

exports.storePath = () => {
  return normalize(`${this.dataPath()}/.${name}`)
}

exports.rcPath = () => {
  return `${this.homePath()}/.${name}rc`
}
