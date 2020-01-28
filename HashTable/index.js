// Linked List hash table key/value pair
function LinkedPair(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

function HashTable(capacity) {
  this.capacity = capacity;
  this.storage = new Array(capacity).fill(null);
}

HashTable.prototype.hash = function(key) {};

HashTable.prototype.hashMOD = function(key) {};

HashTable.prototype.insert = function(key, value) {
  // Store the value with the given key.
  // Hash collisions should be handled with Linked List Chaining.
  // Fill this in.
};
HashTable.prototype.remove = function(key) {
  // Remove the value stored with the given key.
  //     Print a warning if the key is not found.
  //     Fill this in.
};
HashTable.prototype.retrieve = function(key) {
  // Retrieve the value stored with the given key.
  // Returns None if the key is not found.
  // Fill this in.
};
HashTable.prototype.resize = function() {
  // Doubles the capacity of the hash table and
  //     rehash all key/value pairs.
  //     Fill this in.
};

// let ht = new HashTable(8);

// ht.insert("key-0", "val-0");
// ht.insert("key-1", "val-1");
// ht.insert("key-2", "val-2");
// ht.insert("key-3", "val-3");
// ht.insert("key-4", "val-4");
// ht.insert("key-5", "val-5");
// ht.insert("key-6", "val-6");
// ht.insert("key-7", "val-7");
// ht.insert("key-8", "val-8");
// ht.insert("key-9", "val-9");

// ht.insert("key-0", "new-val-0");
// ht.insert("key-1", "new-val-1");
// ht.insert("key-2", "new-val-2");
// ht.insert("key-3", "new-val-3");
// ht.insert("key-4", "new-val-4");
// ht.insert("key-5", "new-val-5");
// ht.insert("key-6", "new-val-6");
// ht.insert("key-7", "new-val-7");
// ht.insert("key-8", "new-val-8");
// ht.insert("key-9", "new-val-9");

// console.log(ht.retrieve("key-0"));

// console.log(ht.retrieve("key-1"));

// console.log(ht.retrieve("key-2"));

// console.log(ht.retrieve("key-3"));

// console.log(ht.retrieve("key-4"));

// console.log(ht.retrieve("key-5"));

// console.log(ht.retrieve("key-6"));

// console.log(ht.retrieve("key-7"));

// console.log(ht.retrieve("key-8"));

// console.log(ht.retrieve("key-9"));

module.exports = { HashTable };
