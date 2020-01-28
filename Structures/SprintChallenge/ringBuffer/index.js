const { Dll } = require("../../index");

function RingBuffer(capacity) {
  this.capacity = capacity;
  this.current = null;
  this.storage = new Dll();
}

RingBuffer.prototype.append = function(item) {};

RingBuffer.prototype.get = function() {};

module.exports = { RingBuffer };
