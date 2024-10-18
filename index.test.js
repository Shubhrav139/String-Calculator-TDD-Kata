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

describe("negative number will throw an exception", () => {
  test("should throw an error when input contains negative numbers", () => {
    expect(() => {
      add("-1,-2");
    }).toThrow("Negatives not allowed: -1, -2");
  });

  test("should return the sum when delimiter is '-'", () => {
    expect(add("//-\n1-2")).toBe(3);
  });
});

describe("Numbers bigger than '1000' should be ignored", () => {
  test("should ignore a number if it is bigger than '1000'", () => {
    expect(add("1001")).toBe(0);
  });

  test("should ignore a number if it is bigger than '1000'", () => {
    expect(add("1001,4")).toBe(4);
  });
});

describe("Delimiters can be of any length", () => {
  test("should return the sum of all numbers when input contains custom delimiter of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
});

describe("Allow multiple delimiters", () => {
  test("should return the sum of all numbers when input contains multiple custom delimiter", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should return the sum of all numbers when input contains multiple custom delimiter of any length", () => {
    expect(add("//[*#][%%%]\n1*#2%%%3")).toBe(6);
  });
});
