const mkdirp = require('mkdirp')

module.exports = async (path) => {
  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) return reject(err)
      resolve(path)
    })
  })
}
