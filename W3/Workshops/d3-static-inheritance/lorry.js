const { TukTuk } = require("./tukTuk");
const { SmallTukTuk } = require("./smallTukTuk")
const { MediumTukTuk } = require("./mediumTukTuk")

class Lorry {
    constructor() {
        this.cargo = [];
    }

    addCargo(vehicle) {
        this.cargo.push(vehicle);
    }
}

if (require.name === module) {
    const bullet = new TukTuk("Bullet", 35, 5)
    const smallBullet = new SmallTukTuk("Small Bullet", "Bullet Power");
    const mediumBullet = new MediumTukTuk("medium bullet");

    const myLorry = new Lorry();
    myLorry.addCargo(bullet);
    myLorry.addCargo(smallBullet);
    myLorry.addCargo(mediumBullet);
    console.log(myLorry.cargo);
}


module.exports = {Lorry};