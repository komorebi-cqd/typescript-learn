import Deck from "./deck"

const deck = new Deck();

deck.shuff();
deck.print();

const res = deck.publish();
res.player1.print()
console.log('------------');
res.player2.print()
console.log('------------');
res.player3.print()
console.log('------------');
res.left.print()
console.log('------------');




