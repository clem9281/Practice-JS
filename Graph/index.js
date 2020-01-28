const { Queue, Stack } = require("../Structures");

function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(vertex) {};

Graph.prototype.addEdge = function(v1, v2) {};

Graph.prototype.getNeighbors = function(vertexId) {};

Graph.prototype.bft = function(startingVertex) {
  // Print each vertex in breadth-first order
  // beginning from starting_vertex.
};

Graph.prototype.dft = function(startingVertex) {
  // Print each vertex in depth-first order
  // beginning from starting_vertex.
};

Graph.prototype.dftRecursive = function(startingVertex, visited = null) {
  // Print each vertex in depth-first order
  // beginning from starting_vertex.
  // This should be done using recursion.
};
Graph.prototype.bfs = function(startingVertex, destinationVertex) {
  // Return a list containing the shortest path from
  // starting_vertex to destination_vertex in
  // breath-first order.
};

Graph.prototype.dfs = function(startingVertex, destinationVertex) {
  // Return a list containing a path from
  // starting_vertex to destination_vertex in
  // depth-first order.
};

let graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(5, 3);
graph.addEdge(6, 3);
graph.addEdge(7, 1);
graph.addEdge(4, 7);
graph.addEdge(1, 2);
graph.addEdge(7, 6);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(2, 3);
graph.addEdge(4, 6);

// Should print:
// {1: {2}, 2: {3, 4}, 3: {5}, 4: {6, 7}, 5: {3}, 6: {3}, 7: {1, 6}}
console.log("VERTICES");
console.log(graph.vertices);
// Valid BFT paths:
//     1, 2, 3, 4, 5, 6, 7
//     1, 2, 3, 4, 5, 7, 6
//     1, 2, 3, 4, 6, 7, 5
//     1, 2, 3, 4, 6, 5, 7
//     1, 2, 3, 4, 7, 6, 5
//     1, 2, 3, 4, 7, 5, 6
//     1, 2, 4, 3, 5, 6, 7
//     1, 2, 4, 3, 5, 7, 6
//     1, 2, 4, 3, 6, 7, 5
//     1, 2, 4, 3, 6, 5, 7
//     1, 2, 4, 3, 7, 6, 5
//     1, 2, 4, 3, 7, 5, 6

console.log("BFT");
graph.bft(1);

// Valid DFT paths:
//     1, 2, 3, 5, 4, 6, 7
//     1, 2, 3, 5, 4, 7, 6
//     1, 2, 4, 7, 6, 3, 5
//     1, 2, 4, 6, 3, 5, 7

console.log("DFT");
graph.dft(1);

// Valid DFT recursive paths:
//     1, 2, 3, 5, 4, 6, 7
//     1, 2, 3, 5, 4, 7, 6
//     1, 2, 4, 7, 6, 3, 5
//     1, 2, 4, 6, 3, 5, 7

console.log("DFT RECURSIVE");
graph.dftRecursive(1);

// Valid BFS path:
//     [1, 2, 4, 6]

console.log("BFS");
console.log(graph.bfs(1, 6));

// Valid DFS paths:
//     [1, 2, 4, 6]
//     [1, 2, 4, 7, 6]

console.log("DFS");
console.log(graph.dfs(1, 6));
