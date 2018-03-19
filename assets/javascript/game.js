
// generating a random number
var randomNumber 
var randomNumber = Math.floor(Math.random( ) * 120) + 19;
$('#number-to-guess').text(randomNumber);
//console.log(randomNumber);

// generating a random number and assigning it to each crystal
var crystals;
var counter = 0;
crystals = Math.floor(Math.random() * 12) + 1;
//console.log(crystals);

var crystalDiv = $("#crystals");


var crystalWhite = $('.whitecrystal');
crystalWhite.addClass("whitecrystal");
crystalDiv.append(crystalWhite)
//console.log(crystalWhite);

//crystals.on("click"),
    crystalWhite.on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    //console.log(crystalValue);

    if (counter === randomNumber) {
        wins++;
    }
    else if (counter >= randomNumber) {
        losses++;
    }

    var html = "<p>your total score: " + counter + "<p>" +
    "<p>wins: " + wins + "<p>" +
    "<p>losses: " + losses + "<p>" 
})


// crystals click function and counter with if/else statement

    