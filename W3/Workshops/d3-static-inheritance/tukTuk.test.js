const {TukTuk} = require('./tukTuk');

describe('Testing TukTuk instance', () => {
    const tuktuk = new TukTuk('The Bullet', 35, 5);

    test('Creating a new TukTuk instance sets attributes correctly', () => {
        expect(tuktuk).toHaveProperty('name', 'The Bullet');
        expect(tuktuk).toHaveProperty('maxSpeed', 35);
        expect(tuktuk).toHaveProperty('maxCapacity', 5);
    });

    test('TukTuk.quickFacts() returns the correct string', () => {
        expect(tuktuk.quickFacts()).toBe('The Bullet is a tuk tuk with a max speed of 35mph that can carry up to 5 passengers.');
    });
});

describe('Testing TukTuk static properties and methods', () => {
    const tuktuk = new TukTuk('The Bullet', 35, 5);

    test('TukTuk class has a static `drivers` property', () => {
        expect(TukTuk).toHaveProperty('drivers');
    });

    test('TukTuk class has a static `findSubstituteDriver()` method', () => {
        expect(TukTuk).toHaveProperty('findSubstituteDriver');
    });

    test('TukTuk.findSubstituteDriver() correctly assigns a driver when there is a free driver', () => {
        TukTuk.drivers = ['Alex']; // ensure there is a free driver
        expect(TukTuk.findSubstituteDriver()).toBe('Alex');
    });

    test('TukTuk.findSubstituteDriver() correctly returns `null` when there is not a free driver', () => {
        TukTuk.drivers = []; // ensure there is not a free driver
        expect(TukTuk.findSubstituteDriver()).toBe(null);
    });
});