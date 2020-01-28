function ListNode(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

ListNode.prototype.insertAfter = function(value) {
  const newNode = new ListNode(value);
  if (this.next) {
    this.next.prev = newNode;
    this.next = newNode;
  } else {
    this.next = newNode;
  }
};

ListNode.prototype.insertBefore = function(value) {
  const newNode = new ListNode(value);
  if (this.prev) {
    this.prev.next = newNode;
    this.prev = newNode;
  } else {
    this.prev = newNode;
  }
};

ListNode.prototype.delete = function() {
  if (this.next) {
    this.next.prev = this.prev;
  }
  if (this.prev) {
    this.prev.next = this.next;
  }
};

function Dll(node = null) {
  this.head = node;
  this.tail = node;
  this.size = node === null ? 0 : 1;
}
Dll.prototype.len = function() {};
Dll.prototype.removeFromHead = function() {};
Dll.prototype.addToTail = function(value) {};
Dll.prototype.addToHead = function(value) {};
Dll.prototype.removeFromTail = function() {};
Dll.prototype.moveToFront = function(node) {};
Dll.prototype.moveToEnd = function(node) {};
Dll.prototype.delete = function(node) {};
Dll.prototype.getMax = function() {};

module.exports = {
  ListNode,
  Dll
};
