var currentQuestion = 0;
var score = 0;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Which of the following jQuery method sets attributes of an element?",
        choices: ["attr(name, value)", " setAttr(name, value)", "setAttributes(name, value)", "none of the above"],
        answer: "attr(name, value)",
    },
    {
        title: "Which of the following bootstrap style is to be used if you want to create a .navbar that scrolls with the page?.",
        choices: [".navbar-static-top", " .navbar-fixed", ".navbar-fixed-top", "none of the above"],
        answer: ".navbar-static-top",
    },
    {
        title: "Which of the following function of Array object returns a string representing the array and its elements?",
        choices: ["toSource()", "sort()", "splice()", "toString()"],
        answer: "toString()",
    },
];

var secondsLeft = questions.length * 15;

// start button on-click sets the timer and shows the content of quiz

$(".start").click(function () {
    setTimer();
    $(".highscoresList").hide();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
});

// starting the timer as soon as the start button is clicked

function setTimer() {
    var xInterval = setInterval(function () {
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

    $("li").click(function () {
        var guessid = $(this).attr('id');
        var guess = questions[currentQuestion].choices[guessid];
        var answer = questions[currentQuestion].answer;

        if (answer === guess) {
            $(".feedback").fadeIn(200);
            $(".feedback")
                .html("<h4>Correct!<h4>").fadeOut(900);
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
                .html("<h4>Wrong!<h4>").fadeOut(900);
            $(".feedback").css({
                color: "grey",
                "text-align": "center",
                "border-top": "grey",
                "border-top-width": "1px",
                "border-top-style": "solid"
            });
            secondsLeft = secondsLeft - 10;
            currentQuestion++;
            showScore();

        }
    });
}

// after all questions are answered or the time is up running showScore and timeUp functions 
// while appending remaining time in seconds to the resulted score of the user

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

function timeUp() {
    $("#timer").text('expired!');
    $(".quiz").hide();
    $(".scoreContainer").show();
    var scoreNumber = $("#scoreNumber")
    scoreNumber.append(secondsLeft);
}






var formInput = $("#initials-text");
var initialsForm = $("#initials-form");
var initialsInputs = [];
var highScores = secondsLeft;

init();

function renderScores() {
  // Clear element
  initialsForm.innerHTML = "";
  
  // Render a new li for each score
  for (var i = 0; i < initialsInputs.length; i++) {
    var initialsInputs = initialsInputs[i];

    var li = document.createElement("li");
    li.textContent = initInputs;
    li.attr("data-index", i);
  }
}

function init() {
    // Get stored scores from localStorage
    var storedScoresString = localStorage.getItem("initialsInputs");
    // Parsing the JSON string to an object
    var storedScores = JSON.parse(storedScoresString);
  
    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
        initialsInputs = storedScores;
    }
    // Render to the DOM
    renderScores();
  }
  
  function storeScores() {
    // Stringify and set "scores" key in localStorage to scores array
    var scoreString = JSON.stringify(initialsInputs);
    localStorage.setItem("initialsInputs", scoreString);
  }

  // When form is submitted...
  initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var initialsText = formInput.value.trim();
  
    // Return from function early if submitted Text is blank
    if (initialsText === "") {
      return;
    }
  
    // Add new Text to score array, clear the input
    initialsInputs.push(initialsText);
    formInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });
  
  // When a element inside of the todoList is clicked...
  todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
  























// After initials are eneterd in .scoreContainer show .highscoresList when submit button is clicked

// $("#submit-initials").click(function() {
//     $(".scoreContainer").append(highscoresList);

// });












      






      
    