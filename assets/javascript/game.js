
var crystal = {
  white:
  {
    name: "White",
    value: 0
  },
  purple:
  {
    name: "Purple",
    value: 0
  },
  blue:
  {
    name: "Blue",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  }
};

// Scores
var currentScore = 0;
var numberGuess = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

// Random Number
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game
var startGame = function() {

  currentScore = 0;
  numberGuess = getRandom(19, 120);

  // Crystal Values
  crystal.white.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);

  // HTML 
  $("#score").text(currentScore);
  $("#number-to-guess").text(numberGuess);

  
  console.log("numer-to-guess: " + numberGuess);
  console.log("White: " + crystal.white.value + " | Purple: " + crystal.purple.value + " | Blue: " + crystal.blue.value +
    " | Red: " + crystal.red.value);
 
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > numberGuess) {
    alert("You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#Losses").text(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === numberGuess) {
    alert("You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#Wins").text(winCount);

    // Restart the game
    startGame();
  }

};

// click response
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // score in HTML
  $("#score").text(currentScore);

  checkWin();

  console.log("Your total score is: " + currentScore);
};


// Start on click function
startGame();

$("#white").click(function() {
  addValues(crystal.white);
});

$("#purple").click(function() {
  addValues(crystal.purple);
});

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});
