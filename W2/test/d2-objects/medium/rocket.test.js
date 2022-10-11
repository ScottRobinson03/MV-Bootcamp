const { rocket } = require('../../../d2-objects/2-medium/rocket');

describe('Rocket', () => {
  it('initially has a full tank of 200 units and correctly calibrated navigation guide (distances)', () => {
    expect(rocket.fuel).toBe(200);
    expect(rocket.fuelCostToA).toBe(20);
    expect(rocket.fuelCostToB).toBe(30);
    expect(rocket.fuelCostToC).toBe(35);
  });
  it('successfully completes a single flight to Planet A.', () => {
    expect(rocket.flyToA()).toBe(true);
    expect(rocket.fuel).toBe(160);
  });
  it('successfully completes a single flight to Planet B.', () => {
    rocket.fuel = 200;
    expect(rocket.flyToB()).toBe(true);
    expect(rocket.fuel).toBe(140);
  });
  it('successfully completes a single flight to Planet C.', () => {
    rocket.fuel = 200;
    expect(rocket.flyToC()).toBe(true);
    expect(rocket.fuel).toBe(130);
  });
  it('correctly returns false if there is not enough fuel for the trip.', () => {
    rocket.fuel = 10;
    expect(rocket.flyToA()).toBe(false);
    expect(rocket.flyToB()).toBe(false);
    expect(rocket.flyToC()).toBe(false);
  });
  it('can make three return trips, one to each destination, on a single tank.', () => {
    rocket.fuel = 200;
    expect(rocket.flyToA()).toBe(true);
    expect(rocket.flyToB()).toBe(true);
    expect(rocket.flyToC()).toBe(true);
  });
});
