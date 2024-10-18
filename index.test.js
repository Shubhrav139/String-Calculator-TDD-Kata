const add = require("./index");

describe("basic test case", () => {
  test("should return 0 when input is an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself when input is single digit number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of numbers when input contains two digits comma separated", () => {
    expect(add("1,2")).toBe(3);
  });
});

describe("handle an unknown amount of numbers", () => {
  test("should return the sum of all numbers when input contains unknown amount of numbers comma separated", () => {
    expect(add("1,2,5,8,6,7,6,6")).toBe(41);
  });
});

describe("handle new lines between numbers", () => {
  test("should return the sum of all numbers when input contains unknown amount of numbers comma or new line separated", () => {
    expect(add("1\n2,3\n5")).toBe(11);
  });
});

describe("support different delimiters", () => {
  test("should return the sum of all numbers when input contains unknown amount of numbers custom delimiter separated", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
