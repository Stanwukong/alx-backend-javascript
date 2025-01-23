const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should add two floating point whole numbers correctly", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("should round down b's fractional value and add correctly", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("should round down both a and b's fractional values and add correctly", () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it("should round down a's fractional value and add correctly", () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it("should round up b's fractional value and add correctly", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("should round up both a and b's fractional values and add correctly", () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it("should round up a's fractional value and add correctly", () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it("should handle trailing 9's in a and b's fractional values by rounding down and adding correctly", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
