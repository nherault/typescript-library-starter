export function log(value: any): void {
    console.log(value);
}

const _pipe = (a: Function, b: Function) => (...arg: any[]) => b(a(...arg));

export const pipe = (...ops: any[]) => ops.reduce(_pipe);
