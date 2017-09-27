const EventEmitter = require('events')
const console = require('../extra/console')
const path = require('path')
const fs = require('fs')
const upgrade = require('./upgrade')
const pkg = require('../package')
const requireDir = require('require-dir')
const { middleware, template } = requireDir('./managers')
const utils = require('./common/utils')

class Context extends EventEmitter {
  constructor(cli, options) {
    super()

    options = options || {}
    utils.copy(options, this)
    utils.copy(cli.params, this)
    this.cli = cli
    this.cli.pkg = pkg
    this.middlewareMgr = middleware
    this.templateMgr = template
    this.middlewares = options.middlewares || []
    this.command = cli.get('command')
    this.cwd = process.cwd()
    this.console = console
    this.utils = utils
    this.inquirer = utils.inquirer
    this.configName = `./.${pkg.name}`
    this.configPath = path.resolve(this.cwd, this.configName)
    this.project = this.getProjectInfo()
  }

  getProjectInfo() {
    let pkgFile = path.normalize(`${this.cwd}/package.json`)
    if (!fs.existsSync(pkgFile)) return {}
    return require(pkgFile)
  }

  async run() {
    await upgrade.check()


  }
}

module.exports = Context