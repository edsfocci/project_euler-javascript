/*
Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/
var POWERS_OF_TWO = 1000;
var digitsString = "1";
var carryOver, newDigitsString, calculatedValue;
var sum = 0;

for (var i = 0; i < POWERS_OF_TWO; i++) {
  newDigitsString = "";
  carryOver = 0;

  for (var j = digitsString.length-1; j >= 0; j--) {
    calculatedValue = parseInt(digitsString[j]) * 2 + carryOver;
    carryOver = Math.floor(calculatedValue / 10);
    newDigitsString = (calculatedValue % 10).toString() + newDigitsString;
  }

  if (carryOver > 0) {
    digitsString = carryOver.toString() + newDigitsString;
  } else {
    digitsString = newDigitsString;
  }
}

for (var i = 0; i < digitsString.length; i++) sum += parseInt(digitsString[i]);

console.log(sum);

