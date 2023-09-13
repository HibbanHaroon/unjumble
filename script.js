// Initializing with them with default values just in case
let word = "EPIPHANY";
let hint = "HINT: A sudden realization or understanding.";

function checkEnter(event) {
  if (event.key === "Enter") {
      compareWord();
  }
}

function compareWord(){
    if(document.getElementById('checkButton')){
        enteredWord = document.getElementById('text').value;
        if(enteredWord.toUpperCase().trim() === word){
          animation.innerHTML = '<img src="assets/tick.gif" alt="Tick Animation">';
          document.getElementById("text").value = "";
          windowsOnLoad();
        }
        else{
          animation.innerHTML = '<img src="assets/cross.gif" alt="Cross Animation">';
        }
    }

    setTimeout(() => {
      animation.innerHTML = '';
      document.getElementById("text").value = "";
  }, 1800);
}

function generateUnjumbledWord(word){
  let jumbledWord = word;
  for(var i = 0; i < jumbledWord.length; i++){
      let randomIndex = Math.floor(Math.random() * 5);
      let temp = jumbledWord[i];
      jumbledWord = jumbledWord.substring(0, i) + jumbledWord.substring(randomIndex, randomIndex + 1) + jumbledWord.substring(i + 1)
      jumbledWord = jumbledWord.substring(0, randomIndex) + temp + jumbledWord.substring(randomIndex + 1)
  }
  return jumbledWord;
}

function windowsOnLoad(){
// Make a GET request to the API endpoint
fetch('https://unjumble-api.onrender.com/')
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Access the 'word' and 'hint' fields from the JSON response
    word = data.word.toUpperCase();
    hint = data.hint;    

    document.getElementById('word').textContent = generateUnjumbledWord(word).toUpperCase();
    document.getElementById('hint').textContent = "HINT: " + hint;

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

window.addEventListener("load", () => {
  windowsOnLoad();

  // Delay for 4 seconds (4000 milliseconds)
  setTimeout(() => {
    document.querySelector(".loader").classList.add("loader--hidden");
    document.querySelector(".loader").addEventListener("transitionend", () => {
      document.body.removeChild(document.querySelector(".loader"));
    });
  }, 2400);
});
