/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
var TARGET_COUNT = 10001;
var primeCount = 0;
var isPrime;

for (var possiblePrime = 2; primeCount < TARGET_COUNT; possiblePrime++) {
  isPrime = true;
  for (var i = 2; (possiblePrime / i) >= i; i++) {
    if (possiblePrime % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primeCount++;
  if (primeCount === TARGET_COUNT) console.log(possiblePrime);
}

