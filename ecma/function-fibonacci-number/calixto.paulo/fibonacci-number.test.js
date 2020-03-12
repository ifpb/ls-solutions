import { fibonum } from './function-fibonacci-number.js';

describe('Fibonacci series', () => {
  test('making the 0th number', () => {
    expect(fibonum(0)).toBe(0);
  });

  test('making the 1st numbers', () => {
    expect(fibonum(1)).toBe(0);
  });

  test('making the 2nd numbers', () => {
    expect(fibonum(2)).toBe(1);
  });

  test('making the 4th numbers', () => {
    expect(fibonum(4)).toBe(2);
  });

  test('making the 6th numbers', () => {
    expect(fibonum(6)).toBe(5);
  });
});
