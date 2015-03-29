/*
Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/
var BELOW_NUMBER = 1e4;

var primeFactors = function(number) {
  var primeFactorsArray = [];
  var num = number;
  for (var i = 2; num / i >= i; i++) {
    while (num % i === 0) {
      primeFactorsArray.push(i);
      num /= i;
    }
  }
  if (num > 0) primeFactorsArray.push(num);
  return primeFactorsArray;
};

var properDivisors = function(number, pfArray) {
  var propDivisorsArray = [1];
  var divisor, kay;

  for (var i = 0; i < pfArray.length; i++) {
     if (pfArray[i] !== number && propDivisorsArray.indexOf(pfArray[i]) < 0)
       propDivisorsArray.push(pfArray[i]);

    for (var j = i+1; j < pfArray.length+i-1; j++) {

      divisor = 1;
      for (var k = i; k <= j; k++) {
        if (k >= pfArray.length) {
          kay = k % pfArray.length;
        } else {
          kay = k;
        }
        divisor *= pfArray[kay];
      }

      if (divisor !== number && propDivisorsArray.indexOf(divisor) < 0)
        propDivisorsArray.push(divisor);
    }
  }
  return propDivisorsArray;
  //return propDivisorsArray.sort(function(a, b) { return a-b; });
};

var sumOfArray = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

var sumOfDivisors = function(number) {
  var pFactors = primeFactors(number);
  var propDivisors = properDivisors(number, pFactors);

  return sumOfArray(propDivisors);
};

var possAmicNumber;
var amicNumArray = [];

for (var i = 4; i < BELOW_NUMBER; i++) {
  if (amicNumArray.indexOf(i) >= 0) continue;

  possAmicNumber = sumOfDivisors(i);

  if (possAmicNumber >= BELOW_NUMBER) continue;

  if (i === sumOfDivisors(possAmicNumber)) {
    if (i === possAmicNumber) continue;

    amicNumArray.push(i);
    amicNumArray.push(possAmicNumber);
  }
}

console.log(sumOfArray(amicNumArray));

