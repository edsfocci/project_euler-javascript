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

  var product;

  for (var i = 1; i.toString().length <= MAX_DIGITS; i++) {
    for (var j = 2; j.toString().length <= MAX_DIGITS; j++) {
      product = i * j;

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
.add('Factors to String, don\'t multiply same factor pairs twice', function() {
  var largestPalindromeProduct = 0;

  var product;

  for (var i = 1; i.toString().length <= MAX_DIGITS; i++) {
    for (var j = i; j.toString().length <= MAX_DIGITS; j++) {
      product = i * j;

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

  var product;
  var belowFactor = Math.pow(10, MAX_DIGITS);

  for (var i = 1; i < belowFactor; i++) {
    for (var j = i; j < belowFactor; j++) {
      product = i * j;

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
.add('Factors compared to powers of 10, palindrome calculated', function() {
  var largestPalindromeProduct = 0;

  var product, numDigits, productReversed;
  var belowFactor = Math.pow(10, MAX_DIGITS);

  for (var i = 1; i < belowFactor; i++) {
    for (var j = i; j < belowFactor; j++) {
      product = i * j;

      numDigits = product.toString().length;
      productReversed = 0;
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
.add('Factors compared to powers of 10, palindrome calculated, calculate number of digits', function() {
  var largestPalindromeProduct = 0;

  var product, numDigits, productReversed;
  var belowFactor = Math.pow(10, MAX_DIGITS);

  for (var i = 1; i < belowFactor; i++) {
    for (var j = i; j < belowFactor; j++) {
      product = i * j;

      numDigits = 1;
      while (product / Math.pow(10, numDigits) >= 1) numDigits++;

      productReversed = 0;
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

var product, numDigits, productReversed;
var belowFactor = Math.pow(10, MAX_DIGITS);

for (var i = 1; i < belowFactor; i++) {
  for (var j = i; j < belowFactor; j++) {
    product = i * j;

    numDigits = 1;
    while (product / Math.pow(10, numDigits) >= 1) numDigits++;

    productReversed = 0;
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

