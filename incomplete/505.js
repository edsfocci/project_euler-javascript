/*
Bidirectional Recurrence

See equations here:
https://projecteuler.net/problem=505

Find A(10^12).
*/
var powString = function(num, exp) {
  var prodString = "1";
  var carryOver, currProdString, result;

  for (var count = 0; count < exp; count++) {
    newProdString = "";
    carryOver = 0;

    for (var index = prodString.length-1; index >= 0; index--) {
      result = num * parseInt(prodString[index]);
      result += carryOver;
      newProdString = (result % 10).toString() + newProdString;
      carryOver = Math.floor(result / 10);
    }

    prodString = newProdString;
    if (carryOver > 0) prodString = carryOver.toString() + prodString;
  }

  return prodString;
};

var maxNumString = function(x, y) {
  var a = x.toString();
  var b = y.toString();

  if (a === b) return a;

  var negaArray = [0, 0];
  var detectNegs = function(string, idx) {
    if (string[0] === "-") {
      negaArray[idx] = 1;
      return string.slice(1, string.length);
    }

    return string;
  }

  a = detectNegs(a, 0);
  b = detectNegs(b, 1);

  if (negaArray[0] + negaArray[1] === 1) {
    if (negaArray[1] === 1) {
      return a;
    } else {
      return b;
    }
  }

  var compareAbsValues = function(e, f) {
    var minLength;
    if (a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
          return a;
        } else if (a[i] < b[i]) {
          return b;
        }
      }
    } else {
      minLength = Math.min(a.length, b.length);

      if (a.length > minLength) {
        return a;
      } else {
        return b;
      }
    }
  }

  var c, d;
  c = compareAbsValues(a, b);
  if (a === c) {
    d = b;
  } else {
    d = a;
  }

  if (negaArray[0] + negaArray[1] === 0) return c;
  return d;
};

var addNumString = function(x, y) {
  var a = x.toString();
  var b = y.toString();

  var negaArray = [0, 0];
  var detectNegs = function(string, idx) {
    if (string[0] === "-") {
      negaArray[idx] = 1;
      return string.slice(1, string.length);
    }

    return string;
  }

//  console.log(a);
//  console.log(b);
  a = detectNegs(a, 0);
  b = detectNegs(b, 1);
//  console.log(a);
//  console.log(b);

  var maxLength = Math.max(a.length, b.length);

  var carryOver = 0;
  var sumString = "";
  var result;

  if (negaArray[0] + negaArray[1] === 1) {
    if (a === b) return "0";

    var c, d, e, f, minLength, startDiff, endDiff;
    if (a.length === b.length) {
      minLength = a.length;
      endDiff = 0;

      for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
          c = a;
          d = b;
          break;
        } else if (a[i] < b[i]) {
          c = b;
          d = a;
          break;
        }
        minLength--;
      }

      startDiff = a.length - minLength;
      minLength = a.length;
//      console.log(startDiff);
    } else {
      minLength = Math.min(a.length, b.length);
      startDiff = 0;
      endDiff = maxLength - minLength;

      if (a.length > minLength) {
        c = a;
        d = b;
      } else {
        c = b;
        d = a;
      }
    }
//    console.log(c);
//    console.log(d);

    for (var index = minLength-1; index >= 0 + startDiff; index--) {
      e = parseInt(c[index + endDiff]) + carryOver;
      f = parseInt(d[index]);

      if (e < f) {
        e += 10;
        carryOver = -1;
      } else {
        carryOver = 0;
      }
      result = e - f;
      sumString = result.toString() + sumString;
    }

    var digitsLeft = "";

    if (carryOver !== 0) {
      var digitsLeftStart = endDiff - 1;
      var notZero = digitsLeftStart;
      while (c[notZero] === "0") notZero--;
      digitsLeft = c.slice(0 + startDiff, notZero);
      digitsLeft += (parseInt(c[notZero]) + carryOver).toString();
      for (var i = 0; i < digitsLeftStart - notZero; i++) digitsLeft += "9";
    } else {
      digitsLeft = c.slice(0, -minLength);
    }
    sumString = digitsLeft + sumString;
    while (sumString[0] === "0")
      sumString = sumString.slice(1, sumString.length);

    if (negaArray[0] === 1 && a === c) {
      sumString = "-" + sumString;
    } else if (negaArray[1] === 1 && b === c) {
      sumString = "-" + sumString;
    }

  } else {
    while (a.length < maxLength) a = "0" + a;
    while (b.length < maxLength) b = "0" + b;

    for (var index = maxLength-1; index >= 0; index--) {
      result = parseInt(a[index]) + parseInt(b[index]);
      result += carryOver;
      sumString = (result % 10).toString() + sumString;
      carryOver = Math.floor(result / 10);
    }

    if (carryOver > 0) sumString = carryOver.toString() + sumString;
    if (negaArray[0] === 1) return "-" + sumString;
  }
//  console.log(sumString);
  return sumString;
};

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

var longNumDigits = powString(2, 60).length;

//console.log(A(4));
//console.log(addNumString("-" + powString(2, 60), A(10)));
//console.log(addNumString(-999, -9999));
/*
console.log(A(1));
console.log(A(1e1));
console.log(A(1e2));
console.log(A(1e3));
console.log(A(1e4));
console.log(A(1e5));
*/
console.log(A(1e6));

