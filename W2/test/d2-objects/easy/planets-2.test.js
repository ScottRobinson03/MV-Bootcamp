const { mercury, venus, earth, mars } = require('../../../d2-objects/1-easy/planets-2');

describe('Mercury object', () => {
  it('yearLength property is equal to 88', () => {
    expect(mercury.yearLength).toBe(88);
  });
  it('getYearLength method returns "88 (Earth Days)"', () => {
    expect(mercury.getYearLength()).toBe('88 (Earth Days)');
  });
});
describe('Venus object', () => {
  it('yearLength property is equal to 225', () => {
    expect(venus.yearLength).toBe(225);
  });
  it('getYearLength method returns "225 (Earth Days)"', () => {
    expect(venus.getYearLength()).toBe('225 (Earth Days)');
  });
});
describe('Earth object', () => {
  it('yearLength property is equal to 365.25', () => {
    expect(earth.yearLength).toBe(365.25);
  });
  it('getYearLength method returns "365.25 (Earth Days)"', () => {
    expect(earth.getYearLength()).toBe('365.25 (Earth Days)');
  });
});
describe('Mars object', () => {
  it('yearLength property is equal to 687', () => {
    expect(mars.yearLength).toBe(687);
  });
  it('getYearLength method returns "687 (mars Days)"', () => {
    expect(mars.getYearLength()).toBe('687 (Earth Days)');
  });
});
