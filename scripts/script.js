
var currentQuestion = 0;
var initialsInput = $("#initials-text");
var initialsArray = [];
var secondsLeft = (questions.length) * 15;
var xInterval = null;
var newInitials = null;

// on-click .start sets the timer and shows the content of the quiz

$(".start").click(function () {
  setTimer();
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
  loadScores();
  saveScores();
  showScores();
  highScoresPage();
});


function loadScores() {
  var allScores = JSON.parse(localStorage.getItem("listOfItems"));
  allScores.concat(initialsArray);
  if (allScores != null) {
    initialsArray = allScores;
  }
  $("#scoreList").append(allScores);
}

function saveScores() {
  var scoreName = initialsInput.val();
  var highScores = scoreName + " : " + secondsLeft;
  initialsArray.push(highScores);
  localStorage.setItem("listOfItems", JSON.stringify(initialsArray));
}

function showScores() {
  for (i = 0; i < initialsArray.length; i++) {
    newInitials = $("<li>").textContent = initialsArray[i];
    var listItems = $("#initials-form");
    listItems.append(newInitials);
    console.log(newInitials);
  }
}

function highScoresPage() {
  $(".highScorePage").show();
  $("#initialsArray").hide();
}

$("#view-highscores").click(function(){
  $(".highScorePage").toggle();
});

$("#go-back").click(function () {
  window.location.reload();
});

$("#clear").click(function (e) {
  e.preventDefault();
  $("#scoreList").css('display', 'none');
  localStorage.clear();
});















