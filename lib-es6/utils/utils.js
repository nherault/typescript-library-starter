export function log(value) {
    console.log(value);
}
var _pipe = function (a, b) { return function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return b(a.apply(void 0, arg));
}; };
export var pipe = function () {
    var ops = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ops[_i] = arguments[_i];
    }
    return ops.reduce(_pipe);
};
//# sourceMappingURL=../../src/src/utils/utils.js.map