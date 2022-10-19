class Character {
    static totalCharacters = 0;

    constructor(name, hp=100) {
        this.name = name;
        this.xp = 1;
        this.hp = hp;
        Character.totalCharacters += 1;
    }
}


module.exports = Character;