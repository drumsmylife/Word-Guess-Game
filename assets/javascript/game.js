//creating an array of words
var words = ["hockey", "fish", "drummer", "spaghetti", "monopoly", "airplane", "revolver", "fireball"];
// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var currentWord = words[randNum];
var correctLetter = [];
var lettersGuessed = [];
var underScore = [];

var guessesLeft = 10;

// defines the function formatArray
function formatArray(ary) {
    //created a variable for the return value
    var result= "" 
    for(var i = 0; i < ary.length; i++) {
       //append the ary element + space to the contents of the result string
        result = result + ary[i] + " "
    }
    return result;
}



//MAIN CONTENT
//create underscores based on length of word
function generateUnderscore() {
    for(var i = 0; i < currentWord.length; i++) {
        underScore.push ("_")
    }
    return underScore;
}

console.log(generateUnderscore());

// get users guess
document.addEventListener("keypress", (event) => {
    console.log(event);
    
    var keyPress = String.fromCharCode(event.keyCode);
    console.log(keyPress);

//if users guess is right 
    if(currentWord.indexOf(keyPress) > -1){
        //replace underscore with correct letter
        underScore[currentWord.indexOf(keyPress)] = keyPress;
        //checks to see if user word matches guess
        if(underScore === currentWord) {
            alert("you win")
        } else {
           guessesLeft = guessesLeft - 1;
        }
    } else {
        lettersGuessed.push(keyPress);
        guessesLeft = guessesLeft - 1;
    } 
    if (guessesLeft === 0) {
        alert("You Lose");
    }
    //update page
    document.getElementById("guesses").innerHTML = guessesLeft;
    document.getElementById("wrong_guesses").innerHTML = lettersGuessed;
    document.getElementById("right_guesses").innerHTML = formatArray(underScore);
});


