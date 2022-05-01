const prompt = require("prompt-sync")({ sigint: true });
const pokdengController = require('./Controllers/pokdengController');

const StartPokDeng = () => {
    let yourReward = 0;
    let start = true;
    while(start) {
        console.log('Please put your bet');
        const yourBet = prompt('');
        const yourBetNumber = parseInt(yourBet);
        let [yourHand,dealerHand] = pokdengController.drawCard();
        console.log(`You got ${yourHand[0].suit}-${yourHand[0].value}, ${yourHand[1].suit}-${yourHand[1].value}`);
        console.log(`Dealer got ${dealerHand[0].suit}-${dealerHand[0].value}, ${dealerHand[1].suit}-${dealerHand[1].value}`);
        let [yourScore, dealerScore] = pokdengController.checkScore(yourHand,dealerHand);
        let reward = pokdengController.scoreCard(yourScore, dealerScore, yourBetNumber);
        yourReward += reward;
        console.log('Wanna play more (Yes/No)?');
        const playAgain = prompt('');
        if (playAgain === 'Yes') {
            start = true;
        } else {
            start = false;
        };
    };
    console.log(`You got total ${yourReward} chips`)
};

StartPokDeng();