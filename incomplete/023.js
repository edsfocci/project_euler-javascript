/*
Non-abundant sums

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/
var MAX_NUMBER = 28123;

var primeFactors = function(num) {
  var currNum = num;
  var pFactors = [];

  for (var i = 2; currNum / i >= i; i++) {
    while (currNum % i === 0) {
      pFactors.push(i);
      currNum /= i;
    }
  }

  if (currNum > 1) pFactors.push(currNum);
  return pFactors;
};

var properDivisors = function(array) {
  var propDivisors = [1];
  var kay, currProduct;

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length+i-1; j++) {
      currProduct = 1;
      for (var k = i; k <= j; k++) {
        kay = k % array.length;
        currProduct *= array[kay];
      }

      if (propDivisors.indexOf(currProduct) < 0) propDivisors.push(currProduct);
    }
  }

  return propDivisors;
};

var arraySum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) sum += array[i];
  return sum;
};

var abundantNums = [];
var currSum;

var index = 2;
while (true) {
  if (abundantNums.length > 0 && index > MAX_NUMBER - abundantNums[0]) break;
  currSum = arraySum(properDivisors(primeFactors(index)));
  if (index < currSum) abundantNums.push(index);
  index++;
}

var intExclude = {};
for (var i = 0; i < abundantNums.length; i++) {
  for (var j = i; j < abundantNums.length; j++) {
    currSum = abundantNums[i] + abundantNums[j];
    if (currSum > MAX_NUMBER) break;

    intExclude[currSum] = undefined;
  }
}
/*
for (var i = MAX_NUMBER; i >= 20161; i--) {
  if (!(i in intExclude)) console.log(i);
}
*/
var sum = 0;
for (var i = 1; i <= MAX_NUMBER; i++) {
  if (i in intExclude) continue;
//  console.log(i);
  sum += i;
}

//console.log(abundantNums.slice(-20));
//console.log(Object.keys(intExclude).slice(-100));
console.log(sum);

