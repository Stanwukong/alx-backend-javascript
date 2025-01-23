const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe('type == "SUM"', () => {
    it("returns the sum of two positive whole numbers", () => {
      expect(calculateNumber("SUM", 2.0, 2.0)).to.equal(4);
    });

    it("rounds numbers before summing them (e.g., 2.3 + 1.8)", () => {
      expect(calculateNumber("SUM", 2.3, 1.8)).to.equal(4);
    });

    it("returns the sum of two negative whole numbers", () => {
      expect(calculateNumber("SUM", -2.0, -2.0)).to.equal(-4);
    });

    it("rounds negative numbers before summing them (e.g., -2.3 + -1.8)", () => {
      expect(calculateNumber("SUM", -2.3, -1.8)).to.equal(-4);
    });

    it("returns 0 when summing a negative number and its positive counterpart", () => {
      expect(calculateNumber("SUM", -2.0, 2.0)).to.equal(0);
    });

    it("returns 0 when summing a positive number and its negative counterpart", () => {
      expect(calculateNumber("SUM", 2.0, -2.0)).to.equal(0);
    });

    it("returns 0 when summing two zero values", () => {
      expect(calculateNumber("SUM", 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it("returns the difference of two positive whole numbers", () => {
      expect(calculateNumber("SUBTRACT", 2.0, 2.0)).to.equal(0);
    });

    it("rounds numbers before subtracting (e.g., 2.3 - 1.8)", () => {
      expect(calculateNumber("SUBTRACT", 2.3, 1.8)).to.equal(0);
    });

    it("returns the difference of two negative whole numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.0, -2.0)).to.equal(0);
    });

    it("rounds negative numbers before subtracting (e.g., -2.3 - -1.8)", () => {
      expect(calculateNumber("SUBTRACT", -2.3, -1.8)).to.equal(0);
    });

    it("returns the correct result when subtracting a positive number from a negative number", () => {
      expect(calculateNumber("SUBTRACT", -2.0, 2.0)).to.equal(-4.0);
    });

    it("returns the correct result when subtracting a negative number from a positive number", () => {
      expect(calculateNumber("SUBTRACT", 2.0, -2.0)).to.equal(4.0);
    });

    it("returns 0 when subtracting two zero values", () => {
      expect(calculateNumber("SUBTRACT", 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it("returns the quotient of two positive whole numbers", () => {
      expect(calculateNumber("DIVIDE", 8.0, 2.0)).to.equal(4.0);
    });

    it("returns the correct quotient when dividing a negative number by a positive number", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });

    it("returns the correct quotient when dividing a positive number by a negative number", () => {
      expect(calculateNumber("DIVIDE", 7.0, -2.0)).to.equal(-3.5);
    });

    it("returns the correct quotient when dividing two negative numbers", () => {
      expect(calculateNumber("DIVIDE", -7.0, -2.0)).to.equal(3.5);
    });

    it("returns 1 when dividing two equal positive numbers", () => {
      expect(calculateNumber("DIVIDE", 2.0, 2.0)).to.equal(1);
    });

    it("returns 1 when dividing two equal negative numbers", () => {
      expect(calculateNumber("DIVIDE", -2.0, -2.0)).to.equal(1);
    });

    it("rounds numbers before dividing (e.g., 2.6 / 3.0 rounds to 3 / 3)", () => {
      expect(calculateNumber("DIVIDE", 2.6, 3.0)).to.equal(1);
    });

    it("rounds numbers before dividing (e.g., 2.4 / 2.0 rounds to 2 / 2)", () => {
      expect(calculateNumber("DIVIDE", 2.4, 2.0)).to.equal(1);
    });

    it("returns 0 when dividing 0 by a positive number", () => {
      expect(calculateNumber("DIVIDE", 0.0, 5.0)).to.equal(0);
    });

    it("returns 0 when dividing 0 by a negative number", () => {
      expect(calculateNumber("DIVIDE", 0.0, -5.0)).to.equal(-0);
    });

    it('returns "Error" when dividing a positive number by 0', () => {
      expect(calculateNumber("DIVIDE", 5.0, 0)).to.equal("Error");
    });

    it('returns "Error" when dividing a positive number by a number rounded to 0', () => {
      expect(calculateNumber("DIVIDE", 5.0, 0.2)).to.equal("Error");
    });

    it('returns "Error" when dividing a positive number by a negative number rounded to 0', () => {
      expect(calculateNumber("DIVIDE", 5.0, -0.2)).to.equal("Error");
    });

    it('returns "Error" when dividing a negative number by 0', () => {
      expect(calculateNumber("DIVIDE", -5.0, 0)).to.equal("Error");
    });

    it('returns "Error" when dividing a negative number by a number rounded to 0', () => {
      expect(calculateNumber("DIVIDE", -5.0, 0.2)).to.equal("Error");
    });

    it('returns "Error" when dividing a negative number by a negative number rounded to 0', () => {
      expect(calculateNumber("DIVIDE", -5.0, -0.2)).to.equal("Error");
    });

    it('returns "Error" when dividing 0 by 0', () => {
      expect(calculateNumber("DIVIDE", 0.0, 0.0)).to.equal("Error");
    });
  });
});
