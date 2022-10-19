const { TukTuk } = require("./tukTuk");

class MediumTukTuk extends TukTuk {
    constructor(name) {
        super(name, 30, 4);
    }
}


module.exports = { MediumTukTuk };