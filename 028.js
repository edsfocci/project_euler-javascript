/*
Number spiral diagonals

*/
var GRID_LENGTH = 1001;
var sum = 1;
var count = 1;

for (var i = 2; i < GRID_LENGTH; i += 2) {
  for (var j = 0; j < 4; j++) {
    count += i;
    sum += count;
  }
}

console.log(sum);
