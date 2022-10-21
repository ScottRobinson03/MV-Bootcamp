const Scooter = require('../src/Scooter');
const ScooterApp = require('../src/ScooterApp');

describe('Testing ScooterApp constructor', () => {
    ScooterApp.scooterSessions = []; // ensure empty
    const app = new ScooterApp();

    test('stations property is set', () => {
        expect(app).toHaveProperty('stations');
    });

    test('registeredUsers property is set', () => {
        expect(app).toHaveProperty('registeredUsers');
    });

    test('constructed instance is added to scooterSessions', () => {
        expect(ScooterApp.scooterSessions).toContain(app);
    });
});

describe('Testing ScooterApp.addScooter() method', () => {
    const app = new ScooterApp();
    const scooter = new Scooter('London', 'fakeUser');
    
    function addScooterInvalidLocation() {
        app.addScooter('invalidLocation', scooter);
    }

    test("Passing an invalid location throws an error message", () => {
        expect(addScooterInvalidLocation).toThrow("We currently don't serve that location.");
    });

    test("Passing a valid location updates the scooter & the stations property", () => {
        app.stations = {"Nottingham": []}; // ensure Nottingham is a station
        app.addScooter('Nottingham', scooter);
        expect(scooter.station).toBe("Nottingham");
        expect(app.stations['Nottingham']).toContain(scooter);
    });
});

describe('Testing ScooterApp.logIn() method', () => {
    const app = new ScooterApp();

    function logInInvalidUsername() {
        app.logIn("invalidUsername", "password");
    }

    function logInInvalidPassword() {
        app.logIn("username", "invalidPassword");
    }

    app.registeredUsers = {
        "username": {
            password: "password",
            age: 18,
            loggedIn: false,
        }
    };

    test("Passing an invalid username throws an error message", () => {
        expect(logInInvalidUsername).toThrow("Username or password is incorrect.");
    });

    test("Passing an invalid password throws an error message", () => {
        expect(logInInvalidPassword).toThrow("Username or password is incorrect.");
    });

    test("Passing a valid login updates registeredUsers[username] and logs to console", () => {
        const spy = jest.spyOn(console, 'log');
        app.logIn("username", "password");

        expect(app.registeredUsers["username"].loggedIn).toBe(true);
        expect(spy).toHaveBeenCalledWith("Successfully logged in as username");
    });
});

describe("Testing ScooterApp.register() method", () => {
    const app = new ScooterApp();

    test('Registering an already registered user logs an error message', () => {
        const spy = jest.spyOn(console, 'log');
        const mockRegisteredUser = {
            "username": "Jefferson",
            "password": "Jefferson01",
            "age": 36
        }

        app.registeredUsers[mockRegisteredUser.username] = {
            password: mockRegisteredUser.password,
            age: mockRegisteredUser.age,
            loggedIn: false
        };

        app.register(mockRegisteredUser);
        expect(spy).toHaveBeenCalledWith("already registered!");
    });
    
    test('Registering an underage user logs an error message', () => {
        const spy = jest.spyOn(console, 'log');
        const mockUnderageUser = {
            "username": "Jeff",
            "password": "Jeff01",
            "age": 17
        };

        app.register(mockUnderageUser);
        expect(spy).toHaveBeenCalledWith("too young to register!");
    });

    test('Registering a new, of age user logs a success method and updates the registeredUsers property', () => {
        const spy = jest.spyOn(console, 'log');
        const mockOfAgeUser = {
        "username": "Geoffrey",
        "password": "Geoffrey01",
        "age": 18
        };

        app.register(mockOfAgeUser);
        expect(spy).toHaveBeenCalledWith("user has been registered");
        expect(app.registeredUsers[mockOfAgeUser.username]).toEqual({password: mockOfAgeUser.password, age: mockOfAgeUser.age, loggedIn: false});
    });
});

describe("Testing ScooterApp.removeScooter() method", () => {
    const app = new ScooterApp();

    function removeNonExistantScooter() {
        app.stations = {Birmingham: [], Bristol: []}; // ensure that scooter doesn't exist
        app.removeScooter(new Scooter("London", "fakeUser"));
    }

    test('Removing a non-existent scooter throws an error message', () => {
        expect(removeNonExistantScooter).toThrow("Scooter not found");
    });

    test('Removing an existing scooters logs a message and updates the stations property', () => {
        const scooter = new Scooter("London", "fakeUser");
        const otherScooter = new Scooter("Edinburgh", "fakeUser2"); // needed for coverage

        app.stations = {Birmingham: [otherScooter], Bristol: [scooter]}; // ensure that scooter exists
        const spy = jest.spyOn(console, 'log');

        app.removeScooter(scooter);

        expect(spy).toHaveBeenCalledWith("Scooter successfully removed from the Bristol station.");
        expect(app.stations.Bristol).not.toContain(scooter);
    });
});