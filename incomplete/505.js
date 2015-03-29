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

var addNumString = function(x, y) {
  var a = x.toString();
  var b = y.toString();

  var negaArray = [0, 0];
  var detectNegs = function(string, idx) {
    if (string[0] === "-") {
      negaArray[idx] = 1;
      var stringArray = string.split("");
      stringArray.shift();
      return stringArray.join("");
    }

    return string;
  }

  a = detectNegs(a, 0);
  b = detectNegs(b, 1);

  var length = Math.max(a.length, b.length);

  while (a.length < length) a = "0" + a;
  while (b.length < length) b = "0" + b;

  var carryOver = 0;
  var sumString = "";
  var result;

  if (negaArray[0] + negaArray[1] === 1) {
    var c, d, e, f;
    if (negaArray[1] === 1) {
      c = a;
      d = b;
    } else {
      c = b;
      d = a;
    }

    for (var index = length-1; index >= 0; index--) {
      e = parseInt(c[index]) + carryOver;
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
  } else {
    for (var index = length-1; index >= 0; index--) {
      result = parseInt(a[index]) + parseInt(b[index]);
      result += carryOver;
      sumString = (result % 10).toString() + sumString;
      carryOver = Math.floor(result / 10);
    }

    if (carryOver > 0) sumString = carryOver.toString() + sumString;
    if (negaArray[0] === 1) return "-" + sumString;
    return sumString;
  }
};

var x = function(a) {
  var k;

  switch(a) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      if (a % 2 === 0) {
        k = a / 2;
        return (3 * x(k)) + (2 * x(Math.floor(k / 2)));
      } else{
        k = (a - 1) / 2;
        return (2 * x(k)) + (3 * x(Math.floor(k / 2)));
      }
  }
};

var y = function(k, n) {
  if (k >= n) return x(k);

  var result = -1 - Math.max(y((2 * k), n), y(((2 * k) + 1), n));
};

var A = function(n) { return y(1, n) };

//console.log(A(10));
//console.log(addNumString(999, 9999));
//var a = -1;
//console.log(a.toString());

