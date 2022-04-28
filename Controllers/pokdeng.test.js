const pokdengController = require('./pokdengController');

test('Must check score cards corectly', () => { 
    expect(pokdengController.checkScore(['Hearts-7','Diamonds-Ace'],['Hearts-8','Hearts-Jack'])).toStrictEqual([8, 8]);
    expect(pokdengController.checkScore(['Hearts-7','Diamonds-King'],['Hearts-8','Hearts-Queen'])).toStrictEqual([7, 8]);
});

test('Reward from game', () => {
    expect(pokdengController.scoreCard(8,9,5)).toBe(-5);
    expect(pokdengController.scoreCard(7,2,10)).toBe(10);
    expect(pokdengController.scoreCard(2,2,8)).toBe(0);
})