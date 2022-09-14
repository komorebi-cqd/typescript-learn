import { Mark, Color } from "./emums";
import { Deck } from "./types";

//- 创建一副扑克牌
export function createDeck():Deck {
    const deck:Deck = [];
    const morks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of morks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck;
}


export function printDeck(deck:Deck){
    let str = '';
    deck.forEach((item,i) => {
        str += item.color;
        str += item.mark;
        str += '\t';
        if((i+1) % 6 === 0){
            str += '\n'
        }
    })

    console.log(str);
    return str;
}