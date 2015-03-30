/*
Bidirectional Recurrence

See equations here:
https://projecteuler.net/problem=505

Find A(10^12).
*/
var xTable = {};
xTable[0] = 0;
xTable[1] = 1;

var maxArray = function(array1, array2) {
  if (array1[1] > array2[1]) {
    return array1;
  } else if (array1[1] < array2[1]) {
    return array2;
  }

  if (array1[0] > array2[0]) {
    return array1;
  } else if (array1[0] < array2[0]) {
    return array2;
  }
};

var x = function(a) {
  var k, result;

  if (a in xTable) return xTable[a];

  if (a % 2 === 0) {
    k = a / 2;
    result = (3 * x(k)) + (2 * x(Math.floor(k / 2)));
  } else{
    k = (a - 1) / 2;
    result = (2 * x(k)) + (3 * x(Math.floor(k / 2)));
  }

  xTable[a] = result;
  return result;
};

var y = function(k, n) {
  if (k >= n) return [x(k), 0];

  var possTerm1 = y((2 * k), n);
  var possTerm2 = y(((2 * k) + 1), n);
//  console.log(possTerm1);
//  console.log(possTerm2);

  var result = maxArray(possTerm1, possTerm2);
  result[0] = -result[0] - 1;
  result[1] = -result[1] + 1;
  return result;
};

var A = function(n) { return y(1, n) };

//for (var i = 0; i <= 100; i++) console.log(x(i));
/*
console.log(A(1));
console.log(A(1e1));
console.log(A(1e2));
console.log(A(1e3));
console.log(A(1e4));
console.log(A(1e5));
*/
console.log(A(1e8));
//console.log(A(1e12));

