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

  var secondsLeft = (questions.length) * 15;

  $(document).ready(function() {

    $('.start').click(function(e){
          e.preventDefault();
          setTimer();
          $('.start').hide();
          $('.quiz').show();
          showQuestion();
      });

      function setTimer() {
          
    var timerInterval = setInterval(function() {
    secondsLeft--;
    $('#timer').html(secondsLeft);
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      scores();
    }}, 1000);
}



//clicking on the start quiz button hides the start page and shows the quiz page while firing the showQuestion() function
      
    function showQuestion(){
    var choices = questions[currentQuestion].choices;
    var question = questions[currentQuestion].title;
    $('.quiz h2').text(question);
    $('.quiz ol').html('');
    for (var i=0; i<parseInt(choices.length); i++){
    var show = questions[currentQuestion].choices[i];
    $('.quiz ol').append(`<li class="button-select" id="${i}">${show}</li>`);
    }

    $("li").click(function() {
    var guessid = $(this).attr('id');
    var guess = questions[currentQuestion].choices[guessid];
    var answer = questions[currentQuestion].answer;

    if (answer === guess) {
    $('cite').fadeIn(100);
    $('cite').html('<h4>Correct!<h4>').fadeOut(600);
    currentQuestion ++;
    showQuestion();

 // highlight timer in css later! 
 
    } else{
    $('cite').fadeIn(100);
    $('cite').html('<h4>Wrong!<h4>').fadeOut(600);
    secondsLeft = secondsLeft-10;
    currentQuestion ++;
    showQuestion();
}
});


// function scores() {
//     timeEl.textContent = " ";
  
//     var imgEl = document.createElement("img");
  
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }



}});
