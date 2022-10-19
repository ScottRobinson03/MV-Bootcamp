const { MediumTukTuk } = require("./mediumTukTuk");

describe('Testing the MediumTukTuk class', () => {
    const mediumBullet = new MediumTukTuk("Medium Bullet");

    test('MediumTukTuk extends the TukTuk class', () => {
        expect(Object.getPrototypeOf(mediumBullet.constructor).name).toBe('TukTuk');
    });

    test('Creating a new MediumTukTuk instance sets attributes correctly', () => {
        expect(mediumBullet).toHaveProperty('name', 'Medium Bullet');
        expect(mediumBullet).toHaveProperty('maxSpeed', 30);
        expect(mediumBullet).toHaveProperty('maxCapacity', 4);
        expect(mediumBullet).not.toHaveProperty('specialMotto'); // specialMotto is only for smallTukTuk
    });
})