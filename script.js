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
    // Access the 'name' and 'hint' fields from the JSON response
    word = data.name.toUpperCase();
    const hint = data.hint;

    // Use the 'name' and 'hint' values in your JavaScript code
    console.log('Word:', word);
    console.log('Hint:', hint);
    

    document.getElementById('word').textContent = word;
    document.getElementById('hint').textContent = "HINT: " + hint;

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

window.onload = windowsOnLoad();