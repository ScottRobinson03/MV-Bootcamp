const { Tuktuk } = require('./tuktuk');

describe('Testing Tuktuk class', () => {
    let tuktuk;
    beforeEach(() => {
        tuktuk = new Tuktuk('The Bullet', 10, 40);
    });

    test('Class constructor correctly sets attribute.', () => {
        expect(tuktuk).toHaveProperty('name', 'The Bullet');
        expect(tuktuk).toHaveProperty('maxCapacity', 10);
        expect(tuktuk).toHaveProperty('maxSpeed', 40);
        expect(tuktuk).toHaveProperty('currentCapacity', 0);
    });

    test('Instanciated instance has a dynamic `remainingCapactiy` property.', () => {
        expect(tuktuk.remainingCapacity).toBe(10);
        tuktuk.currentCapacity = 2;
        expect(tuktuk.remainingCapacity).toBe(8); // 10 - 2 = 8
    });

    test('getRemainingCapacityMessage() returns correct message', () => {
        expect(tuktuk.getRemainingCapacityMessage()).toBe('The Bullet has 10 spaces left.');
        tuktuk.currentCapacity = 2;
        expect(tuktuk.getRemainingCapacityMessage()).toBe('The Bullet has 8 spaces left.'); // 10 - 2 = 8
    });

    test('You cannot board more passengers than there is space for', () => {
        let leftOut = tuktuk.boardPassengers(11);
        expect(tuktuk.currentCapacity).toBe(10); // only 10 should be boarded
        expect(leftOut).toBe(1); // there should be 1 person who wasn't boarded
    });

    test('You can board an amount of passengers <= to the amount there is space for', () => {
        let leftOut = tuktuk.boardPassengers(8);
        expect(tuktuk.currentCapacity).toBe(8);
        expect(leftOut).toBe(0); // there shouldn't be anyone who wasn't boarded
    });

    test('Attempting to unboard more passengers than are boarded fails', () => {
        expect(tuktuk.unboardPassengers(5)).toBe('You can only unboard passengers that are currently boarded.');
        expect(tuktuk.currentCapacity).toBe(0) // currentCapacity shouldn't update
    });

    test('You can unboard an amount of passengers <= to amount currently boarded', () => {
        tuktuk.boardPassengers(6); // you have to board passengers before we can unboard them
        tuktuk.unboardPassengers(4);
        expect(tuktuk.currentCapacity).toBe(2); // 6 - 4 = 2

        tuktuk.unboardPassengers(2);
        expect(tuktuk.currentCapacity).toBe(0); // 2 - 2 = 0
    });

    test('remainingCapacity correctly updates after boarding passengers', () => {
        tuktuk.boardPassengers(6);
        expect(tuktuk.remainingCapacity).toBe(4); // 10 - 6 = 4
    });

    test('remainingCapacity correctly updates after unboarding passengers', () => {
        tuktuk.boardPassengers(5); // we have to board passengers before we can unboard them
        tuktuk.unboardPassengers(3);
        expect(tuktuk.remainingCapacity).toBe(8) // (10 - 5) + 3 = 8
    });
});