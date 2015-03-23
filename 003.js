/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var NUM = 4;
var NUM = 13195;
var NUM = 600851475143;
suite.add('Simple iterations', function() {
  var num = NUM;

  for (var divisor = 2; num > 1; divisor++) {
    if (num % divisor === 0) {
      //console.log(divisor);
      while (num % divisor === 0) num /= divisor;
    }
  }
})
.add('Half iterations skipping', function() {
  var num = NUM;

  for (var divisor = 2; (num / 2) >= divisor; divisor++) {
    if (num % divisor === 0) {
      //console.log(divisor);
      while (num % divisor === 0) num /= divisor;
    }
  }

  //if (num > 1) console.log(num);
})
.add('Complex iteration skipping', function() {
  var num = NUM;

  for (var divisor = 2; (num / divisor) >= divisor; divisor++) {
    if (num % divisor === 0) {
      //console.log(divisor);
      while (num % divisor === 0) num /= divisor;
    }
  }

  //if (num > 1) console.log(num);
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
//.run();

var num = NUM;

for (var divisor = 2; (num / divisor) >= divisor; divisor++) {
  if (num % divisor === 0) {
    console.log(divisor);
    while (num % divisor === 0) num /= divisor;
  }
}

if (num > 1) console.log(num);

