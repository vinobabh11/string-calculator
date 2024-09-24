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

  test('handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });