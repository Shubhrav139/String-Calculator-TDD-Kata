const add = require("./index");

describe("basic test case", () => {
  test("should return 0 when input is an empty string", () => {
    expect(add("")).toBe(0);
  });
});
