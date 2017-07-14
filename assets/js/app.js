$(document).ready(function() {

	//set of questions
	var questions = [{

			question: "What state did Frank represent as a congressman?",
			choices: ["Texas", "South Carolina", "Virginia", "Georgia"],
			questionNumber: 0,
			correctAnswer: 1,
		},
		{
			question: "What's Claire\'s maiden name?",
			choices: ["Hale", "Harvey", "Roosevelt", "Grant"],
			questionNumber: 1,
			correctAnswer: 0,
		},
		{
			question: "In season 1, what title does Frank ascend to?",
			choices: ["Speaker of the House", "Vice President", "Majority Whip", "Minority Whip"],
			questionNumber: 2,
			correctAnswer: 2,
		},
		{
			question: "Who is Frank\'s consigliere?",
			choices: ["Peter Russo", "Remi Danton", "Donald Blythe", "Doug Stamper"],
			questionNumber: 3,
			correctAnswer: 3,
		},
		{
			question: "What does Frank always order at his favorite BBQ restaurant?",
			choices: ["Steak", "Pulled Pork", "Ribs", "Beans and cornbread"],
			questionNumber: 4,
			correctAnswer: 2,
		}
	]

	//# of correct questions, current question holder, timer

	var correct = 0;
	var current = 0;
  var missed = 0;
	var timerId;

	// submit & move to next question

	var domManipulator = {
		question: $('#question'),
		answers: $('#answers'),
		answer1: $('#answer1'),
		answer2: $('#answer2'),
		answer3: $('#answer3'),
		answer4: $('#answer4'),
		answer5: $('#answer5'),
		timeLeft: $('#timeLeft'),
		lose: $('.lose'),
		msg: $('.msg'),
    numberRight: $('#numberRight'),
    numberWrong: $('#numberWrong'),
    numberMissed: $('#numberMissed'),
    results: $('.results'),
    transition: $('.transition'),
    controller: $('.controller'),
    nextQuestionButton: $('#nextQuestionButton'),
    gameEnd: $('#gameEnd'),
    gameStart: $('#gameStart'),
    newGame: $('#newGame'),
    endMessage: $('#endMessage'),
    finalGrade: $('#finalGrade'),
    winnerMessage: $('#winnerMessage')

	};
  var DOM = domManipulator;
	// start game with click

	DOM.gameStart.on('click', gameStart);
	DOM.newGame.on('click', gameStart);
  DOM.nextQuestionButton.on('click', function () {
    missed++;
    nextQuestion();
  });
  $('li').on('click', validateAnswer);

	function gameStart () {
    correct = 0;
	  current = 0;
    missed = 0;
		displayQuestion();
	}

	// show grade
	function showGrade () {
		// finalGrade = Math.floor((numberRight / 5) * 100);
		// DOM.numberRight.html('${numberRight}');
		// DOM.numberWrong.html('${numberWrong}');
		// DOM.numberMissed.html('${numberMissed}');
		// DOM.finalGrade.html('${finalGrade}');

		// if (finalGrade === 100) {
		// 	alert('Well, well, well. Seems like you have what it takes to join my administration.');
		// }

		// else if (finalGrade !== 100) {
		// 	DOM.loserMessage('You disgust me.');
		// }
	}

  function displayQuestion () {
    var question = questions[current];
    clearInterval(timerId);

    if (question) {
      DOM.question.html(question.question);
      DOM.answer1.html(question.choices[0]);
      DOM.answer2.html(question.choices[1]);
      DOM.answer3.html(question.choices[2]);
      DOM.answer4.html(question.choices[3]);
      DOM.answer5.html(question.choices[4]);
      startTimer();
    } else {
      endGame();
    }
  }

  function startTimer () {
    var time = 20;

    $('#timeLeft').html(time);
    timerId = setInterval(function () {
      time--;
      $('#timeLeft').html(time);
      if (time === 0) {
        missed++;
        nextQuestion();
      }
    }, 1000);
  }

  function validateAnswer () {
    var submitted = $(this).html();
    var question = questions[current];
    var answer = question.choices[question.correctAnswer];
    if (submitted === answer) {
      correct++;
    }
    nextQuestion();
  }

  function nextQuestion () {
    current++;
    displayQuestion();
  }

  function endGame () {
    var wrong = questions.length - correct - missed;
    var percent = (correct / questions.length * 100) + '%';
    DOM.numberRight.text(correct);
    DOM.numberWrong.text(wrong);
    DOM.numberMissed.text(missed);
  }

  // Create Questions
  // Globals
      //correct = 0;current =0;timerId;
  // Method: displayQuestion
    //-> Start a Timer 60
    //-> Display {current}
    //-> if not questions[current] -> EndGame
  // Method: startTimer -> if it gets to 0 nextQuestion
  // Method: nextQuestion
      //-> increment global{current: Number}
      //-> displayQuestion()
  // Method: validateAnswer
      // -> increment global{current: Number}
      // -> if Correct increment global{correct: number}
      // -> stopTimer
  // Method: endGame -> Display score
});
