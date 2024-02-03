let word = "";
let wordLength = 5;
let noOfWords = 1;
let isSwears = false;
let hint = "Not available right now pookie";

let settingsClicked = false;

function displaySettings() {
  settingsClicked = !settingsClicked;
  var dropdownElement = document.querySelector(".dropdown");
  if (settingsClicked) {
    dropdownElement.classList.add("unhide");
  } else {
    dropdownElement.classList.remove("unhide");
  }
}

function settingsChanged() {
  wordLength = document.getElementById("wordLength").value;
  isSwears = document.getElementById("swears").checked;
  displaySettings();
  windowsOnLoad();
}

function checkEnter(event) {
  if (event.key === "Enter") {
    compareWord();
  }
}

function compareWord() {
  if (document.getElementById("checkButton")) {
    enteredWord = document.getElementById("text").value;
    if (enteredWord.toUpperCase().trim() === word.toUpperCase().trim()) {
      animation.innerHTML = '<img src="assets/tick.gif" alt="Tick Animation">';
      document.getElementById("hint").textContent = "Hint : ";
      document.getElementById("text").value = "";
      windowsOnLoad();
    } else {
      animation.innerHTML =
        '<img src="assets/cross.gif" alt="Cross Animation">';
    }
    console.log(word);
    console.log(enteredWord);
  }

  setTimeout(() => {
    animation.innerHTML = "";
    document.getElementById("text").value = "";
  }, 1800);
}

function generateUnjumbledWord(word) {
  let jumbledWord = word;
  for (var i = 0; i < jumbledWord.length; i++) {
    let randomIndex = Math.floor(Math.random() * 5);
    let temp = jumbledWord[i];
    jumbledWord =
      jumbledWord.substring(0, i) +
      jumbledWord.substring(randomIndex, randomIndex + 1) +
      jumbledWord.substring(i + 1);
    jumbledWord =
      jumbledWord.substring(0, randomIndex) +
      temp +
      jumbledWord.substring(randomIndex + 1);
  }
  return jumbledWord;
}

function removePunctuation(word) {
  const punctuationRegex = /[!#$%&()*+-.:;<=>?@[\]^_`{|}~]/g;

  const cleanedWord = word.replace(punctuationRegex, "");

  return cleanedWord;
}

function windowsOnLoad() {
  fetchWord();
  fetchHint();
}

function fetchWord() {
  fetch(
    `https://unjumble-word-api.onrender.com/?wordLength=${wordLength}&noOfWords=${noOfWords}&isSwears=${isSwears}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      word = data.words[0];

      document.getElementById("word").textContent =
        generateUnjumbledWord(word).toUpperCase();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fetchHint() {
  fetch(`https://unjumble-api.onrender.com/?word=${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      hint = data.hint;
      hint = removePunctuation(hint);

      document.getElementById("hint").textContent = "Hint : " + hint;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.addEventListener("load", () => {
  windowsOnLoad();

  setTimeout(() => {
    document.querySelector(".loader").classList.add("loader--hidden");
    document.querySelector(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(document.querySelector(".loader"));
    });
  }, 2400);
});
