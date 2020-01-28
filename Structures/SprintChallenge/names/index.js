const fs = require("fs");
const { performance } = require("perf_hooks");

const startTime = performance.now();

let data = fs.readFileSync(
  "./Structures/SprintChallenge/names/names_1.txt",
  "utf8"
);
let names1 = data.split("\r\n");

let data2 = fs.readFileSync(
  "./Structures/SprintChallenge/names/names_2.txt",
  "utf8"
);
let names2 = data2.split("\r\n");

const duplicates = [];
for (let name1 of names1) {
  for (let name2 of names2) {
    if (name1 === name2) {
      duplicates.push(name1);
    }
  }
}

const endTime = performance.now();
console.log(`${duplicates.length} duplicates: ${duplicates.join(" ")}`);
console.log(`runtime: ${(endTime - startTime) / 1000} seconds`);
// Can you optimize the runtime??
// ***********************************************************************
