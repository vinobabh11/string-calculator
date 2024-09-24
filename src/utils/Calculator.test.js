import { add } from "./stringCalculator";

test('empty string returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('single number returns itself', () => {
    expect(add("1")).toBe(1);
  });
  
  test('two numbers, comma separated', () => {
    expect(add("1,5")).toBe(6);
  });