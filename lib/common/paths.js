"use strict";
var _this = this;
var normalize = require('path').normalize;
var name = require('../../package').name;
var ENV = process.env;
// 过滤删除 scope
function extractName(name) {
    if (name === void 0) { name = ''; }
    if (!name)
        return name;
    return name.split('/').pop();
}
name = extractName(name);
exports.homePath = function () {
    return ENV.HOME || ENV.USERPROFILE || (ENV.HOMEDRIVE + ENV.HOMEPATH);
};
exports.dataPath = function () {
    return ENV.HOME || ENV.APPDATA || ENV.LOCALAPPDATA || ENV.TMPDIR || ENV.TEMP;
};
exports.storePath = function () {
    return normalize(_this.dataPath() + "/." + name);
};
exports.rcPath = function () {
    return _this.homePath() + "/." + name + "rc";
};
