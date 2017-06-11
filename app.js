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

	var numberRight = 0;
	var numberWrong = 0;
	var currentQuestion =0;
	var timer;
	var startTimer = 60;
	var missed = 5;

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

	// start game with click

	DOM.gameStart.on('click', gameStart);

	
	// end game with click
	DOM.endGame.on('click', function() {
		DOM.transition.hide();
		DOM.endMessage.html('You finished! Here\'s how you did: ');
		showGrade();
		DOM.endGame.hide();
		DOM.results.show();
		DOM.newGame.show();
	})

	// start new game
	DOM.newGame.on('click', function() {
		numberRight = 0;
		numberWrong = 0;
		numberMissed = 5;
		currentQuestion = 0;
		start = 60;
		finalGrade = 0;
		DOM.results.hide();
		DOM.gameStart.show();
		DOM.nextQuestionButton.show();
	});

	function gameStart () {
		DOM.question.html(questions[currentQuestion].question);
		DOM.answer1.html(questions[currentQuestion].choices[0]);
		DOM.answer2.html(questions[currentQuestion].choices[0]);
		DOM.answer3.html(questions[currentQuestion].choices[0]);
		DOM.answer4.html(questions[currentQuestion].choices[0]);
		DOM.answer5.html(questions[currentQuestion].choices[0]);
		DOM.timeLeft.html(start);
		timer = setInterval(liveTimer, 1000);
		DOM.gameStart.hide();
	}

	// check answer

	$('li').on('click', function () {
		var answer = $(this).html();

		if (answer === questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]) {
			nextQuestion(answer);
			numberRight++;
			numberMissed--;
		} else if (answer !== questions[currentQuestion].choices[questions[currentQuestion].correctAnswer])
			nextQuestion(answer);
			numberWrong++
			numberMissed--;
	});

	// go to next question

	function nextQuestion (userAnswer) {
		DOM.controller.hide();

		if (userAnswer === questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]) {
			clearInterval(timer);
			console.log(correct);
			DOM.transition.show();
		}

		if (userAnswer !== questions[currentQuestion].choices[questions[currentQuestion].correctAnswer]) {
			clearInterval(timer);
			console.log(incorrect);
		}

		if (currentQuestion === 4) {
			clearInterval(timer);
			DOM.nextQuestionButton.hide();
			DOM.endGame.show();
		}
	}

	// show grade
	function showGrade () {
		finalGrade = Math.floor((numberRight / 5) * 100);
		DOM.numberRight.html('${numberRight}');
		DOM.numberWrong.html('${numberWrong}');
		DOM.numberMissed.html('${numberMissed}');
		DOM.finalGrade.html('${finalGrade}');

		if (finalGrade === 100) {
			alert('Well, well, well. Seems like you have what it takes to join my administration.');
		}

		else if (finalGrade !== 100) {
			DOM.loserMessage('You disgust me.');
		}
	}

	function liveTimer () {
		start -= 1;
		$('timeLeft').html(gameStart);
		timesUp ();
	}

	function timesUp () {
		if (gameStart === 0) {
			clearInterval(timer);
			DOM.controller.hide();
			DOM.transition.hide();
			DOM.endMessage.html('Time is up. Here\'s your grade: ');
			showGrade()
			DOM.results.show();
			DOM.newGame.show();
		}
	}

});


























})