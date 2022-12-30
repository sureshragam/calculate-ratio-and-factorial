const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  return {
    ratio: ratio,
    factorial: factorial,
  };
}

module.exports = ratioAndFactorial;
