/*
Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
MAX_NUM = 100;
var sumOfSquares = 0;
var squareOfSums = 0;

for (var i = 1; i <= MAX_NUM; i++) {
  sumOfSquares += Math.pow(i, 2);
  squareOfSums += i;
}

console.log(Math.pow(squareOfSums, 2) - sumOfSquares);

