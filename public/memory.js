$(document).ready(function () {
  var $cards = $(".card.col6");
  var count = 0; //set counter
  var score = 0;
  var matches = []; //set match array
  $cards.on("click", function () { //2
    count++;
    var $this = $(this);
    if (count <= 2) {
      $this.addClass("up"); // add classes
      $this.find(".value").fadeIn(); //show number
      matches.push($this.find(".value").text().trim()); //push value to array
      if (count === 2) {
        if (matches[matches.length - 2] === matches[matches.length - 1]) {
          var $up = $cards.filter(".up");
          if (!$up.filter(".disabled")) {
            score += 10;
            $('div').find('.score').text(score);
          }
          $up.addClass("disabled").removeClass("up");
        } else {
          $cards.filter(".up").find(".value").fadeOut();
          $cards.filter(".up").removeClass("up");
        }
        count = 0;
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