import './pock'; //扑克牌例子
// import './intefaceTest' 
// import './classTest'

//回调函数：判断数组中的某一项是否满足条件
//下面这种类型别名不具有通用性，可以使用泛型
// type callback = (n: number,i: number) => boolean
//泛型加类型别名 
// type callback<T> = (n:T,i: number) => boolean
//泛型加接口
// interface callback<T> {
//     (n: T,i: number): boolean
// }


// function filter<T>(arr: T[],callback:callback<T>):T[]{
//     const newArr:T[] = []
//     arr.forEach((it,i) => {
//         if(callback(it,i)){
//             newArr.push(it);
//         }
//     });
//     return newArr;
// }


// const arr = [2,45,233,64,1,55];

// console.log(filter(arr,n => n % 2 !== 0))


// import ArrayHelper from "./ArrayHelper";

// const arrayHelper = new ArrayHelper([1,2,3,4,5,6,7,8,9]);

// console.log(arrayHelper.take(2));
// console.log(arrayHelper.shffle());

//泛型约束

// interface hasNameProperty{
//     name: string
// }

// function nameToUperCase<T extends hasNameProperty>(obj:T): T{
//     obj.name = obj.name.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ');
//     return obj;
// }

// const obj = {
//     name: 'aaa bbb',
//     age: 22,
//     gender: '男'
// }

// console.log(nameToUperCase(obj))

//多泛型 

// function mixinArray<T,K>(arr1: T[],arr2:K[]): (T|K)[]{
//     const newArr:(T|K)[] = []
//     //你要实现的代码
//     return newArr;
// }
