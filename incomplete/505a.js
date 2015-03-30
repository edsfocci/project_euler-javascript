/*
Bidirectional Recurrence

See equations here:
https://projecteuler.net/problem=505

Find A(10^12).
*/
var x = function(a) {
  var k, result;

  switch(a) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      if (a % 2 === 0) {
        k = a / 2;
        result = (3 * x(k)) + (2 * x(Math.floor(k / 2)));

        if (result.toString().length < longNumDigits-1) return result;

        var finalResult = result.toString();
        while (finalResult[0] !== "-") {
          result = finalResult;
          finalResult = addNumString(result, "-" + powString(2, 60));
        }
      } else{
        k = (a - 1) / 2;
        result = (2 * x(k)) + (3 * x(Math.floor(k / 2)));

        if (result.toString().length < longNumDigits-1) return result;

        var finalResult = result.toString();
        while (finalResult[0] !== "-") {
          result = finalResult;
          finalResult = addNumString(result, "-" + powString(2, 60));
        }
      }
  }

  return result;
};

var y = function(k, n) {
  if (k >= n) return x(k);

  var result;
  var possTerm1 = y((2 * k), n);
  var possTerm2 = y(((2 * k) + 1), n);

  if (possTerm1.toString().length < longNumDigits-1 &&
    possTerm2.toString().length < longNumDigits-1) {
    result = -1 - Math.max(possTerm1, possTerm2);
  } else {
    result =
      addNumString(-1, "-" + maxNumString(possTerm1, possTerm2));
  }

  return addNumString(powString(2, 60), result);
};

var A = function(n) { return y(1, n) };

