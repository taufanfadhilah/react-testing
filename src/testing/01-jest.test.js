import { addition, multiply } from "./number";
import { greeting, tax } from "./test";

describe("basic testing", () => {
  test("testing basic", () => {
    expect(true).toBe(true);
  });

  test("add value", () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });
});

describe("Group Testing Aritmatic", () => {
  test("addition function", () => {
    expect(addition(3, 2)).toBe(5);
  });

  test("multiply function", () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe("Group Testing Text/String", () => {
  test("testing tax function", () => {
    expect(tax(10000000)).toBe(`Gross salary is Rp.9000000`);
  });

  test("testing greeting", () => {
    expect(greeting("John")).toBe("Hi John");
  });
});
