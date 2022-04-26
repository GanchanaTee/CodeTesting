const {Deck} = require('../Models/Deck');

exports.drawCard = () => {
    let yourHand = [];
    let dealerHand = [];

    const newDeck = new Deck();
    newDeck.generateInitialDeck();
    newDeck.shuffleCards();

    for (let i = 0; i<4 ; i ++) {
        const drawYourCard = newDeck.drawCard();
        if (i%2 === 0) {
            yourHand.push(drawYourCard.toString());
        } else {
            dealerHand.push(drawYourCard.toString());
        }
    }
    return [yourHand,dealerHand]
}

exports.checkScore = (yourHand, dealerHand) => {
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

exports.scoreCard = (yourScore, dealerScore,yourBet) => {
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