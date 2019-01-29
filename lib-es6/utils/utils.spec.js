import { log, pipe } from './utils';
describe('utils', function () {
    describe('logs', function () {
        it('use pipe', function () {
            log('works');
        });
    });
    describe('pipe', function () {
        var add = function (a, b) { return a + b; };
        var dbl = function (num) { return num * 2; };
        it('use pipe', function () {
            var pipeMath = pipe(add, dbl);
            expect(pipeMath(5, 2)).toEqual(14);
        });
    });
});
//# sourceMappingURL=../../src/src/utils/utils.spec.js.map