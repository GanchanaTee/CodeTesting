const pokdengController = require('./pokdengController');
const {Card, Deck} = require('../Models/Deck');

test('Must check score cards corectly', () => { 
    const yourHand01_01 = new Card('Hearts', 7);
    const yourHand01_02 = new Card('Diamonds', 'Ace');
    const yourHand01 = [yourHand01_01, yourHand01_02];
    const dealerHand01_01 = new Card('Hearts', 8);
    const dealerHand01_02 = new Card('Hearts', 'Jack');
    const dealerHand01 = [dealerHand01_01, dealerHand01_02];
        expect(pokdengController.checkScore(yourHand01,dealerHand01)).toStrictEqual([8, 8]);
//     expect(pokdengController.checkScore(['Hearts-7','Diamonds-King'],['Hearts-8','Hearts-Queen'])).toStrictEqual([7, 8]);
});

test('Reward from game', () => {
    expect(pokdengController.scoreCard(8,9,5)).toBe(-5);
    expect(pokdengController.scoreCard(7,2,10)).toBe(10);
    expect(pokdengController.scoreCard(2,2,8)).toBe(0);
});