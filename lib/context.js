const EventEmitter = require('events')
const console = require('../extra/console')
const { resolve, normalize } = require('path')
const { existsSync } = require('fs')
const upgrade = require('./upgrade')
const { _name } = require('../package')
const requireDir = require('require-dir')
const { middleware, template } = requireDir('./managers')
const utils = require('./common/utils')

class Context extends EventEmitter {
  constructor(cli, options) {
    super()

    options = options || {}
    // utils.copy(options, this)
    // utils.copy(cli.params, this)
    this.cli = cli
    // this.cli.pkg = pkg
    this.middlewareManager = middleware
    this.templateManager = template
    this.middlewares = []
    this.command = cli.original
    this.cwd = process.cwd()
    this.console = console
    // this.utils = utils
    // this.inquirer = utils.inquirer
    this.configName = `./.${_name}`
    this.configPath = resolve(this.cwd, this.configName)
    this.project = this.getProjectInfo()
  }

  getProjectInfo() {
    let packageJson = normalize(`${this.cwd}/package.json`)
    if (!existsSync(packageJson)) return {}
    return require(packageJson)
  }

  async run() {
    await upgrade.check()


  }
}

module.exports = Context