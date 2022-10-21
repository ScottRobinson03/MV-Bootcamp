class Scooter {
    static #nextSerial = 1;

    constructor(station, user) {
        this.station = station;
        this.user = user;

        this.serial = Scooter.nextSerial
        this.charge = Math.max(1, Math.floor(Math.random() * 100))
        this.isBroken = false;
        this.docked = true;
    }

    static get nextSerial() {
        const serial = Scooter.#nextSerial;
        Scooter.#nextSerial++;
        return serial;
    }

    dock(station) {
        if (station === undefined) throw "Docking station required!";

        this.docked = true;
        this.station = station;
        this.user = '';
    }

    async recharge() {
        // linear charge time, where 0% to 100% takes 3.5 seconds));
        await new Promise(resolve => setTimeout(resolve, 3500 * ((100 - this.charge) / 100)));
        this.charge = 100;
    }

    rent() {
        if (this.isBroken) throw "Scooter is broken, please send a repair request.";
        if (this.charge <= 20) throw "Scooter low on battery, please charge."

        this.docked = false;
        console.log("Enjoy the ride!");
    }

    async requestRepair() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        this.isBroken = false;
    }
}


module.exports = Scooter;