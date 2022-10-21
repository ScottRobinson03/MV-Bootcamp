const Scooter = require('../src/Scooter');

describe('Testing Scooter constructor', () => {
    const firstScooter = new Scooter('Edinburgh', '');
    const secondScooter = new Scooter('London', 'bob');

    test('station property is correctly set', () => {
        expect(firstScooter).toHaveProperty('station', 'Edinburgh');
        expect(secondScooter).toHaveProperty('station', 'London');
    });

    test('user property is correctly set', () => {
        expect(firstScooter).toHaveProperty('user', '');
        expect(secondScooter).toHaveProperty('user', 'bob');
    });

    test('serial property is set & auto-increments', () => {
        expect(firstScooter).toHaveProperty('serial', 1);
        expect(secondScooter).toHaveProperty('serial', 2);
    });

    test('charge property is set', () => {
        expect(firstScooter).toHaveProperty('charge');
        expect(secondScooter).toHaveProperty('charge');
    });

    test('charge property is between 1 and 100', () => {
        expect(firstScooter.charge).toBeGreaterThanOrEqual(1);
        expect(firstScooter.charge).toBeLessThanOrEqual(100);

        expect(secondScooter.charge).toBeGreaterThanOrEqual(1);
        expect(secondScooter.charge).toBeLessThanOrEqual(100);
    });

    test('isBroken property is set to false', () => {
        expect(firstScooter).toHaveProperty('isBroken', false);
        expect(secondScooter).toHaveProperty('isBroken', false);
    });

    test('docked property is set to true', () => {
        expect(firstScooter).toHaveProperty('docked', true);
        expect(secondScooter).toHaveProperty('docked', true);
    });
});

describe('Testing Scooter.dock() method', () => {
    const scooter = new Scooter('London', 'bob');

    function dockWithNoStation() {
        scooter.dock();
    }

    test('Not passing a station throws an error message', () => {
        expect(dockWithNoStation).toThrow("Docking station required!");
    });

    test('Passing a station leads to the appropriate properties being updated', () => {
        scooter.dock("Nottingham");

        expect(scooter.docked).toBe(true);
        expect(scooter.station).toBe("Nottingham");
        expect(scooter.user).toBe('');
    });
});

describe('Testing Scooter.recharge() method', () => {
    const scooter = new Scooter('Plymouth', 'bob');
    scooter.charge = 1;

    test("charge property is set to 100", async () => {
        await scooter.recharge();
        expect(scooter.charge).toBe(100);
    });
});

describe('Testing Scooter.rent() method', () => {
    function rentBrokenScooter() {
        const brokenScooter = new Scooter('London', '');
        brokenScooter.isBroken = true;
    
        brokenScooter.rent();
    }
    
    function rentLowChargeScooter() {
        const lowChargeScooter = new Scooter('Glasgow', '');
        lowChargeScooter.charge = 20;
    
        lowChargeScooter.rent();
    }

    const rentableScooter = new Scooter('Liverpool', '');
    rentableScooter.charge = 21;

    test('Scooters that are broken throw an error message', () => {
        expect(rentBrokenScooter).toThrow("Scooter is broken, please send a repair request.");
    });

    test('Scooters on low charge throw an error message', () => {
        expect(rentLowChargeScooter).toThrow("Scooter low on battery, please charge.")
    });

    test('Scooters that are not broken & have enough charge log rent message + update `scooter.docked`', () => {
        const spy = jest.spyOn(console, 'log');

        rentableScooter.rent();
        expect(spy).toHaveBeenCalledWith("Enjoy the ride!");
        expect(rentableScooter.docked).toBe(false);
    });
});

describe('Testing Scooter.requestRepair() method', () => {
    jest.setTimeout(7500);

    test("isBroken property is set to false", async () => {
        const scooter = new Scooter('Manchester', 'alex');
        scooter.isBroken = true;

        await scooter.requestRepair();
        expect(scooter.isBroken).toBe(false);

    });
});