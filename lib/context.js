"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = require('events');
// const console = require('../extra/console')
// const { resolve, normalize } = require('path')
// const { existsSync } = require('fs')
// const upgrade = require('./upgrade')
// const { _name } = require('../package')
// const requireDir = require('require-dir')
// const { middleware, template } = requireDir('./managers')
// const utils = require('./common/utils')
// class Context extends EventEmitter {
//   constructor(cli, options) {
//     super()
//     options = options || {}
//     // utils.copy(options, this)
//     // utils.copy(cli.params, this)
//     this.cli = cli
//     // this.cli.pkg = pkg
//     this.middlewareManager = middleware
//     this.templateManager = template
//     this.middlewares = []
//     this.command = cli.original
//     this.cwd = process.cwd()
//     this.console = console
//     // this.utils = utils
//     // this.inquirer = utils.inquirer
//     this.configName = `./.${_name}`
//     this.configPath = resolve(this.cwd, this.configName)
//     this.project = this.getProjectInfo()
//   }
//   getProjectInfo() {
//     let packageJson = normalize(`${this.cwd}/package.json`)
//     if (!existsSync(packageJson)) return {}
//     return require(packageJson)
//   }
//   async run() {
//     await upgrade.check()
//   }
// }
// module.exports = Context
var Context = /** @class */ (function (_super) {
    __extends(Context, _super);
    function Context(ctx, options) {
        return _super.call(this) || this;
    }
    return Context;
}(EventEmitter));
exports.default = Context;
