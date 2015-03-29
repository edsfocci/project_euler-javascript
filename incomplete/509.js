/*
Divisor Nim

Anton and Bertrand love to play three pile Nim.
However, after a lot of games of Nim they got bored and changed the rules somewhat.
They may only take a number of stones from a pile that is a proper divisor of the number of stones present in the pile.
E.g. if a pile at a certain moment contains 24 stones they may take only 1,2,3,4,6,8 or 12 stones from that pile.
So if a pile contains one stone they can't take the last stone from it as 1 isn't a proper divisor of 1.
The first player that can't make a valid move loses the game.
Of course both Anton and Bertrand play optimally.

The triple (a,b,c) indicates the number of stones in the three piles.
Let S(n) be the number of winning positions for the next player for 1 ≤ a, b, c ≤ n.
S(10) = 692 and S(100) = 735494.
Find S(123456787654321) modulo 1234567890.
*/
var N = 10;

var primeFactors = function(number) {
  var primeFactorsArray = [];
  var num = number;
  for (var i = 2; num / i >= i; i++) {
    while (num % i === 0) {
      primeFactorsArray.push(i);
      num /= i;
    }
  }
  if (num > 0) primeFactorsArray.push(num);
  return primeFactorsArray;
};

var properDivisors = function(number, pfArray) {
  var propDivisorsArray = [1];
  var divisor, kay;

  for (var i = 0; i < pfArray.length; i++) {
     if (pfArray[i] !== number && propDivisorsArray.indexOf(pfArray[i]) < 0)
       propDivisorsArray.push(pfArray[i]);

    for (var j = i+1; j < pfArray.length+i-1; j++) {

      divisor = 1;
      for (var k = i; k <= j; k++) {
        if (k >= pfArray.length) {
          kay = k % pfArray.length;
        } else {
          kay = k;
        }
        divisor *= pfArray[kay];
      }

      if (divisor !== number && propDivisorsArray.indexOf(divisor) < 0)
        propDivisorsArray.push(divisor);
    }
  }
  return propDivisorsArray;
};

var numWinningPositions = function(n) {
  for (var a = 2; a <= n; a++) {
    for (var b = 1; b <= n; b++) {
      for (var c = 1; c <= n; c++) {
        
      }
    }
  }
};

console.log(numWinningPositions(2));

