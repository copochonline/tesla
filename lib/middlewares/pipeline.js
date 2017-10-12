"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var cwd = process.cwd();
function pipeline(file) {
    if (!file) {
        file = path_1.join(cwd, 'conf/pipeline.yml');
    }
    console.log(file);
}
exports.default = pipeline;
