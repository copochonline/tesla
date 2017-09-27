const CODES = {
  'white': 37,
  'grey': 90,
  'black': 30,
  'blue': 34,
  'cyan': 36,
  'green': 32,
  'magenta': 35,
  'red': 31,
  'yellow': 33
}

function render(code) {
  return function(text) {
    return '\x1B[' + code.toString() + 'm' + text + '\x1B[39m'
  }
}

var colors = {}

Object.keys(CODES).forEach((name) => {
  colors[name] = render(CODES[name])
})

module.exports = colors
