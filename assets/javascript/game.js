
// generating a random number

// generating a random number and assigning it to each crystal
var randomNumber
var crystals;
var counter = 0;
var wins = 0;
var losses = 0;
//var previous = 0;

//var resetAndStart = function () {

  //  $(".crystals").empty();

var randomNumber = Math.floor(Math.random( ) * 120) + 19;
$('#number-to-guess').text(randomNumber);
console.log(randomNumber);


//create a for loop to connect the crystals to their own random number
var crystals = [ 0, 1, 2, 3]
for(var i=0; i < 4; i++) {
var crystals = Math.floor(Math.random() * 12) + 1;
console.log(crystals);

var crystals = $("#crystals");
    crystals.attr({
        "class": 'crystal',
        "data-random": crystals
    });

    crystals.text(crystals);
$(".crystals").append(crystals);

}

$("#counter").text(counter);

//}
// on click funtion

$(document).on('click', ".crystals", function () {
    var num = parseInt($(this).attr('data-random'));
    counter += num;


    $("#counter").text(counter);

    console.log(crystals);

    if(counter > randomNumber){

        lost++;

        $("#losses").text(losses);

        counter = 0;

      //  resetAndStart();
        }

    else if (counter === randomNumber){

        win++;

        $("#wins").text(wins);

        counter = 0;

      //  resetAndStart();
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