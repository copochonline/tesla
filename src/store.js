const paths = require('./common/paths')
const mkdirp = require('./common/mkdirp')
const { normalize } = require('path')
const del = require('del')

exports.getPath = async (name = '') => {
  let storePath = paths.storePath()
  let storeItemPath = normalize(`${storePath}/${name}`)

  await mkdirp(storeItemPath)
  return storeItemPath
}

exports.clean = async (name) => {
  let storePath = paths.storePath()

  if (name) storePath += `/${name}`

  await del([`${storePath}/**/*.*`], {
    force: true
  })
}
