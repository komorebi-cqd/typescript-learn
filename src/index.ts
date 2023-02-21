let say: string = "hello world";

console.log(say, '222');

let arrString: string[];


function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): number | string {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a * b
    }
    throw new Error("'错误参数");
}

const result = combine(1, 2);

function sum(a: number, b: number, c?: number) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
sum(3, 4)
sum(3, 4, 5)


const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(null))

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value:arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as unknown as keyof T).length) {
        return { value:arg, is: false }
    }
    return { value:arg, is: !!arg }
}


console.log(isTrue(23123))