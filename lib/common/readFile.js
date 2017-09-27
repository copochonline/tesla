const fs = require('fs')

module.exports = async function(filename) {
  return new Promise((resolve, reject) => {
    fsf.readFile(filename, (err, buffer) => {
      if (err) reject(err)
      resolve(buffer)
    })
  })
}