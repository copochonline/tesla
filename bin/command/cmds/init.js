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
          desc: '技术栈生态套件\n可选值：["h5", "react", "vue", "webapp"]',
          required: true
        },
        subtype: {
          alias: 'st',
          desc: '生成的技术元件\n可选值：["component", "module", "page"]',
          required: true
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