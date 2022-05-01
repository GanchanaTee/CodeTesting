class Card {
    constructor(suit, value) {
        this.suit = suit,
        this.value = value
    }
}

class Deck {
    constructor() {
        this.deck = [];
    };

    showDeck() {
        return this.deck;
    }

    generateInitialDeck() {
        this.deck = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (let i = 0; i < suits.length ; i++) {
            for (let j = 0; j < values.length ; j++) {
                const card = new Card(suits[i], values[j])
                this.deck.push(card);
            };
        };
    };

    shuffleCards() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    };

    chooseRandomCard() {
        let numberOfCards = this.deck.length;
        let j = Math.floor(Math.random() * numberOfCards);
        return this.deck.splice(j-1,1);
    };

    drawCard() {
        return this.deck.pop();
    };

};

module.exports = {
    Card, Deck
};