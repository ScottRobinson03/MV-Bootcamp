const Character = require('../../../d3-static-inheritance/1-easy/static');

describe('Character Class', () => {
    const player1 = new Character('Jo');
    it('constructs new character object',() => {
        expect(player1).toEqual({name:'Jo', xp:1, hp: 100});
    });
    it('new characters add to Character.totalCharacters', () => {
        expect(Character.totalCharacters).toBe(1);
    });
})