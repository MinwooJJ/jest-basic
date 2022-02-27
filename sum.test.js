const { sum, sumOf } = require('./sum');

// test('1 + 2 = 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// when you want to add a description for tes
// it('add one and two', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// when you want to do multiple tests
// when you do refactoring, you can check the function by doing test, it will be simple to check if it still works fine
describe('sum', () => {
  it('calculates 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('calculates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
