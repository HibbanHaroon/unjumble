const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

function readFile(fileName) {
  const fs = require("fs");
  const jsonData = fs.readFileSync(fileName + ".json", "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}

function randomWords(wordLength, noOfWords, isSwears) {
  const data = readFile("words");
  const swears = readFile("swear");

  //finding the maximum length from the words
  var maxLengthWords = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].length > maxLengthWords) {
      maxLengthWords = data[i].length;
    }
  }

  var sortedArrayWords = [];
  //making as many nested arrays as the maximum length
  for (let i = 0; i <= maxLengthWords; i++) {
    sortedArrayWords.push([]);
  }
  //pushing the words from the list at the indexes... where the indexes are the length of the words
  for (let i = 0; i < data.length; i++) {
    //data[i] is a word. So if the word is abreacted... then the length is 9...
    //This word will be placed in the 9th array inside sorted array(2d array) where the index of the array inside the sorted array is the length of the word.
    sortedArrayWords[data[i].length].push(data[i]);
  }
  //The samllest swear word is of wordlength 2
  if (isSwears == true && wordLength > 2) {
    var maxLengthSwears = 0;
    for (let i = 0; i < swears.length; i++) {
      if (swears[i].length > maxLengthSwears) {
        maxLengthSwears = swears[i].length;
      }
    }
    var sortedArraySwears = [];
    for (let i = 0; i <= maxLengthSwears; i++) {
      sortedArraySwears.push([]);
    }
    for (let i = 0; i < swears.length; i++) {
      sortedArraySwears[swears[i].length].push(swears[i]);
    }
    //a random number will decide how many swear words will be in the list of words
    var random = Math.floor(Math.random() * noOfWords);
    var noOfSwears = random;
    noOfWords = noOfWords - random;
  }

  var words = [];
  for (let i = 0; i < noOfWords; i++) {
    var randomIndex = Math.floor(
      Math.random() * sortedArrayWords[wordLength].length
    );
    var word = sortedArrayWords[wordLength][randomIndex];
    words.push(word);
  }
  for (let i = 0; i < noOfSwears; i++) {
    var randomIndex = Math.floor(
      Math.random() * sortedArraySwears[wordLength].length
    );
    var word = sortedArraySwears[wordLength][randomIndex];
    words.push(word);
  }

  return words;
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", async (req, res) => {
  try {
    const wordLength = req.query.wordLength;
    const noOfWords = req.query.noOfWords;
    const isSwears = req.query.isSwears;

    const words = randomWords(wordLength, noOfWords, isSwears);

    const jsonResponse = {
      words,
    };

    res.json(jsonResponse);
  } catch (error) {
    console.error("Error:", error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
