const console = require('../extra/console')
const cache = require('./cache')
const pkg = require('../package')
const store = require('./store')
const debug = require('debug')('upgrade')

async function checkCurrentVersion() {
  let cacheInfo = await cache.get('version')
  cacheInfo.value = cacheInfo.value ? cacheInfo.value.toString() : ''
  debug('checkCurrentVersion', 'cache', cacheInfo.value)
  debug('checkCurrentVersion', 'pkg', pkg.version)

  if (pkg.version !== cacheInfo.value) {
    await store.clean('caches')
    await cache.set('version', pkg.version)
  }
}

exports.check = async () => {
  console.info('Check the latest version...')

  await checkCurrentVersion()
}