class TukTuk {

    static drivers = ['Bobby', 'Alex', 'Grace'];

    #name
    #maxSpeed
    #maxCapacity

    constructor(name, maxSpeed, maxCapacity) {
        this.#name = name;
        this.#maxSpeed = maxSpeed;
        this.#maxCapacity = maxCapacity;
    }

    get name() {
        return this.#name;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    get maxCapacity() {
        return this.#maxCapacity;
    }

    set maxCapacity(newValue) {
        this.#maxCapacity = newValue;
    }

    quickFacts() {
        return `${this.name} is a tuk tuk with a max speed of ${this.maxSpeed}mph that can carry up to ${this.maxCapacity} passengers.`
    }

    outputDriver() {
        const driver = TukTuk.findSubstituteDriver();
        if (!driver) {
            console.log(`There's no available drivers for ${this.name}.`);
            return;
        }
        console.log(`${this.name} has ${driver} as the assigned driver.`)
    }

    static findSubstituteDriver() {
        if (TukTuk.drivers.length === 0) return null;

        const randIndex = Math.floor(Math.random(0) * TukTuk.drivers.length);
        return TukTuk.drivers.splice(randIndex, 1)[0];
    }
}

if (require.main === module) {
    const bullet = new TukTuk("The Bullet", 40, 5);
    console.log(bullet.quickFacts());
    bullet.outputDriver();    
}


module.exports = { TukTuk };