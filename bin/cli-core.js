const console = require('../extra/console')
const { version } = require('../package')
const { normalize } = require('path')
const cmdline = require('cmdline')
const { Context, middlewares } = require('..')
const debug = require('debug')('cli-core')

const ALIAS = {
  i: 'init',
  d: 'dev',
  s: 'start',
  b: 'build',
  a: 'add',
  t: 'test',
  p: 'publish',
  r: 'run',
  u: 'update',
  c: 'config'
}

cmdline.onFail = async (err) => {
  if (process.env.DN_DEBUG) {
    console.error(err)
  } else {
    console.error(err.message)
  }
  debug('error', err)
  this.emit('fail', err)
  if (!this.disabledExit) process.exit(1)
}

cmdline.onDone = async (context) => {
  debug('done', context.command)
  this.emit('done', context)
}

cmdline
  .version(version)
  .help(normalize(`@${__dirname}/help.txt`))
  .error(cmdline.onFail)

  .root.command(['init', 'i'])
  .option(['-t', '--template'], 'string')
  .action(async function (cmd, template) {
    cmd = ALIAS[cmd] || cmd
    this.set('command', cmd)

    try {
      let downloadCtx = new Context(this, {
        template, cmd,
        middlewares: [middlewares.init]
      })
      await downloadCtx.run()
    } catch (err) {
      cmdline.onFail(err)
    }
  }, false)

module.exports = cmdline

