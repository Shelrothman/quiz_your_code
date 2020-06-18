/** @format */

// set up all the variables here
//container where quiz questions display
var quizContainer = document.getElementsByClassName("quiz");
//container holding the results
var scoreContainer = document.getElementById("score");
//container holding the starting question ans quiz questions
var instructionsContainer = document.getElementById("start");

var buttonContainer = document.getElementById("buttons");
var answerContainer = document.getElementById("answers");

//buttons
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var backButton = document.getElementById("previous");

//slides of individual questions
//var slides = document.querySelectorAll(".slide");
//let currentSlide = 0;

//answer containers
var aContainer = document.getElementById("aChoice");
var bContainer = document.getElementById("bChoice");
var cContainer = document.getElementById("cChoice");
var dContainer = document.getElementById("dChoice");

//set up array to display all the Q/As, using object properties
var questions = [
	{
		question: "Which of the following is not a semantic element?",
		answers: {
			a: "section",
			b: "article",
			c: "div",
			d: "header",
		},
		correctAnswer: "c",
	},
	{
		question:
			"Media queries define how css styles are applied in relation to the characteristics of the _________.",
		answers: {
			a: "window",
			b: "console",
			c: "device viewport",
			d: "server",
		},
		correctAnswer: "c",
	},
	{
		question: "In CSS, when/where must media queries be displayed? ",
		answers: {
			a: "first",
			b: "anywhere",
			c: "in a seperate file",
			d: "last",
		},
		correctAnswer: "d",
	},
	{
		question: "Who invented Javascript?",
		answers: {
			a: "Elon Musk",
			b: "Brendan Eich",
			c: "Bill Gates",
			d: "Steve Jobs",
		},
		correctAnswer: "b",
	},
];

instructionsContainer.textContent =
	"Welcome to the quiz on coding! Once you press start,you will have 75 seconds to complete this multiple choice quiz. If you get a question wrong, time will be deducted. You're final score will be the number of seconds left. Post your initials with your score at the end!";

//provide radio buttons for answers
//answers.push(
//`<label>
// <input type="radio" name="question${questionNumber}" value="${letter}">
//${letter} :
//   ${currentQuestion.answers[letter]}
//   </label>`
// );

//this hides the quiz elements when page first loads
window.addEventListener("load", function (event) {
	submitButton.style.visibility = "hidden";
	nextButton.style.visibility = "hidden";
	backButton.style.visibility = "hidden";
	scoreContainer.style.visibility = "hidden";
	answerContainer.style.visibility = "hidden";
	//quizContainer.style.visibility = "hidden";
});

//set up timer
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#start-button");
//variable to track remaining time
var secondsLeft = 75;

//function to start countdown
function countDown() {
	timerInterval = setInterval(function () {
		secondsLeft--;

		timeEl.textContent = "Time Left: " + secondsLeft;

		//if (secondsLeft ===0) {
		//setup here the end of game and enter highscores etc
		//}
	}, 1000);
}

//function to start our quiz
startButton.addEventListener("click", function (event) {
	if (event.target.matches("button")) {
		countDown();
		//display questions and answers
		instructionsContainer.textContent = questions[0].question;
		aContainer.textContent = questions[0].answers.a;
		bContainer.textContent = questions[0].answers.b;
		cContainer.textContent = questions[0].answers.c;
		dContainer.textContent = questions[0].answers.d;

		//trigger buttons to display and other elements to hide
		//instructionsContainer.style.visibility = "hidden";
		startButton.style.visibility = "hidden";
		nextButton.style.visibility = "visible";
		scoreContainer.style.visibility = "visible";
		answerContainer.style.visibility = "visible";

		aContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
			}
		});
		bContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
			}
		});
		cContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Correct! Click next to move on.";
				//decrease time
			}
		});
		dContainer.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				console.log(event);
				scoreContainer.textContent = "Incorrect! Try again or click next.";
				//decrease time
			}
		});

		//code for next button
		nextButton.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				//display next question
				instructionsContainer.textContent = questions[1].question;
				aContainer.textContent = questions[1].answers.a;
				bContainer.textContent = questions[1].answers.b;
				cContainer.textContent = questions[1].answers.c;
				dContainer.textContent = questions[1].answers.d;

				//find right answer
				aContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
					}
				});
				bContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
					}
				});
				cContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Correct!Click next to move on.";
						//decrease time
					}
				});
				dContainer.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						console.log(event);
						scoreContainer.textContent = "Incorrect! Try again or click next.";
						//decrease time
					}
				});
			}
			nextButton.addEventListener("click", function (event) {
				if (event.target.matches("button")) {
					instructionsContainer.textContent = questions[2].question;
					aContainer.textContent = questions[2].answers.a;
					bContainer.textContent = questions[2].answers.b;
					cContainer.textContent = questions[2].answers.c;
					dContainer.textContent = questions[2].answers.d;
					//find right answer
					aContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
						}
					});
					bContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
						}
					});
					cContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent =
								"Incorrect! Try again or click next.";
							//decrease time
						}
					});
					dContainer.addEventListener("click", function (event) {
						if (event.target.matches("button")) {
							console.log(event);
							scoreContainer.textContent = "Correct!Click next to move on.";
							//decrease time
						}
					});
				}

				nextButton.addEventListener("click", function (event) {
					if (event.target.matches("button")) {
						instructionsContainer.textContent = questions[3].question;
						aContainer.textContent = questions[3].answers.a;
						bContainer.textContent = questions[3].answers.b;
						cContainer.textContent = questions[3].answers.c;
						dContainer.textContent = questions[3].answers.d;
						//next button hides on the last question
						nextButton.style.visibility = "hidden";
						//submit button appears on last question
						submitButton.style.visibility = "visible";

						//find right answer
						aContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
							}
						});
						bContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent = "Correct!Click next to move on.";
								//decrease time
							}
						});
						cContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
							}
						});
						dContainer.addEventListener("click", function (event) {
							if (event.target.matches("button")) {
								console.log(event);
								scoreContainer.textContent =
									"Incorrect! Try again or click next.";
								//decrease time
							}
						});
					}

					submitButton.addEventListener("click", function (event) {
						//remove necessary buttons
						aContainer.style.visibility = "hidden";
						bContainer.style.visibility = "hidden";
						cContainer.style.visibility = "hidden";
						dContainer.style.visibility = "hidden";

						instructionsContainer.textContent =
							"All done! You're final score is: " + timeEl.parseFloat;
					});
				});
			});
		});
	}
});
