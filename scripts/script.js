
var currentQuestion = 0;
var initialsInput = $("#initials-text");
var initialsArray = [];
var secondsLeft = (questions.length) * 15;
var xInterval = null;
var newInitials = null;

// on-click .start sets the timer and shows the content of the quiz

$(".start").click(function () {
  setTimer();
  $("#highscoresList").hide();
  $(".start").hide();
  $(".quiz").show();
  showQuestion();
});

// ...and starting the timer function

function setTimer() {
  xInterval = setInterval(function () {
    $("#timer").html(secondsLeft);
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(xInterval);
      timeUp();
    }
  }, 1000);
}

//clicking on the start quiz button hides the start page and shows the quiz page while firing the showQuestion() function

function showQuestion() {
  var choices = questions[currentQuestion].choices;
  var question = questions[currentQuestion].title;
  $(".quiz h2").text(question);
  $(".quiz ul").html("");
  for (var i = 0; i < parseInt(choices.length); i++) {
    var show = questions[currentQuestion].choices[i];
    $(".quiz ul").append(`<li class="button-select" id="${i}">${show}</li>`);
  }

  // comparing user's guests with correct answer with on-click if/else statement. Feedback is appended and styled.

  $("li").click(function () {
    var guessid = $(this).attr("id");
    var guess = questions[currentQuestion].choices[guessid];
    var answer = questions[currentQuestion].answer;

    // checking if user's guess matches correct answer

    if (answer === guess) {
      $(".feedback").fadeIn(200);
      $(".feedback")
        .html("<h4>Correct!<h4>")
        .fadeOut(900);
      $(".feedback").css({
        color: "green",
        "text-align": "center",
        "border-top": "lightgrey",
        "border-top-width": "1px",
        "border-top-style": "solid"
      });
      currentQuestion++;
      showScorePage();

    } else {
      $(".feedback").fadeIn(200);
      $(".feedback")
        .html("<h4>Wrong!<h4>")
        .fadeOut(900);
      $(".feedback").css({
        color: "red",
        "text-align": "center",
        "border-top": "grey",
        "border-top-width": "1px",
        "border-top-style": "solid"
      });

       // for each wrong guess timer and score reduces by 10 seconds

      secondsLeft = secondsLeft -= 10;
      currentQuestion++;
      showScorePage();
    }
  });
}

// after all questions are answered or the time is up running showScore and timeUp functions... ->

function showScorePage() {
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    $("#timer").remove();
    $(".quiz").hide();
    $(".scoreContainer").show();
    $("#scoreNumber").append(secondsLeft);
    clearInterval(xInterval);
  }
}

// -> ...while appending remaining time in seconds to the resulted score of the user

function timeUp() {
  $("#timer").text("expired!");
  $(".quiz").hide();
  $(".scoreContainer").show();
  $("#scoreNumber").append(secondsLeft);
  clearInterval(xInterval);
}

// Three local storage functions start with on-click #submit-initials button



$("#submit-initials").click(function(e) {
  e.preventDefault();
  saveScores();
  showScores();
  loadScores();
  highScoresPage();
});

function saveScores() {

  var scoreName = initialsInput.val();
  var highScores = scoreName + " : " + secondsLeft;
  initialsArray.push(highScores);
  var stringifyListOfItems = JSON.stringify(initialsArray);
  localStorage.setItem("listOfItems", stringifyListOfItems);
}

function showScores() {
  for (i = 0; i < initialsArray.length; i++) {
    newInitials = $("<li>").textContent = initialsArray[i];
    var listItems = $("#initials-form");
    listItems.append(newInitials);
    console.log(newInitials);
  }
}

function loadScores() {
  var savedScores = localStorage.getItem("listOfItems");
  var allScores = JSON.parse(savedScores);
  if (allScores != null) {
    initialsArray = allScores;
  }
console.log(allScores);
  $("#scoreList").append(allScores);


}

// $("#submit-initials").click(function (e) {
//   e.preventDefault();
//   saveScores();
//   showScores();
//   // loadScores();
//   highScoresPage();
// });

// function saveScores() {
//   var scoreName = initialsInput.val();

//   if (scoreName !== "") {
//     var savedScores = JSON.parse(
//       window.localStorage.getItem("savedScores") || []
//     );

//   }

//     var newScore = {
//       score: secondsLeft,
//       scoreName: scoreName
//     };
    
//     initialsArray.push(newScore);
//     window.localStorage.setItem("savedScores", JSON.stringify(savedScores));
  
//   }

// console.log(highScores);


// function showScores() {
//   for (i = 0; i < initialsArray.length; i++) {
//     newInitials = $("<li>").text(initialsArray[i]);
//     var listItems = $("#scoreList");
//     listItems.append(newInitials);
//   }
// }

// // function loadScores() {
// //   var allScores = JSON.parse(localStorage.getItem("savedScores")) || [];
// //   if (allScores != null) {
// //     initialsArray = allScores;
// //   }
// // }

function highScoresPage() {
  
  $("#highscoresList").show();
  // scorepage.append(newInitials);
  $("#initialsArray").hide();
  // $("#highscoresList").append(scorepage.show());
  // console.log(scorepage);

}

$("#go-back").click(function () {
  window.location.reload();
  saveScores();
  loadScores();
});

$("#clear").click(function (e) {
  e.preventDefault();
  $("#scoreList").css('display', 'none');
});


// function saveScores() {
//   var scoreName = initialsInput.val();
// ​
//   if (scoreName !== "") {
//     var savedScores = JSON.parse(
//       window.localStorage.getItem("savedScores") || []
//     );
// ​
//     var newScore = {
//       score: secondsLeft,
//       scoreName: scoreName
//     };
//     initialsArray.push(newScore);
//     window.localStorage.setItem("savedScores", JSON.stringify(savedScores));
//   }
// ​
//   // var highScores = scoreName + " : " + secondsLeft;
//   console.log(highScores);
//   initialsInput.value = "";
//   initialsArray.push(savedScores);
// ​
//   localStorage.setItem("savedScores", JSON.stringify(initialsArray));
// }
// Collapse
















