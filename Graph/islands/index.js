// Write a function that takes a 2D binary array and returns the number of 1 islands. An island consists of 1s that are connected to the north, south, east or west. For example:

// [
// [0, 1, 0, 1, 0],
// [1, 1, 0, 1, 1],
// [0, 0, 1, 0, 0],
// [1, 0, 1, 0, 0],
// [1, 1, 0, 0, 0]
// ]

const { Stack } = require("../../Structures");

function getNeighbors(x, y, matrix) {}
function dftIslands(startX, startY, matrix, visited) {}
function islandCounter(matrix) {}

const islands = [
  [0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0]
];

// should return 4
console.log(islandCounter(islands));

const big_islands = [
  [1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0]
];
// should return 13
console.log(islandCounter(big_islands));
