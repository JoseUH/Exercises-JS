const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
let longestWord = "";
function findLongestWord(param) {
  for (let step = 0; step < param.length; step++) {
    if (param[step].length > longestWord.length) {
       longestWord = param[step]
    }
    
  }
}

findLongestWord(avengers);

console.log(longestWord);
