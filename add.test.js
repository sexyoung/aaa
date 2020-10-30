// const { it } = require("@jest/globals")
const { expect } = require('@jest/globals');
var add = require('./add');

describe('add', () => {
  test('should add 1+2 = 4', () => {
    expect(add(1,2)).toBe(4);
  })
})
