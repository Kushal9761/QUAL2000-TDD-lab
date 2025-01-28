/*
Lab Unit testing simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Create a folder named tests on the root folder 
then create a file named lab-TDD-starter.test.js
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
// add function
const add = (a, b) => {
  return a + b; // Return sum
};

// subtract function
const subtract = (a, b) => {
  return a - b; // Return difference
};

// multiply function
const multiply = (a, b) => {
  return a * b; // Return product
};

// divide function
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed"); // Handle division by zero
  }
  return a / b; // Return quotient
};

// modulus function
const modulas = (a, b) => {
  return a % b; // Return remainder
};

// power function
const power = (a, b) => {
  return Math.pow(a, b); // Return a raised to the power of b
};

// squareRoot function
const squareRoot = (a) => {
  if (a < 0) {
    throw new Error("Cannot calculate square root of a negative number"); // Handle negative numbers
  }
  return Math.sqrt(a); // Return square root
};

// floor function
const floor = (a) => {
  return Math.floor(a); // Return largest integer <= a
};

// ceiling function
const ceiling = (a) => {
  return Math.ceil(a); // Return smallest integer >= a
};

////////////////////////////////////////

//export functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
};
