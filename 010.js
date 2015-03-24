/*
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/
var BELOW_NUM = 2e6;
var sum = 0;
var isPrime;

for (var possiblePrime = 2; possiblePrime < BELOW_NUM; possiblePrime++) {
  isPrime = true;
  for (var i = 2; isPrime && (possiblePrime / i) >= i; i++) {
    if (possiblePrime % i === 0) isPrime = false;
  }

  if (isPrime) sum += possiblePrime;
}

console.log(sum);

