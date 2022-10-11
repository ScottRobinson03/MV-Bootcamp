const { checkout, itemsList } = require('../../../d3-arrays-and-loops/3-hard/checkout');

describe('checkout object', () => {
  it('is initially empty.', () => {
    expect(checkout.items.length).toBe(0);
    expect(checkout.weight).toBe(0);
    expect(checkout.cost).toBe(0);
  });
  it('scanItem method correctly "scans" an item by updating items, weight and cost.', () => {
    checkout.scanItems([itemsList.bread]);
    expect(checkout.items.length).toBe(1);
    expect(checkout.weight).toBe(200);
    expect(checkout.cost).toBe(1.4);
  });
  it('reset method correctly resets items, weight and cost back to initial state.', () => {
    checkout.reset();
    expect(checkout.items.length).toBe(0);
    expect(checkout.weight).toBe(0);
    expect(checkout.cost).toBe(0);
  });
  it('scanItem method correctly "scans" multiple items by updating items, weight and cost.', () => {
    checkout.scanItems([itemsList.bread, itemsList.cheese]);
    expect(checkout.items.length).toBe(2);
    expect(checkout.weight).toBe(700);
    expect(checkout.cost).toBe(4.4);
  });
  it('finalise method correctly returns total cost of 1 milk, 1 bread, 1 cheese.', () => {
    checkout.scanItems([itemsList.milk]);
    expect(checkout.finalise()).toBe(5.9);
  });
});
