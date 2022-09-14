import { Color, Mark } from "./emums"

export type Deck = Card[]


export interface Card {
    getString(): string
}

export interface Joker extends Card {
    type: '大王' | '小王'
}

export interface NormalCard extends Card {
    color: Color
    mark: Mark
}
