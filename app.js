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
		}
		{
			question: "In season 1, what title does Frank ascend to?",
			choices: ["Speaker of the House", "Vice President", "Majority Whip", "Minority Whip"],
			questionNumber: 2,
			correctAnswer: 2,
		}
		{
			question: "Who is Frank\'s consigliere?",
			choices: ["Peter Russo", "Remi Danton", "Donald Blythe", "Doug Stamper"],
			questionNumber: 3,
			correctAnswer: 3,
		}
		{
			question: "What does Frank always order at his favorite BBQ restaurant?",
			choices: ["Steak", "Pulled Pork", "Ribs", "Beans and cornbread"],
			questionNumber: 4,
			correctAnswer: 2,
		}
	}]

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
	};






















})