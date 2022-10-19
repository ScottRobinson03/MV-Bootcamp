const Mage = require('../../../d3-static-inheritance/1-easy/inherit');

describe('Mage Class', () => {
    const mage1 = new Mage('Mo');
    it('constructs new mage object', () => {
        expect(mage1).toEqual({name: 'Mo', xp: 1, hp: 80, mana: 100});
    })
    it('adds to Mage.totalCharacters', () => {
        expect(Mage.totalCharacters).toBe(1);
    })
})