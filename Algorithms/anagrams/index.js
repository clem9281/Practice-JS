// Given a word, return all the anagrams of that word in the English Language
// short-words.txt is provided for a shorter test case so you aren't waiting a million years to parse that huge words file

// check out the fs package to open files
const fs = require("fs");

function anagrams(word) {
  let data = fs.readFileSync("./Algorithms/anagrams/short-words.txt", "utf8");
}

console.log(anagrams("cat"));
/*
short-words.txt returns
[ 'cat', 'tac', 'act', 'cta' ]
words.txt returns
[ 'act',
  'atc',
  'cat',
  'cta',
  'tac',
  'tca',
  'act',
  'atc',
  'cat',
  'cta',
  'tac',
  'tca' ]
*/

console.log(anagrams("mat"));
/*
short-words.txt returns
[ 'mat', 'mta', 'tam' ]
words.txt returns
[ 'amt',
  'atm',
  'mat',
  'mta',
  'tam',
  'tma',
  'amt',
  'atm',
  'mat',
  'mta',
  'tam',
  'tma' ]
*/
