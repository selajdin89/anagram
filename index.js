import { readFileSync } from "fs";

function syncReadFile(filename) {
  const contents = readFileSync("./dictionary.txt", "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

const words = syncReadFile("./dictionary.txt");

const sort = (word) => word.split("").sort().join("");

const anagramsFinder = (word, words) => {
  let sortedWord = sort(word);
  let totalAnagrams = [];

  for (let n = 0; n < words.length; n++) {
    if (sort(words[n]) === sortedWord && words[n] !== word) {
      totalAnagrams.push(words[n]);
    }
  }
  return totalAnagrams.join(", ");
};

console.log(anagramsFinder(process.argv[2], words));
