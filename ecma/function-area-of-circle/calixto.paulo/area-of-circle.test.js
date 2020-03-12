import { aoc } from './function-area-of-circle.js';

describe('Circle Tools', () => {
  test('Area of the circle of radius 10 is of 31.41592653589793', () => {
    expect(aoc(10)).toBe(314.1592653589793);
  });

  test('Area of the circle of radius 1 is of 3.141592653589793', () => {
    expect(aoc(1)).toBe(3.141592653589793);
  });
});
