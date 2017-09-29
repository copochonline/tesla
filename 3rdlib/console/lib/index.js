const checkVersion = require('check-version')
const ConsoleBase = console.Console
const ora = require('ora')
const chalkAnimation = require('chalk-animation')
const util = require('util')
const colors = require('./colors')

require('console.table')

const OVERRIDE_METHOD_INFOS = [
  {
    name: 'info',
    color: 'green'
  },
  {
    name: 'warn',
    color: 'yellow'
  },
  {
    name: 'error',
    color: 'red'
  }
]

class Console extends ConsoleBase {
  constructor(out, err) {
    super(out, err)

    this.out = out
    this.err = err
    this.colors = colors

    this._overrideMethods()
    this._initColorMethods()
  }

  _overrideMethods() {
    OVERRIDE_METHOD_INFOS.forEach((methodInfo) => {
      const { name, color } = methodInfo
      const method = this[name]

      this[name] = (...args) => {
        const text = util.format.apply(util, args)
        const colorRender = this.colors[color]

        return method.call(this, colorRender ? colorRender(text) : text)
      }
    })
  }

  _initColorMethods() {
    Object.keys(this.colors).forEach((color) => {
      this[color] = (text) => {
        text = String(text)
        this.write(this.colors[color](text))
      }
    })
  }

  write(...args) {
    this.out.write.apply(this.out, args)
  }

  clear() {
    this.write('\u001B[2J\u001B[0;0f')
  }

  table(...args) {
    console.table.apply(this, args)
  }

  loading(text, opts) {
    opts = opts || {}
    opts.color = opts.color || 'green'
    opts.textColor = opts.textColor || opts.color

    let colorRender = this.colors[opts.textColor]
    let spinner = ora(colorRender(text)).start()

    spinner.color = opts.color

    return spinner
  }

  animation(text, opts) {
    opts = opts || {};
    opts.type = opts.type || 'rainbow';
    let ref = chalkAnimation[opts.type](text);
    return ref;
  }

}

// Export 
module.exports = new Console(process.stdout, process.stderr)
exports.Console = Console
