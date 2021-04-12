const { it, test, describe, expect } = require('@jest/globals');
const { add } = require('./helpers.js');

describe('Add function', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('errors when given strings', () => {
    expect(() => add('hello', 2)).toThrow('add function does not expect string values');
  });
  it('errors when given no input', () => {
    expect(add).toThrow('add functions needs to be called with input');
  });
});
