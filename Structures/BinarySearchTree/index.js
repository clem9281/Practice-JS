const { Queue } = require("../Queue");
const { Stack } = require("../Stack");

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {};
BinarySearchTree.prototype.contains = function(value) {};
BinarySearchTree.prototype.getMax = function() {};
BinarySearchTree.prototype.forEach = function(cb) {};
BinarySearchTree.prototype.inOrderPrint = function(node) {};
BinarySearchTree.prototype.bftPrint = function(node) {};
BinarySearchTree.prototype.dftPrint = function(node) {};

module.exports = { BinarySearchTree };
