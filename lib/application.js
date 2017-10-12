"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./common/compose");
var pipeline_1 = require("./middlewares/pipeline");
var Application = /** @class */ (function () {
    function Application() {
        this.middlewares = [];
        // this.middlewareMgr = middlewareMgr
        // this.templateMgr = templateMgr
        this.use(pipeline_1.default);
        this.start();
    }
    Application.prototype.use = function (middleware) {
        this.middlewares.push(middleware);
        return this;
    };
    Application.prototype.start = function () {
        var fn = compose_1.default(this.middlewares);
        var ctx = Context;
        fn();
    };
    //
    Application.origin = {
        name: 'application'
    };
    return Application;
}());
exports.default = Application;
