class Tuktuk {
    constructor(name, maxCapacity, maxSpeed) {
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.maxSpeed = maxSpeed;
        this.currentCapacity = 0;
    }

    get remainingCapacity() {
        return this.maxCapacity - this.currentCapacity;
    }
    
    boardPassengers(numPassengers) {
        const leftOut = numPassengers - this.remainingCapacity;
        if (leftOut > 0) {
            // Not everyone can board
            this.currentCapacity = this.maxCapacity;
            return leftOut;
        }
        // Everyone can board
        this.currentCapacity += numPassengers;
        return 0; // no one was left out
    }

    getRemainingCapacityMessage() {
        return `${this.name} has ${this.remainingCapacity} spaces left.`
    }

    unboardPassengers(numPassengers) {
        if (numPassengers > this.currentCapacity) {
            return "You can only unboard passengers that are currently boarded.";
        }
        this.currentCapacity -= numPassengers;
    }
}


module.exports = { Tuktuk };