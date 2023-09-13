let word = "EPIPHANY";

function compareWord(){
    if(document.getElementById('checkButton')){
        enteredWord = document.getElementById('text').value;
        if(enteredWord.toUpperCase().trim() === word){
            alert("Matched");
        }
        else{
            alert("Not Matched");
        }
    }
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
    const hint = data.hint;    

    document.getElementById('word').textContent = generateUnjumbledWord(word).toUpperCase();
    document.getElementById('hint').textContent = "HINT: " + hint;

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

window.onload = windowsOnLoad();