"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var debug = require('debug')('stamp');
var store = require('./store');
var normalize = require('path').normalize;
var configs = require('./configs');
var fs = require('fs');
var writeFile = require('./common/writeFile');
var TimeStamp = /** @class */ (function () {
    function TimeStamp(name) {
        this.name = name.replace(/\//, '-');
        debug("constructor", name);
    }
    TimeStamp.prototype.getFileName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storeDir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debug('getFileName', this.name);
                        return [4 /*yield*/, store.getPath('stamps')];
                    case 1:
                        storeDir = _a.sent();
                        return [2 /*return*/, normalize(storeDir + "/" + this.name + ".stamp")];
                }
            });
        });
    };
    TimeStamp.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filename;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFileName()];
                    case 1:
                        filename = _a.sent();
                        debug('read', filename);
                        if (!fs.existsSync(filename))
                            return [2 /*return*/, 0];
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeStamp.prototype.write = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filename;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFileName()];
                    case 1:
                        filename = _a.sent();
                        debug('write', filename);
                        return [2 /*return*/, writeFile(filename, Date.now())];
                }
            });
        });
    };
    TimeStamp.prototype.isExpire = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stamp, ttl, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        debug('isExpire', this.name);
                        return [4 /*yield*/, this.read()];
                    case 1:
                        stamp = _c.sent();
                        if (!process.env.DN_NO_CACHE) return [3 /*break*/, 2];
                        _a = 0;
                        return [3 /*break*/, 4];
                    case 2:
                        _b = Number;
                        return [4 /*yield*/, configs.getRc('cacheTTL', { remote: false })];
                    case 3:
                        _a = _b.apply(void 0, [_c.sent()]);
                        _c.label = 4;
                    case 4:
                        ttl = _a;
                        return [2 /*return*/, Date.now() - stamp >= ttl];
                }
            });
        });
    };
    return TimeStamp;
}());
module.exports = TimeStamp;
