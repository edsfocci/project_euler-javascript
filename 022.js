/*
Names scores

Using names.txt (https://projecteuler.net/project/resources/p022_names.txt), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
var fs = require('fs');
fs.readFile("p022_names.txt", { encoding: 'utf8' }, function (err, data) {
  var charCodeUpperA = "A".charCodeAt();

  var textData = '",' + data + ',"';
  var textArray = textData.split('","');
  textArray = textArray.slice(1, -1);

  textArray = textArray.sort();

  var score = 0;
  var currSum;
  for (var i = 0; i < textArray.length; i++) {
    currSum = 0;
    for (var digit = 0; digit < textArray[i].length; digit++) {
      currSum += textArray[i].charCodeAt(digit) - charCodeUpperA+1;
    }

    score += currSum * (i+1);
  }

  console.log(score);
});

