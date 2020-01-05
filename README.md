# Unit 04 Web APIs Homework: Code Quiz

## Description

This application was built using Javascript & JQuery, HTML5, CSS3, Bootstrap 4. A timer-based quiz application that stores high scores client-side.

## Installation

Please visit the deployed project at:
https://darianau.github.io/code-quiz-app/ 

## Usage

Use this quiz to test your basic code knowledge. See the requirements below.

![Everyone can code](/assets/code.jpg)

#### Instructions

Play proceeds as follows:

1. The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

2. Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

3. Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (10 seconds are subtracted from time remaining).

4. When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

#### Hints

Store your questions as an array of objects in a separate file, questions.js. The length of the array in questions.js determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.

#### Minimum Requirements

- Functional, deployed application.
- The first view of the application displays a button that starts the quiz.
- Clicking the start button displays a series of questions.
- Once the quiz begins, a timer starts.
- If a question is answered incorrectly, additional time is subtracted from the timer.
- The timer stops when all questions have been answered or the timer reaches 0.
- After the game ends, the user can save their initials and score to a highscores view using local storage.

#### Bonus

- Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.
- Customize the application theme.
- Create multiple quizzes and an option for users to choose between them.
- Add the application to your portfolio.

## License

MIT License

Copyright (c) 2019, Daria Naumova.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
