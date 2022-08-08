let say:string = "hello world";

console.log(say,'222');

let arrString:string[];


function combine(a:string,b:string):string;
function combine(a:number,b:number):number;
function combine(a:string|number,b:string|number):number | string{
    if(typeof a === 'string' && typeof b === 'string'){
        return a+b
    }else if(typeof a === 'number' && typeof b === 'number'){
        return a*b
    }
    throw new Error("'错误参数");
}

const result = combine(1,2);

function sum(a:number,b:number,c?:number){
    if(c){
        return a + b + c;
    }
    return a + b;
}
sum(3,4)
sum(3,4,5)



