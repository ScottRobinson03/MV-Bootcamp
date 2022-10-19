const { Lorry } = require("./lorry");
const { MediumTukTuk } = require("./mediumTukTuk");

describe('Testing the Lorry class', () => {
    let myLorry;
    beforeEach(() => myLorry = new Lorry());

    test('Lorry constructor correctly sets `cargo` property', () => {
        expect(myLorry).toHaveProperty('cargo', []);
    });

    test('Lorry.addCargo() correctly adds to the `cargo` property', () => {
        const tuktuk = new MediumTukTuk("Medium Bullet");
        myLorry.addCargo(tuktuk);
        expect(myLorry.cargo).toEqual([tuktuk]);
    });
});