const { Context } = require('../../../lib')

module.exports = {
  command: 'init',
  desc: '创建 && 初始化',
  builder(yargs) {
    return yargs
      .usage('用法：$0 init [options]')
      .options({
        type: {
          alias: 't',
          desc: '技术栈生态套件',
          default: 'h5',
          required: true
          // choices: ['h5', 'react', 'vue']
        },
        subtype: {
          alias: 'st',
          desc: '生成的技术元件',
          default: 'module',
          required: true
          // choices: ['module', 'page', 'project']
        }
      })
      .epilog('Copyright © 1999-2017 Copoch. All rights reserved. 新纪元公司 版权所有')
      .example('$0 init -t react/module')
      .argv
  },
  handler(argv) {
    new Context(this, {
      argv
    })
  }
}