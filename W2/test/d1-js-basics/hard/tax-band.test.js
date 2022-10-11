const { taxBand } = require('../../../d1-js-basics/3-hard/tax-band');

describe('Tax Band Calculator', () => {
  it('passes several test cases', () => {
    expect(taxBand(12570)).toBe(12570.0);
    expect(taxBand(12571)).toBe(12570.8);
    expect(taxBand(50270)).toBe(42730.0);
    expect(taxBand(50271)).toBe(42730.6);
    expect(taxBand(150000)).toBe(102568.0);
    expect(taxBand(150001)).toBe(102568.55);
    expect(taxBand(49999.99)).toBe(42513.99);
    expect(taxBand(50000.01)).toBe(42514.01);
  });
  it('correctly returns 0 for negative numbers', () => {
    expect(taxBand(-10)).toBe(Number('0.00'));
  });
});
