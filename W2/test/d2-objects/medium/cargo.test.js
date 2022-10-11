const { cargo } = require('../../../d2-objects/2-medium/cargo');

describe('cargo', () => {
  it('has property of ship1 with value of 30', () => {
    expect(cargo.ship1).toBe(30);
  });
  it('has property of ship2 with value of 20', () => {
    expect(cargo.ship2).toBe(20);
  });
  it('has property of ship3 with value of 10', () => {
    expect(cargo.ship3).toBe(10);
  });
  it('shareTheLoad method returns an object with balance owed for each person.', () => {
    expect(cargo.shareTheLoad()).toEqual({ ship1: -10, ship2: 0, ship3: 10 });
    cargo.ship1 = 40;
    cargo.ship2 = 80;
    cargo.ship3 = 150;
    expect(cargo.shareTheLoad()).toEqual({ ship1: 50, ship2: 10, ship3: -60 });
  });
});
