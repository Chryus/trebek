$(document).ready(function () {
var $cards = $(".card.col6");
var count = 0; //set counter
var user_picks = []; //set match array
  $cards.on("click", function () { //2
    count++;
    var $this = $(this);
    if (count <= 2) {
      $this.addClass("value").addClass("up"); // add classes
      $this.find(".value").fadeIn(); //show number
      user_picks.push($this.find(".value").text().trim()); //push value to array
      console.log(user_picks.length);
      if (user_picks.length === 2 && user_picks[0] === user_picks[1]) {
        console.log('confetti');
        if ($cards.hasClass("up")) {
          $this.addClass("disabled");
        //user_picks.length = 0;
        }
      } 
    }
  });
});

// if($(this).find(".question").is(":visible"))

        // $this.find(".value").fadeOut();    //hide value
    //     // 3 change others state to disabled
    //     $cards.not(".chosen").addClass("disabled");
    //   } else if($this.find(".question").is(":visible")) {
    //     // 4 chosen sub-state
    //     $this.find(".question").fadeOut(); //hide question
    //     $this.find(".answer").fadeIn();    //show answer
    //   } else {
    //     // 5 change to state played
    //     $this.addClass("played").removeClass("chosen");
    //     $this.find(".answer").fadeOut();

    //     //change disabled cards to normal
    //     $cards.not(".played").removeClass("disabled");
    //   }