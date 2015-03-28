/*
Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

  * 1 Jan 1900 was a Monday.
  * Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
  * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
var sundaysCount = 0;
var weekday = 1;

var isLeapYr = function(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true
  }
  return false;
};

var numberOfDays = function(month, leapYear) {
  if (month === 2) {
    if (leapYear) {
      return 29;
    } else {
      return 28;
    }
  }

  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

for (var yr = 1900; yr <= 2000; yr++) {
  for (var month = 1; month <= 12; month++) {
    if (yr > 1900 && weekday === 0) sundaysCount++;
    weekday += numberOfDays(month, isLeapYr(yr));
    weekday %= 7;
  }
}

console.log(sundaysCount);

