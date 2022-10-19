const { SmallTukTuk } = require('./smallTukTuk');

describe('Testing the SmallTukTuk class', () => {
    const smallBullet = new SmallTukTuk("Small Bullet", "Bullet Power");

    test('SmallTukTuk extends the TukTuk class', () => {
        expect(Object.getPrototypeOf(smallBullet.constructor).name).toBe('TukTuk');
    });

    test('Creating a new SmallTukTuk instance sets attributes correctly', () => {
        expect(smallBullet).toHaveProperty('name', 'Small Bullet');
        expect(smallBullet).toHaveProperty('maxSpeed', 25);
        expect(smallBullet).toHaveProperty('maxCapacity', 2);
        expect(smallBullet).toHaveProperty('specialMotto', 'Bullet Power');
    });

    test('SmallTukTuk correctly overwrites the TukTuk quickFacts() method', () => {
        expect(smallBullet.quickFacts()).toBe("Small Bullet is a tuk tuk with a motto of Bullet Power and a max speed of 25mph that can carry up to 2 passengers.");
    });
});