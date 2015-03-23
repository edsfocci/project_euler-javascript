/* Answer: 232792560
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var MAX_NUM = 20;
suite.add('Using object', function() {
  var totalFactorsCount = {};
  var currentFactorsCount, currentNum;

  for (var num = MAX_NUM; num > 1; num--) {
    currentFactorsCount = {};

    currentNum = num;
    for (var i = 2; currentNum > 1; i++) {
      while (currentNum % i === 0) {
        if (currentFactorsCount[i] === undefined) {
          currentFactorsCount[i] = 1;
        } else {
          currentFactorsCount[i] += 1;
        }
        currentNum /= i;
      }
    }

    for (var key in currentFactorsCount) {
      if (totalFactorsCount[key] === undefined ||
        totalFactorsCount[key] < currentFactorsCount[key]) {
        totalFactorsCount[key] = currentFactorsCount[key];
      }
    }
  }

  var product = 1;
  for (var key in totalFactorsCount) {
    product *= Math.pow(key, totalFactorsCount[key]);
  }

  //console.log(product);
})
.add('(Tail?) Recursion', function() {
  var findPrime = function(number) {
    var possiblePrime = number - 1;
    while (number % possiblePrime !== 0) {
      possiblePrime--;
    }
    if (possiblePrime === 1) return number;

    return findPrime(possiblePrime);
  }

  var product = MAX_NUM;
  var currentNum, prime;

  for (var num = MAX_NUM-1; num > 1; num--) {
    currentNum = num;

    while (product % num !== 0) {
      prime = findPrime(num);

      currentNum /= prime;
      product *= prime;
    }
  }

  //console.log(product);
})
.add('(Not Tail) Recursion', function() {
  var findPrime = function(number) {
    var prime;

    for (var possiblePrime = number-1; possiblePrime > 1; possiblePrime--) {
      if (number % possiblePrime == 0) {
        prime = findPrime(possiblePrime);
        break;
      }
    }

    return prime || number;
  }

  var product = MAX_NUM;
  var currentNum, prime;

  for (var num = MAX_NUM-1; num > 1; num--) {
    currentNum = num;

    while (product % num !== 0) {
      prime = findPrime(num);

      currentNum /= prime;
      product *= prime;
    }
  }

  //console.log(product);
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

  var findPrime = function(number) {
    var prime;

    for (var possiblePrime = number-1; possiblePrime > 1; possiblePrime--) {
      if (number % possiblePrime == 0) {
        prime = findPrime(possiblePrime);
        break;
      }
    }

    return prime || number;
  }

  var product = MAX_NUM;
  var currentNum, prime;

  for (var num = MAX_NUM-1; num > 1; num--) {
    currentNum = num;

    while (product % num !== 0) {
      prime = findPrime(num);

      currentNum /= prime;
      product *= prime;
    }
  }

  console.log(product);

