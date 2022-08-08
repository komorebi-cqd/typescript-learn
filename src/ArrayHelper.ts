// class ArrayHelper{

//     // 发牌
//     take<T>(arr:T[],n:number){
//         if(n >= arr.length){
//             return arr;
//         }
//         const newArr:T[] = [];
//         for(let i=0; i< n;i++){
//             newArr.push(arr[i])
//         }
//         return newArr;
//     }
//     // 洗牌
//     shffle<T>(arr:T[]){
//         arr.forEach((it,i) => {
//             const temp = this.getRandom(0,arr.length);
//             const old = arr[temp];
//             arr[temp] = it;
//             arr[i] = old;
//         });
//         return arr;
//     }

//     private getRandom(min:number,max:number) {
//         const des = max - min;
//         return Math.floor(Math.random() * des + min)
//     }
// }

class ArrayHelper<T>{

    constructor(private arr:T[]){}
    // 发牌
    take(n:number){
        if(n >= this.arr.length){
            return this.arr;
        }
        const newArr:T[] = [];
        for(let i=0; i< n;i++){
            newArr.push(this.arr[i])
        }
        return newArr;
    }
    // 洗牌
    shffle(){
        this.arr.forEach((it,i) => {
            const temp = this.getRandom(0,this.arr.length);
            const old = this.arr[temp];
            this.arr[temp] = it;
            this.arr[i] = old;
        });
        return this.arr;
    }

    private getRandom(min:number,max:number) {
        const des = max - min;
        return Math.floor(Math.random() * des + min)
    }
}


export default ArrayHelper;