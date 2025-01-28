const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

///////Suite
describe("Lab-TDD tests", () => {
  describe("Add function tests", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding -5 and 5", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });

  describe("Subtract function tests", () => {
    test("Subtract function should return 2 when subtracting 5 and 3", () => {
      assert.strictEqual(subtract(5, 3), 2);
    });
    test("Subtract function should return -8 when subtracting -5 and 3", () => {
      assert.strictEqual(subtract(-5, 3), -8);
    });
  });

  describe("Multiply function tests", () => {
    test("Multiply function should return 15 when multiplying 5 and 3", () => {
      assert.strictEqual(multiply(5, 3), 15);
    });
    test("Multiply function should return 0 when multiplying 0 and 3", () => {
      assert.strictEqual(multiply(0, 3), 0);
    });
  });

  describe("Divide function tests", () => {
    test("Divide function should return 4 when dividing 32 over 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });

  describe("Modulus function tests", () => {
    test("Modulus function should return 1 when taking 10 % 3", () => {
      assert.strictEqual(modulas(10, 3), 1);
    });
    test("Modulus function should return 0 when taking 6 % 3", () => {
      assert.strictEqual(modulas(6, 3), 0);
    });
  });

  describe("Power function tests", () => {
    test("Power function should return 8 when raising 2 to the power of 3", () => {
      assert.strictEqual(power(2, 3), 8);
    });
    test("Power function should return 1 when raising any number to the power of 0", () => {
      assert.strictEqual(power(5, 0), 1);
    });
  });

  describe("SquareRoot function tests", () => {
    test("SquareRoot function should return 3 when calculating the square root of 9", () => {
      assert.strictEqual(squareRoot(9), 3);
    });
    test("SquareRoot of negative number should throw an error", () => {
      assert.throws(() => squareRoot(-1), Error);
    });
  });

  describe("Floor function tests", () => {
    test("Floor function should return 3 when taking floor of 3.9", () => {
      assert.strictEqual(floor(3.9), 3);
    });
    test("Floor function should return -4 when taking floor of -3.1", () => {
      assert.strictEqual(floor(-3.1), -4);
    });
  });

  describe("Ceiling function tests", () => {
    test("Ceiling function should return 4 when taking ceiling of 3.1", () => {
      assert.strictEqual(ceiling(3.1), 4);
    });
    test("Ceiling function should return -3 when taking ceiling of -3.9", () => {
      assert.strictEqual(ceiling(-3.9), -3);
    });
  });
});
