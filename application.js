	
$(document).ready(function() {

	//Generate a random number between 1 and 100
	var randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);


        $('#submitButton').click(function(){
          var input = $('#guess').val();
          var guess=Math.abs(randomNumber - input);
          

          if ((input == '') || (isNaN(input)) || (input < 1) || (input > 100)) { 
                $('#message').html("Please put numbers 1-100");
              }

          else if (guess == 0){
                $("#message").html("You guessed it right!!  Want to play another game?").effect("pulsate", {times:4}, 2000);;
                $("#hotCircle").animate({backgroundColor: "#FF6347"}, 1000);
                $("#coldCircle").animate({backgroundColor: "#4169E1"}, 1000);
                $("#congrats").show(1000);
              }

          else if (guess < 6 && guess >= 1){
                $("#message").html("Really Hot!");
                $("#hotCircle").animate({backgroundColor: "red"}, 1000);
              }

          else if (guess < 11 && guess >= 6){
                $("#message").html("Hot");
                $("#hotCircle").animate({backgroundColor: "#FF4500"}, 1000);
              }

          else if(guess < 15 && guess >= 11) {
            		$("#message").html("Lukewarm");
                $("#hotCircle").animate({backgroundColor: "#FF6600"}, 1000);
              }
          
          else {
                $("#message").html("Cold");
                $("#coldCircle").animate({backgroundColor: "navy"}, 1000);
              }
         
          
          
              
              $('#prevGuess').append(input).append(', ');
              $("#hotCircle").css({backgroundColor: "orange"});
              $("#coldCircle").css({backgroundColor: "DarkTurquoise"}); 
              $('#guess').val('');
	});


$('#newGame').click(function(){
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
    $("#congrats").hide();
    $('#message').html('');
    $('#prevGuess').html('');
    $('#guess').val('');
    $("#hotCircle").css({backgroundColor: "orange"});
    $("#coldCircle").css({backgroundColor: "DarkTurquoise"}); 
  });


});

	