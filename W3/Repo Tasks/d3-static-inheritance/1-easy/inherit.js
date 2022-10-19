const Character = require("./static");

class Mage extends Character {
    constructor(name) {
        super(name, 80);
        this.mana = 100;
    }
}


module.exports = Mage;