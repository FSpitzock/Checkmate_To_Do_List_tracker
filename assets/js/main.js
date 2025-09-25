const userInput = document.getElementById('userInput');
const displayButton = document.getElementById('displayButton');
const outputDisplay = document.getElementById('outputDisplay');

// Add an event listener to the button
displayButton.addEventListener('click', function() {
    const inputValue = userInput.value;  // Get the value from the input field
    outputDisplay.textContent = "Your new list is called: " + inputValue; // Display input Value
    userInput.value = ''; //Clears the input area
});