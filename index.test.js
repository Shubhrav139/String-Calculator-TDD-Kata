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
