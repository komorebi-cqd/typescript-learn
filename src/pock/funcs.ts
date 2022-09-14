import { Mark, Color } from "./emums";
import { Deck,NormalCard,Joker } from "./types";

//- 创建一副扑克牌
export function createDeck():Deck {
    const deck:Deck = [];
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
            deck.push(card)
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
    deck.push(joker,joker2);
    return deck;
}


export function printDeck(deck:Deck){
    let str = '';
    deck.forEach((item,i) => {
        str += item.getString();
        str += '\t';
        if((i+1) % 6 === 0){
            str += '\n'
        }
    })

    console.log(str);
    return str;
}