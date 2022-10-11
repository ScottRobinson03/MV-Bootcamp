const { d1EasyConditionals } = require('../../../d1-js-basics/1-easy/conditionals');

describe('Conditionals', () => {
  const spy = jest.spyOn(console, 'log');
  it('2 logs "No shape', () => {
    d1EasyConditionals(2);
    expect(spy).toBeCalledWith('No shape');
  });
  it('3 logs "Triangle', () => {
    d1EasyConditionals(3);
    expect(spy).toBeCalledWith('Triangle');
  });
  it('4 logs "Rectangle', () => {
    d1EasyConditionals(4);
    expect(spy).toBeCalledWith('Rectangle');
  });
  it('5 logs "Pentagon', () => {
    d1EasyConditionals(5);
    expect(spy).toBeCalledWith('Pentagon');
  });
  it('6 logs "Slow down, Einstein', () => {
    d1EasyConditionals(6);
    expect(spy).toBeCalledWith('Slow down, Einstein!');
  });
});
