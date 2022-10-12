const { spaceStats } = require('../../../d2-objects/3-hard/space-stats');

let today = new Date();
let testDate = new Date('01/01/2000');
let testDays = Math.round((today - testDate) / (1000 * 3600 * 24));

describe('spaceStats', () => {
  spaceStats.setWeightInKG(80);
  it('setAgeInEarthDays correctly updates ageInEarthDays value', () => {
    spaceStats.setAgeInEarthDays('01/01/2000');
    expect(Math.round(spaceStats.ageInEarthDays)).toBeCloseTo(testDays);
  });
  it('setWeightInKG correctly updates weightInKG value', () => {
    spaceStats.setWeightInKG(80);
    expect(Math.round(spaceStats.weightInKG)).toBeCloseTo(80);
  });
  it('ageOnMercury method converts Earth age to Mercury age', () => {
    expect(Math.round(spaceStats.ageOnMercury())).toBeCloseTo(95);
  });
  it('weightOnMercury method converts Earth weight correctly', () => {
    expect(Math.round(spaceStats.weightOnMercury())).toBeCloseTo(30);
  });
  it('ageOnVenus method converts Earth age to Venus age', () => {
    expect(Math.round(spaceStats.ageOnVenus())).toBeCloseTo(37);
  });
  it('weightOnVenus method converts Earth weight correctly', () => {
    expect(Math.round(spaceStats.weightOnVenus())).toBeCloseTo(73);
  });
  it('ageOnMars method converts Earth age to Mars age', () => {
    expect(Math.round(spaceStats.ageOnMars())).toBeCloseTo(12);
  });
  it('weightOnMars method converts Earth weight correctly', () => {
    expect(Math.round(spaceStats.weightOnMars())).toBeCloseTo(30);
  });
});
