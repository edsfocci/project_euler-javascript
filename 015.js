/*
Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

https://projecteuler.net/project/images/p015.gif

How many such routes are there through a 20×20 grid?
*/
var GRID_WIDTH = 20;
var routesCount = GRID_WIDTH + 1;

var routesCountArray = [];
for (var row = 0; row < GRID_WIDTH; row++) routesCountArray.push([1]);

for (var i = 1; i < GRID_WIDTH; i++) {
  for (var j = 0; j < GRID_WIDTH; j++) {
    routesCountArray[j].push(0);
    for (var k = 0; k <= j; k++) {
      routesCountArray[j][i] += routesCountArray[k][i-1];
      routesCount += routesCountArray[k][i-1];
    }
  }
}

console.log(routesCount);

