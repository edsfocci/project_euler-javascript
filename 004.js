/*
Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var MAX_DIGITS = 3;
suite.add('Factors to String', function() {
  var largestPalindromeProduct = 0;

  for (var i = 0; i.toString().length <= MAX_DIGITS; i++) {
    for (var j = 0; j.toString().length <= MAX_DIGITS; j++) {
      var product = i * j;
      if (product.toString() ===
        product.toString().split("").reverse().join("")) {
        if (product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
        }
      }
    }
  }

  //console.log(largestPalindromeProduct);
})
.add('Factors compared to powers of 10', function() {
  var largestPalindromeProduct = 0;

  for (var i = 0; i < Math.pow(10, MAX_DIGITS); i++) {
    for (var j = 0; j < Math.pow(10, MAX_DIGITS); j++) {
      var product = i * j;
      if (product.toString() ===
        product.toString().split("").reverse().join("")) {
        if (product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
        }
      }
    }
  }

  //console.log(largestPalindromeProduct);
})
.add('Factors, mostly numeric conversion', function() {
  var largestPalindromeProduct = 0;

  for (var i = 0; i < Math.pow(10, MAX_DIGITS); i++) {
    for (var j = 0; j < Math.pow(10, MAX_DIGITS); j++) {
      var product = i * j;
      var numDigits = product.toString().length;
      var productReversed = 0;

      for (var d = 0; d < numDigits; d++) {
        digit = Math.floor(product / Math.pow(10, d)) % 10;
        productReversed += digit * Math.pow(10, numDigits - (d+1));
      }

      if (product === productReversed) {
        if (product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
        }
      }
    }
  }

  //console.log(largestPalindromeProduct);
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

  var largestPalindromeProduct = 0;

  for (var i = 0; i < Math.pow(10, MAX_DIGITS); i++) {
    for (var j = 0; j < Math.pow(10, MAX_DIGITS); j++) {
      var product = i * j;
      var numDigits = product.toString().length;
      var productReversed = 0;

      for (var d = 0; d < numDigits; d++) {
        digit = Math.floor(product / Math.pow(10, d)) % 10;
        productReversed += digit * Math.pow(10, numDigits - (d+1));
      }

      if (product === productReversed) {
        if (product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
        }
      }
    }
  }

  console.log(largestPalindromeProduct);

