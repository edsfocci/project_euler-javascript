/*
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
var SUM = 1000;

for (var c = SUM-1; ; c--) {
  for (var b = 1; b < c && b + c <= SUM; b++) {
    for (var a = 0; a < b && a + b + c <= SUM; a++) {
      if (a + b + c === 1000 &&
        Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        console.log (a * b * c);
        return;
      }
    }
  }
}

