class ScooterApp {
    scooterSessions = [];

    constructor() {
        this.stations = {
            Birmingham: [],
            Bristol: [],
            Cardiff: [],
            Edinburgh: [],
            Glasgow: [],
            Liverpool: [],
            London: [],
            Manchester: [],
            Nottingham: [],
            Plymouth: []
        };
        this.registeredUsers = {};
        ScooterApp.scooterSessions.push(this);
    }

    addScooter(location, scooter) {
        if (this.stations[location] === undefined) throw "We currently don't serve that location."

        scooter.station = location;
        this.stations[location].push(scooter);
    }

    logIn(username, password) {
        const errorMessage = "Username or password is incorrect."
        if (this.registeredUsers[username] === undefined) throw errorMessage;
        if (this.registeredUsers[username].password !== password) throw errorMessage

        this.registeredUsers[username].loggedIn = true;
        console.log(`Successfully logged in as ${username}`);
    }

    register(user) {
        if (this.registeredUsers[user.username] !== undefined) {
            console.log("already registered!");
            return;
        }

        if (user.age < 18) {
            console.log("too young to register!");
            return;
        }

        this.registeredUsers[user.username] = {
            password: user.password,
            age: user.age,
            loggedIn: false,
        };
        console.log("user has been registered");
    }

    removeScooter(scooterToRemove) {
        let scooterLocation = "" // we don't do scooterToRemove.station because task says to use the serial :shrug:
        for (let [location, scooters] of Object.entries(this.stations)) {
            for (let scooter of scooters) {
                if (scooter.serial === scooterToRemove.serial) {
                    scooterLocation = location;
                    break;
                }
            }
            if (scooterLocation !== "") break
        }
        
        if (scooterLocation === "") throw "Scooter not found"
        
        const scooterIndex = this.stations[scooterLocation].indexOf(scooterToRemove);
        this.stations[scooterLocation].splice(scooterIndex, 1);
        console.log(`Scooter successfully removed from the ${scooterLocation} station.`)
    }

}


module.exports = ScooterApp;