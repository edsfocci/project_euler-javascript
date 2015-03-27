/*
Highly divisible triangular number

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

     1: 1
     3: 1,3
     6: 1,2,3,6
    10: 1,2,5,10
    15: 1,3,5,15
    21: 1,3,7,21
    28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var OVER_DIVISORS_COUNT = 100;
suite.add('Brute force', function() {
  var divisorsCount = 0;
//  var divisorsArray;

  var triangleNumber = 0;
  var lastNum = 1;
/*  while (triangleNumber < OVER_DIVISORS_COUNT) {
    triangleNumber += lastNum;
    lastNum++;
  }
*/
  while (divisorsCount <= OVER_DIVISORS_COUNT) {
//    divisorsArray = [1];
    divisorsCount = 0;
    triangleNumber += lastNum;

    for (var possDivisor = 2; possDivisor <= triangleNumber; possDivisor++) {
      if (triangleNumber % possDivisor === 0) divisorsCount++;
/*      if (triangleNumber % possDivisor === 0) {
          divisorsCount++;
          divisorsArray.push(possDivisor);
        }*/
    }

//    console.log(divisorsArray);
    lastNum++
  }

  //console.log(triangleNumber);
})
.add('Find primes', function() {
  var primeFactors, currTriNumber, divisor;
  var divisorsArray = [];

  var triangleNumber = 0;
  var lastNum = 1;
/*  while (triangleNumber < OVER_DIVISORS_COUNT) {
    triangleNumber += lastNum;
    lastNum++;
  }
*/
  while (divisorsArray.length <= OVER_DIVISORS_COUNT) {
    divisorsArray = [1];
    triangleNumber += lastNum;

    primeFactors = [];
    currTriNumber = triangleNumber;
    for (var i = 2; (currTriNumber / i) >= i; i++) {
      while (currTriNumber % i === 0) {
        primeFactors.push(i);
        currTriNumber /= i;
      }
    }
    if (currTriNumber > 1) primeFactors.push(currTriNumber);

    for (var i = 0; i < primeFactors.length; i++) {
      for (var j = 0; j <= primeFactors.length; j++) {
        divisor = 1;
        primeFactors.slice(i, j).forEach(function(num) {
          divisor *= num;
        });
        if (divisorsArray.indexOf(divisor) === -1) divisorsArray.push(divisor);
//        console.log(i+" "+j);
      }
    }

//    console.log(divisorsArray.sort(function(a, b) { return a-b }));
    lastNum++
  }

  //console.log(triangleNumber);
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

  var primeFactors, currTriNumber, divisor;
  var divisorsArray = [];

  var triangleNumber = 0;
  var lastNum = 1;
  while (triangleNumber < OVER_DIVISORS_COUNT) {
    triangleNumber += lastNum;
    lastNum++;
  }

  while (divisorsArray.length <= OVER_DIVISORS_COUNT) {
    divisorsArray = [1];
    triangleNumber += lastNum;

    primeFactors = [];
    currTriNumber = triangleNumber;
    for (var i = 2; (currTriNumber / i) >= i; i++) {
      while (currTriNumber % i === 0) {
        primeFactors.push(i);
        currTriNumber /= i;
      }
    }
    if (currTriNumber > 1) primeFactors.push(currTriNumber);

    for (var i = 0; i < primeFactors.length; i++) {
      for (var j = 0; j <= primeFactors.length; j++) {
        divisor = 1;
        primeFactors.slice(i, j).forEach(function(num) {
          divisor *= num;
        });
        if (divisorsArray.indexOf(divisor) === -1) divisorsArray.push(divisor);
//        console.log(i+" "+j);
      }
    }

//    console.log(divisorsArray.sort(function(a, b) { return a-b }));
    lastNum++
  }

  console.log(triangleNumber);
