/*
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var BELOW_NUM = 1000;
suite.add('Simple for loop', function() {
  var sum = 0;

  for (var num = 1; num < BELOW_NUM; num++) {
    if (num % 3 === 0 || num % 5 === 0) sum += num;
  }
})
.add('Multiples of 3 & 5', function() {
  var sum = 0;

  for (var num = 5; num < BELOW_NUM; num += 5) sum += num;

  for (var num = 3; num < BELOW_NUM; num += 3) {
    if (!(num % 5 === 0)) sum += num;
  }
})
.add('Multiples of 3 & 5, swapped', function() {
  var sum = 0;

  for (var num = 3; num < BELOW_NUM; num += 3) sum += num;

  for (var num = 5; num < BELOW_NUM; num += 5) {
    if (!(num % 3 === 0)) sum += num;
  }
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
//.run();

var sum = 0;

for (var num = 3; num < BELOW_NUM; num += 3) sum += num;

for (var num = 5; num < BELOW_NUM; num += 5) {
  if (!(num % 3 === 0)) sum += num;
}

console.log(sum);

