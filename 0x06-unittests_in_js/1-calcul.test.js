const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe('type == "SUM"', () => {
    it("should add two positive whole numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2.0, 2.0), 4);
    });

    it("should round and add two positive numbers with decimals", () => {
      assert.strictEqual(calculateNumber("SUM", 2.3, 1.8), 4);
    });

    it("should add two negative whole numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -2.0, -2.0), -4);
    });

    it("should round and add two negative numbers with decimals", () => {
      assert.strictEqual(calculateNumber("SUM", -2.3, -1.8), -4);
    });

    it("should add a negative number and a positive number resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUM", -2.0, 2.0), 0);
    });

    it("should add a positive number and a negative number resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUM", 2.0, -2.0), 0);
    });

    it("should add two zeros resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUM", 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it("should subtract two equal positive whole numbers resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 2.0), 0);
    });

    it("should round and subtract two positive numbers with decimals", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.3, 1.8), 0);
    });

    it("should subtract two equal negative whole numbers resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.0, -2.0), 0);
    });

    it("should round and subtract two negative numbers with decimals", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.3, -1.8), 0);
    });

    it("should subtract a positive number from a negative number", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.0, 2.0), -4.0);
    });

    it("should subtract a negative number from a positive number", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.0, -2.0), 4.0);
    });

    it("should subtract two zeros resulting in zero", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it("should divide two positive whole numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 8.0, 2.0), 4.0);
    });

    it("should divide a negative number by a positive number", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -7.0, 2.0), -3.5);
    });

    it("should divide a positive number by a negative number", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 7.0, -2.0), -3.5);
    });

    it("should divide two negative numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -7.0, -2.0), 3.5);
    });

    it("should divide two equal positive whole numbers resulting in 1", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.0, 2.0), 1);
    });

    it("should divide two equal negative whole numbers resulting in 1", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -2.0, -2.0), 1);
    });

    it("should divide two rounded numbers with a quotient of 1", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.6, 3.0), 1);
    });

    it("should divide two rounded numbers where a > b", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.4, 2.0), 1);
    });

    it("should divide zero by a positive number resulting in zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0.0, 5.0), 0);
    });

    it("should divide zero by a negative number resulting in zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0.0, -5.0), -0);
    });

    it('should return "Error" when dividing a positive number by zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, 0), "Error");
    });

    it('should return "Error" when dividing a positive number by a number rounded down to zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, 0.2), "Error");
    });

    it('should return "Error" when dividing a positive number by a number rounded up to zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, -0.2), "Error");
    });

    it('should return "Error" when dividing a negative number by zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", -5.0, 0), "Error");
    });

    it('should return "Error" when dividing a negative number by a number rounded down to zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", -5.0, 0.2), "Error");
    });

    it('should return "Error" when dividing a negative number by a number rounded up to zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", -5.0, -0.2), "Error");
    });

    it('should return "Error" when dividing zero by zero', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 0.0, 0.0), "Error");
    });
  });
});
