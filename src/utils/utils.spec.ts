import { log, pipe } from './utils';

describe('utils', () => {
    describe('logs', () => {
      it('use pipe', () => {
        log('works');
      });
    });

    describe('pipe', () => {

      const add = (a: number, b: number) => a + b;
      const dbl = (num: number) => num * 2;

      it('use pipe', () => {
        const pipeMath = pipe(add, dbl);
        expect(pipeMath(5, 2)).toEqual(14);
      });
    });
  });
