// https://jestjs.io/ru/

/* eslint-disable no-undef */
import findAverage from './task';

test('task', () => {
  expect(findAverage([1, 1, 1])).toBe(1);
});
