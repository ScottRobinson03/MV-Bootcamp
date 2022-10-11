const { mercury, venus, earth, mars } = require('../../../d2-objects/1-easy/planets-1');

describe('Mercury object', () => {
  it('radius property is equal to 2440', () => {
    expect(mercury.radius).toBe(2440);
  });
  it('yearLength property is equal to 88', () => {
    expect(mercury.yearLength).toBe(88);
  });
  it('surfaceGravity property is equal to 0.38', () => {
    expect(mercury.surfaceGravity).toBe(0.38);
  });
  it('moons property is equal to 0', () => {
    expect(mercury.moons).toBe(0);
  });
});
describe('Venus object', () => {
  it('radius property is equal to 6052', () => {
    expect(venus.radius).toBe(6052);
  });
  it('yearLength property is equal to 225', () => {
    expect(venus.yearLength).toBe(225);
  });
  it('surfaceGravity property is equal to 0.91', () => {
    expect(venus.surfaceGravity).toBe(0.91);
  });
  it('moons property is equal to 0', () => {
    expect(venus.moons).toBe(0);
  });
});
describe('Earth object', () => {
  it('radius property is equal to 6378', () => {
    expect(earth.radius).toBe(6378);
  });
  it('yearLength property is equal to 365.25', () => {
    expect(earth.yearLength).toBe(365.25);
  });
  it('surfaceGravity property is equal to 1', () => {
    expect(earth.surfaceGravity).toBe(1);
  });
  it('moons property is equal to 1', () => {
    expect(earth.moons).toBe(1);
  });
});
describe('Mars object', () => {
  it('radius property is equal to 3397', () => {
    expect(mars.radius).toBe(3397);
  });
  it('yearLength property is equal to 687', () => {
    expect(mars.yearLength).toBe(687);
  });
  it('surfaceGravity property is equal to 0.38', () => {
    expect(mars.surfaceGravity).toBe(0.38);
  });
  it('moons property is equal to 2', () => {
    expect(mars.moons).toBe(2);
  });
});
