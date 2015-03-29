/*
Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
var N = 100;

var factorial = function(num) {
  var productString = "1";
  var carryOver, result;
  var currProductString = "";
  for (var factor = num; factor > 1; factor--) {
    carryOver = 0;
    currProductString = "";

    for (var index = productString.length-1; index >= 0; index--) {
      result = factor * parseInt(productString[index]);
      result += carryOver;
      currProductString = (result % 10).toString() + currProductString;
      carryOver = Math.floor(result / 10);
    }
    if (carryOver > 0) {
      productString = carryOver.toString() + currProductString;
    } else {
      productString = currProductString;
    }
  }

  return productString;
}

var resultString = factorial(N);
console.log(resultString);
var sum = 0;

for (var i = 0; i < resultString.length; i++) {
  sum += parseInt(resultString[i]);
}

console.log(sum);

