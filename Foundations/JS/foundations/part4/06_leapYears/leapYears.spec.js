const isLeapYear = require('./leapYears')

describe('isLeapYear', () => {
  test('works with non century years', () => {
    expect(isLeapYear(1996)).toBe(true);
  });
  test('works with non century years', () => {
    expect(isLeapYear(1997)).toBe(false);
  });
  test('works with ridiculously futuristic non century years', () => {
    expect(isLeapYear(34992)).toBe(true);
  });
  test('works with century years', () => {
    expect(isLeapYear(1900)).toBe(false);
  });
  test('works with century years', () => {
    expect(isLeapYear(1600)).toBe(true);
  });
  test('works with century years', () => {
    expect(isLeapYear(700)).toBe(false);
  });
});
