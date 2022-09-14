import { Mark, Color } from "./emums";
import { Card, Joker, NormalCard } from "./types";


interface interfacePublish{
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck
}


export default class Deck{
    cards: Card[] = []
    constructor(cards?: Card[]){
        if(cards){
            this.cards = cards;
        }else{
            this.init();
        }
    }
    //初始化牌
    private init(){
        const morks = Object.values(Mark);
        const colors = Object.values(Color);
        for (const m of morks) {
            for (const c of colors) {
                const card:NormalCard = {
                    color: c,
                    mark: m,
                    getString(){
                        return this.color + this.mark
                    }
                }
                this.cards.push(card)
            }
        }
        const joker: Joker = {
            type: '大王',
            getString(){
                return this.type;
            }
        }
        const joker2: Joker = {
            type: '小王',
            getString(){
                return this.type;
            }
        }
        this.cards.push(joker,joker2);
    }

    //打印牌
    print(){
        let str = '';
        this.cards.forEach((item,i) => {
            str += item.getString();
            str += '\t';
            if((i+1) % 6 === 0){
                str += '\n'
            }
        })

        console.log(str);
        return str;
    }

    //洗牌
    shuff(){
        this.cards.forEach((item,i) => {
            const temp = this.cards[this.getRandom(0,this.cards.length)];
            this.cards[this.getRandom(0,this.cards.length)] = item;
            this.cards[i] = temp;
        });
    }

    //发牌
    publish():interfacePublish{
        let player1: Deck,player2: Deck,player3: Deck,left: Deck;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = this.takeCards(3);
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    private takeCards(n: number): Deck{
        const cards: Card[] = [];
        for (let index = 0; index < n; index++) {
            // const element = this.card[index];
            // cards.push(element)
            cards.push(this.cards.shift() as Card)
        }
        return new Deck(cards)
    }

    //获取随机数
    private getRandom(max:number,min:number){
        const des = max - min;
        return Math.floor(Math.random() * des + min)
    }
}