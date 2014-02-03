$(document).ready(function () {
  var $cards = $(".card.col6");
  var count = 0; //set counter
  $cards.on("click", function () { //2
    count++;
    var $this = $(this);
    var match = [];
    if (count <= 2) {
      $this.addClass("value").addClass("up");
      $this.find(".value").fadeIn(); //show number
      match.push($this.innerText);
      console.log(match.length);
      if (match.length === 2) {
        if (match[0] === match[1]) {
          console.log('confetti');
        }
        else match.length = 0;
      }
    }
  });
});


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