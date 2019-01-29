"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(value) {
    console.log(value);
}
exports.log = log;
var _pipe = function (a, b) { return function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return b(a.apply(void 0, arg));
}; };
exports.pipe = function () {
    var ops = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ops[_i] = arguments[_i];
    }
    return ops.reduce(_pipe);
};
//# sourceMappingURL=../../src/src/utils/utils.js.map