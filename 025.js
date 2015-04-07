/*
1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:

    F(n) = F(n−1) + F(n−2), where F(1) = 1 and F(2) = 1.

Hence the first 12 terms will be:

    F(1) = 1
    F(2) = 1
    F(3) = 2
    F(4) = 3
    F(5) = 5
    F(6) = 8
    F(7) = 13
    F(8) = 21
    F(9) = 34
    F(10) = 55
    F(11) = 89
    F(12) = 144

The 12th term, F(12), is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/
var NUM_DIGITS = 1e3;

var addNumString = function(a, b) {
  var c, d, maxLength, minLength, lengthDiff;
  if (a.length === b.length) {
    maxLength = a.length;
    minLength = a.length;
    lengthDiff = 0;
    c = a;
    d = b;
  } else {
    if (a.length > b.length) {
      maxLength = a.length;
      minLength = b.length;
      c = a;
      d = b;
    } else {
      maxLength = b.length;
      minLength = a.length;
      c = b;
      d = a;
    }

    lengthDiff = maxLength - minLength;
  }

  var sumString = "";
  var carryOver = 0;
  var currResult;
  for (var i = maxLength-1; i >= lengthDiff; i--) {
    currResult = parseInt(c[i]) + parseInt(d[i - lengthDiff]) + carryOver;
    sumString = (currResult % 10).toString() + sumString;
    carryOver = Math.floor(currResult / 10);
  }

  if (carryOver !== 0) {
    if (lengthDiff === 0) {
      return carryOver.toString() + sumString;
    } else {
      currResult = parseInt(c.slice(0, lengthDiff)) + carryOver;
      return currResult.toString() + sumString;
    }
  } else {
    if (lengthDiff === 0) {
      return sumString;
    } else {
      return c.slice(0, lengthDiff) + sumString;
    }
  }
};

var currTerm1 = "1";
var currTerm2 = "1";
var newTerm = "1";
var termCounter = 2;

while(newTerm.length < NUM_DIGITS) {
  newTerm = addNumString(currTerm1, currTerm2);

  currTerm1 = currTerm2;
  currTerm2 = newTerm;
  termCounter++;
}

console.log(termCounter);

