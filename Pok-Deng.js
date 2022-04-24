const prompt = require("prompt-sync")({ sigint: true });

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
    } 
    reset() {
        this.deck = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(suits[suit] + "-" + values[value]);
            }
        }
    } 
    draw() {
        let numberOfCards = this.deck.length;
        let j = Math.floor(Math.random() * numberOfCards);
        return this.deck.splice(j-1,1);
    } 
}

const checkScore = (yourHand, dealerHand) => {
    const checkPoint = (input) => {
    switch(input) {
        case "King":
            return 0; break;
        case "Queen":
            return 0; break;
        case "Jack":
            return 0; break;
        case "Ace":
            return 1; break;
        default:
            return parseInt(input)
        }
    }

    let checkPointCard = yourHand[0].split('-')[1];
    checkPoint(checkPointCard);

    let yourScore = (checkPoint(yourHand[0].split('-')[1]) + checkPoint(yourHand[1].split('-')[1])) % 10;
    let dealerScore = (checkPoint(dealerHand[0].split('-')[1]) + checkPoint(dealerHand[1].split('-')[1])) % 10;
    return [yourScore, dealerScore]

};

const playCard = (yourScore, dealerScore,yourBet) => {
    let reward = 0;
    if (yourScore > dealerScore) {
        console.log(`You Won!!!, received ${yourBet} chips`);
        return reward = yourBet;
    } else if (yourScore < dealerScore) {
        console.log(`You Lose!!!, lost ${yourBet} chips`);
        return reward = -yourBet;
    } else {
        console.log(`You draw!!!`)
        return reward = 0;
    };
};

const drawCard = () => {
    let yourHand = [];
    let dealerHand = [];

    const newDeck = new Deck();
    newDeck.reset()

    for (let i = 0; i<4 ; i ++) {
        const drawYourCard = newDeck.draw();
        if (i%2 === 0) {
            yourHand.push(drawYourCard.toString());
        } else {
            dealerHand.push(drawYourCard.toString());
        }
    }
    return [yourHand,dealerHand]
}


const PokDeng = () => {
    console.log("Start");
    let yourReward = 0;
    let start = true;
    while (start) {
        console.log('Please put your bet');
        const yourBet = prompt('');
        const yourBetNumber = parseInt(yourBet);
        let [yourHand, dealerHand] = drawCard();
        console.log(`You got ${yourHand}`);
        console.log(`Dealer got ${dealerHand}`);
        let [yourScore, dealerScore] =checkScore(yourHand,dealerHand)
        let reward = playCard(yourScore, dealerScore, yourBetNumber)
        yourReward += reward
        console.log('Wanna play more (Yes/No)?');
        const playAgain = prompt('');
        if (playAgain === 'Yes') {
            start = true;
        } else {
            start = false;
        }
    };
    console.log(`You got total ${yourReward} chips`)
};

PokDeng()
