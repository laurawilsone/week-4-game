// generating a random number

// generating a random number and assigning it to each crystal

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
var crystals = {
    red:
    {
      red: "Red",
      value: 0
    },
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
    }
  };
for(var i=0; i < 0; i++) {
var whitecrystals = Math.floor(Math.random() * 12) + 1;
console.log(whitecrystals);

var whitecrystals = $("#crystals");
    crystals.attr({
        "class": 'whitecrystal',
        "data-random": whitecrystals
    });

   // crystals.text(crystals);
$(".crystals").append(whitecrystals);

}

//}
// on click funtion

$(".whitecrystals").on("click", function() {
    crystals = crystals + (whitecrystals);
    $("#crystalsbox").text(whitecrystals);
    if (whitecrystals === randomNumber) {
      wins++;
    } else if (whitecrystals > randomNumber) {
      lost++;
    }
    console.log(whitecrystals);
  });

//$(document).on('click', ".whitecrystals", function () {
  //  var num = parseInt($(this).attr('data-random'));
   // num = parseInt(num);
   // counter += num;

  //  $("#counter").text(counter);
  //  console.log(whitecrystals);
//});

//red crystals

for(var i=0; i < 0; i++) {
    var redcrystals = Math.floor(Math.random() * 12) + 1;
    console.log(redcrystals);
    
    var redcrystals = $("#crystalsbox");
        crystals.attr({
            "class": 'redcrystal',
            "data-random": redcrystals
        });
    
        //crystals.text(redcrystals);
    $(".redcrystals").append(redcrystals);
    
    }
    
    
    
    
    // on click funtion

    $(".redcrystals").on("click", function() {
        crystals = crystals + (redcrystals);
        $("#crystalsbox").text(redcrystals);
        if (redcrystals === randomNumber) {
          wins++;
        } else if (redcrystals > randomNumber) {
          lost++;
        }
        console.log(redcrystals);
      });
    
  // $(document).on('click', ".redcrystals", function () {
    //   var num = parseInt($(this).attr('data-random'));
     //  num = parseInt(num);
     //  counter += num;

    //   $("#counter").text(counter);
    //   console.log(redcrystals);
//   });

       // purple crystal
       for(var i=0; i < 0; i++) {
        var purplecrystals = Math.floor(Math.random() * 12) + 1;
        console.log(purplecrystals);
        
        var purplecrystals = $("#crystals");
            crystals.attr({
                "class": 'purplecrystal',
                "data-random": purplecrystals
            });
        
           // crystals.text(crystals);
        $(".purplecrystals").append(purplecrystals);
        
        }
        
      
        
      
    // on click funtion
    
    $(".purplecrystals").on("click", function() {
        crystals = crystals + (purplecrystals);
        $("#crystalsbox").text(purplecrystals);
        if (purplecrystals === randomNumber) {
          wins++;
        } else if (purplecrystals > randomNumber) {
          lost++;
        }
        console.log(purplecrystals);
      });
        
   // $(document).on('click', ".purplecrystals", function (){
         //   var num = parseInt($(this).attr('data-random'));
          //  num = parseInt(num);
          //  counter += num;

  //  $("#counter").text(counter);

   // console.log(purplecrystals);
     //   });

    // blue crystals
    for(var i=0; i < 0; i++) {
        var bluecrystals = Math.floor(Math.random() * 12) + 1;
        console.log(bluecrystals);
        
        var bluecrystals = $("#crystals");
            crystals.attr({
                "class": 'bluecrystal',
                "data-random": bluecrystals
            });
        
           // crystals.text(crystals);
        $(".crystals").append(bluecrystals);
        
        }
        
        
      
        // on click funtion

        
    $(".bluecrystals").on("click", function() {
        crystals = crystals + (bluecrystals);
        $("#crystalsbox").text(bluecrystals);
        if (bluecrystals === randomNumber) {
          wins++;
        } else if (bluecrystals > randomNumber) {
          lost++;
        }
        console.log(bluecrystals);
      });
        
      //  $(document).on('click', ".bluecrystals", function () {
         //   var num = parseInt($(this).attr('data-random'));
          //  num = parseInt(num);
           // counter += num;

       // $("#counter").text(counter)
      //  });

        

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
























