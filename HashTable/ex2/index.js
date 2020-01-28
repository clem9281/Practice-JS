const { HashTable } = require("../index");

function Ticket(source, destination) {
  this.source = source;
  this.destination = destination;
}

function reconstructTrip(tickets, length) {
  let ht = new HashTable(length);
  const path = new Array(length).fill(null);

  return path;
}
module.exports = { Ticket, reconstructTrip };

// let ticket_1 = new Ticket("NONE", "PDX");
// let ticket_2 = new Ticket("PDX", "DCA");
// let ticket_3 = new Ticket("DCA", "NONE");

// let tickets = [ticket_1, ticket_2, ticket_3];

// let expected = ["PDX", "DCA", "NONE"];
// let result = reconstructTrip(tickets, 3);
// console.log(result);
