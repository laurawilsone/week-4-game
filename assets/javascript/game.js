
// generating a random number


var randomNumber

var randomNumber = Math.floor(Math.random( ) * 120) + 19;
$('#number-to-guess').text(randomNumber);
console.log(randomNumber);

// generating a random number and assigning it to each crystal
var crystals;
var counter = 0;
var wins = 0;
var losses = 0;
//var previous = 0;


//create a for loop to connect the crystals to their own random number
var crystals = {red:{color:"red", value: 0}}
for(var i=0; i < 4; i++) {
crystals = Math.floor(Math.random() * 12) + 1;
console.log(crystals);

var crystals = $("#crystals");
    crystals.attr({
        "class": 'crystal',
        "data-random": crystals
    });

    crystals.html(crystals);
$(".crystals").append(crystals);

}

$("#counter").html("Your Total Score: ", counter);

// on click funtion

$(document).on('click', ".crystals", function () {
    var num = parseInt($(this).attr('data-random'));
    counter += num;


    $("#counter").html("Your Total Score: ", counter);

    console.log(crystals);

    if(counter > randomNumber){

        lost++;

        $("#losses").html("You lost: ", lost);

        counter = 0;

        resetAndRestart();
        }
    else if (counter === randomNumber){

        win++;

        $("#wins").html("You win: ", win);

        counter = 0;

        resetAndRestart();
    }
});






























//crystals.on("click"),
   // crystalWhite.on("click", ".crystal-image", function() {
   // var crystalValue = ($(this).attr("data-crystalvalue"));
 //   crystalValue = parseInt(crystalValue);
  //  counter += crystalValue;
    //console.log(crystalValue);

 //   if (counter === randomNumber) {
   //     wins++;
  //  }
  //  else if (counter >= randomNumber) {
  //      losses++;
  //  }

  //  var html = "<p>your total score: " + counter + "<p>" +
  //  "<p>wins: " + wins + "<p>" +
  //  "<p>losses: " + losses + "<p>" 
//})


// crystals click function and counter with if/else statement