"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiddlewareManager = /** @class */ (function () {
    function MiddlewareManager() {
    }
    MiddlewareManager.prototype.add = function (middleware) {
    };
    MiddlewareManager.prototype.remove = function (middleware) {
    };
    MiddlewareManager.cache = {
        allMiddlewares: [],
        usingMiddlewares: []
    };
    return MiddlewareManager;
}());
exports.default = new MiddlewareManager;
