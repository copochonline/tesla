const yargs = require('yargs')
const console = require('../console')
const { version } = require('../../package.json')

class Command {
  constructor() {
    return yargs
      .version(version).alias('version', 'V')
      .usage('用法：$0 <command> [options]')
      .help('help').alias('help', 'h')
      .epilog('Copyright © 1999-2017 Copoch. All rights reserved. 新纪元公司 版权所有')
      .example('$0 init -t react/module')
      .options({
        verbose: {
          alias: 'v',
          desc: '显示详尽的日志信息'
        }
      })
      .commandDir('./cmds')
      .demandCommand(1, 'You need at least one command before moving on')
      .argv
  }
}

module.exports = Command
