document.addEventListener("DOMContentLoaded", function() {

    let highestScoreEver = document.getElementById('highestScoreEverBox'); // single quotes missed for the IDs
    // let guessedNumber = parseInt(document.getElementById('guessedNumberBox').value);
    let guess = document.getElementById('guessedNumberBox');
    // letguessedNumber = parseInt(guess);
    let compare = document.getElementById('compareBox');
    let computerNumber = document.getElementById('computerNumberBox');
    let submitBtn = document.getElementById('submitBtnBox');
    let score = document.getElementById('scoreBox');
    let next = document.getElementById('nextBox');

    
    
    // Function to generate a new random number
    function generateRandomNumber() {
        return Math.floor(Math.random() * 20 ) + 1;
    }
    // Generate the first random number
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    // computerNumber.textContent = randomNumber;

    submitBtn.addEventListener('click', function() {

        console.log(randomNumber);

        let guessedNumber = guess.value;
        // let guess = document.getElementById('guessedNumberBox').value;
        //letguessedNumber = parseInt(guess);
        console.log(guessedNumber);

        // Display the random number when submit is clicked
        computerNumber.textContent = randomNumber

        if (guessedNumber == randomNumber ) {
            compare.textContent = "Correct!";
        } else if (guessedNumber > randomNumber ) {
            compare.textContent ="Higher";
        } else {
            compare.textContent ="Lower";
        }
        
    });

    next.addEventListener('click', function() {
        //alert('Button clicked!');
        randomNumber = generateRandomNumber();
        console.log(randomNumber);
        computerNumber.textContent = randomNumber;

        // Clear the user's guess and comparison result
        guess.value ='';
        compare.textContent='Comparison';
        computerNumber.textContent="Computer Number";

    });

});