
var currentQuestion = 0;
var initialsInput = $("#initials-text");
var initialsArray = [];
var secondsLeft = (questions.length) * 15;

// on-click .start sets the timer and shows the content of  the quiz

$(".start").click(function() {
  setTimer();
  $(".highscoresList").hide();
  $(".start").hide();
  $(".quiz").show();
  showQuestion();
});

// starting the timer function

function setTimer() {
  var xInterval = setInterval(function() {
    $("#timer").html(secondsLeft);
    secondsLeft--;
    if (secondsLeft < 1) {
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
  $(".quiz ol").html("");
  for (var i = 0; i < parseInt(choices.length); i++) {
    var show = questions[currentQuestion].choices[i];
    $(".quiz ol").append(`<li class="button-select" id="${i}">${show}</li>`);
  }

// comparing user's guests with correct answer with on-click if/else statement. Feedback is appended and styled.

  $("li").click(function() {
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
        color: "lightgrey",
        "text-align": "center",
        "border-top": "lightgrey",
        "border-top-width": "1px",
        "border-top-style": "solid"
      });
      currentQuestion++;
      showScore();
    } else {
      $(".feedback").fadeIn(200);
      $(".feedback")
        .html("<h4>Wrong!<h4>")
        .fadeOut(900);
      $(".feedback").css({
        color: "grey",
        "text-align": "center",
        "border-top": "grey",
        "border-top-width": "1px",
        "border-top-style": "solid"
      });
      timePenalty();
      currentQuestion++;
      showScore();
    }
  });
}

// for each wrong guess timer reduces by 10 seconds

function timePenalty() {
  secondsLeft = secondsLeft -= 10;
  score = secondsLeft;
}

// after all questions are answered or the time is up running showScore and timeUp functions... ->


function showScore() {
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    $("#timer").remove();
    $(".quiz").hide();
    $(".scoreContainer").show();
    $("#scoreNumber").append(secondsLeft);
  }
}

// -> ...while appending remaining time in seconds to the resulted score of the user

function timeUp() {
  $("#timer").text("expired!");
  $(".quiz").hide();
  $(".scoreContainer").show();
  var scoreNumber = $("#scoreNumber");
  scoreNumber.append(secondsLeft);
}

//Local storage functions start with on-click #submit-initials button

$("#submit-initials").click(function() {
  initialsInput.value = "";
  saveScores();
  showScores();
  loadScores();
});

function saveScores() {

  var scoreName = initialsInput.val();
  var highScores = scoreName + " : " + score;
  initialsArray.push(highScores);
  var stringifyListOfItems = JSON.stringify(initialsArray);
  localStorage.setItem("listOfItems", stringifyListOfItems);
}

function showScores() {
  for (i = 0; i < initialsArray.length; i++) {
    var newInitials = $("<li>").text(initialsArray[i]);
    var listItems = $("#initials-form");
    listItems.append(newInitials);
  }
}

function loadScores() {
  var savedScores = localStorage.getItem("listOfItems");
  var allScores = JSON.parse(savedScores);
  if (allScores != null) {
    initialsArray = allScores;
  }
}

      