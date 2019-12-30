var currentQuestion = 0;
var score = 0;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
  ];

  $(document).ready(function() {

    $('.start').click(function(e){
          e.preventDefault();
          $('.start').hide();
          $('.quiz').show();
          showQuestion();
      });

      //clicking on the start quiz button hides the start page and shows the quiz page while firing the showQuestion() function
      
      function showQuestion(){
        choices = questions[currentQuestion].choices;
        var question = questions[currentQuestion].title;
        $('.quiz h2').text(question);
        $('.quiz ol').html('');
        for (var i=0; i<parseInt(choices.length); i++){
        var show = questions[currentQuestion].choices[i];
        $('.quiz ol').append(`<li class="button-select" id="${i}">${show}</li>`);
    }

    $('li').click(function() {
    var guess = $(this).attr('id');
    checkAnswer(guess);



function checkAnswer(guess) {

    var question = questions[currentQuestion];
    if (question.correct === guess){
        score++;
    }
    currentQuestion ++;
    showQuestion();
}
});

}});
