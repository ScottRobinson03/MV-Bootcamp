const { TukTuk } = require("./tukTuk");

class SmallTukTuk extends TukTuk {
    constructor(name, specialMotto) {
        super(name, 25, 2);
        this._specialMotto = specialMotto;
    }

    get specialMotto() {
        return this._specialMotto;
    }

    set specialMotto(motto) {
        this._specialMotto = motto;
    }

    quickFacts() {
        return `${this.name} is a tuk tuk with a motto of ${this.specialMotto} and a max speed of ${this.maxSpeed}mph that can carry up to ${this.maxCapacity} passengers.`
    }
}

if (require.main === module) {
    const smallBullet = new SmallTukTuk("Small Bullet", "Bullet Power");
    console.log(smallBullet.quickFacts());
    smallBullet.outputDriver();
}


module.exports = { SmallTukTuk };