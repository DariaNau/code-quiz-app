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


  });


  function startQuiz (){
    
}

function showQuestion (){
    
}

function checkAnswer (){

}

function showScore (){
    
}




























// var container = document.getElementById('quiz');
// var questionEl = document.getElementById('question');
// var opt1 = document.getElementById('1');
// var opt2 = document.getElementById('2');
// var opt3 = document.getElementById('3');
// var opt4 = document.getElementById('4');

// var scoreCont = document.getElementById('scoreContainer');

// function loadQuestion (questionIndex) {
// 	var q = questions[questionIndex];
// 	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
// 	opt1.textContent = q.option1;
// 	opt2.textContent = q.option2;
// 	opt3.textContent = q.option3;
// 	opt4.textContent = q.option4;
// };

// function loadNextQuestion () {
// 	var selectedOption = document.querySelector('input[type=radio]:checked');
// 	if(!selectedOption){
// 		alert('Please select your answer!');
// 		return;
// 	}
// 	var answer = selectedOption.value;
// 	if(questions[currentQuestion].answer == answer){
// 		score += 10;
// 	}
// 	selectedOption.checked = false;
// 	currentQuestion++;
// 	if(currentQuestion == totQuestions - 1){
// 		nextButton.textContent = 'Finish';
// 	}
// 	if(currentQuestion == totQuestions){
// 		container.style.display = 'none';
// 		resultCont.style.display = '';
// 		resultCont.textContent = 'Your Score: ' + score;
// 		return;
// 	}
// 	loadQuestion(currentQuestion);
// }

// loadQuestion(currentQuestion);