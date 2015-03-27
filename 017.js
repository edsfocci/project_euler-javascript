/*
Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/
var MAX_NUMBER = 1000;
var totalChars = 0;
var numberWords, hundredsDigit, tensDigit, onesDigit;

var singleDigitsWords = function(digit) {
  switch(digit) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
};

var getDigit = function(number, divisor) {
  return Math.floor(number % (divisor*10) / divisor);
};

for (var num = 1; num <= MAX_NUMBER; num++) {
  numberWords = "";

  if (num === 1000) {
    numberWords = "onethousand";
    totalChars += numberWords.length;
    break;
  }

  hundredsDigit = getDigit(num, 100);
  tensDigit = getDigit(num, 10);
  onesDigit = getDigit(num, 1);

  if (hundredsDigit > 0) {
    numberWords += singleDigitsWords(hundredsDigit) + "hundred";

    if (tensDigit + onesDigit > 0) numberWords += "and";
  }

  if (tensDigit > 1) {
    switch(tensDigit) {
      case 2:
        numberWords += "twen";
        break;
      case 3:
        numberWords += "thir";
        break;
      case 4:
        numberWords += "for";
        break;
      case 5:
        numberWords += "fif";
        break;
      case 6:
        numberWords += "six";
        break;
      case 7:
        numberWords += "seven";
        break;
      case 8:
        numberWords += "eigh";
        break;
      case 9:
        numberWords += "nine";
    }
    numberWords += "ty";

    if (onesDigit > 0) numberWords += singleDigitsWords(onesDigit);

  } else if (tensDigit === 1) {
    switch(onesDigit) {
      case 0:
        numberWords += "ten";
        break;
      case 1:
        numberWords += "eleven";
        break;
      case 2:
        numberWords += "twelve";
        break;
      case 3:
        numberWords += "thir";
        break;
      case 4:
        numberWords += "four";
        break;
      case 5:
        numberWords += "fif";
        break;
      case 6:
        numberWords += "six";
        break;
      case 7:
        numberWords += "seven";
        break;
      case 8:
        numberWords += "eigh";
        break;
      case 9:
        numberWords += "nine";
    }

    if (onesDigit >= 3) numberWords += "teen";

  } else {
    if (onesDigit > 0) numberWords += singleDigitsWords(onesDigit);
  }

  totalChars += numberWords.length;
//  console.log(numberWords);
}

console.log(totalChars);

