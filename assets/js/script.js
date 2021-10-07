let quizContainer = $(".quiz-container")
let questionContainer = $(".question-container")
let quizQuestions = $(".quiz-questions")
let quizOptions = $(".quiz-options")
let controls = $(".controls")
let timerContainer = $(".timer-container")
let countdown = $(".countdown")
let scoreContainer = $(".score-container")
let highScores = $("#highscores")
let clearHighScores = $("#clearhighscores")

let questions = [
    {
        question: "?????",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A"
    },
    {
      question: "?????",
      choiceA: "A",
      choiceB: "B",
      choiceC: "C",
      choiceD: "D",
      correct: "A"
    },
    {
      question: "?????",
        choiceA: "A",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A"
    }
  ]

let lastQuestionIndex = questions.length - 1
var currentQuestionIndex = 0

// Rendering the questions

function renderQuestion() {
  let q = questions[currentQuestionIndex]
  quizQuestions.text(q.question)
  $("#answer1").text(q.choiceA)
  $("#answer2").text(q.choiceB)
  $("#answer3").text(q.choiceC)
  $("#answer4").text(q.choiceD)
}

function progressRender() {
  for(let qIndex=0; qIndex <= lastQuestionIndex; qIndex++) {

  }
}

// if I want to add a progress bar
function answerIsCorrect(){

}

// if I want to add a progress bar
function answerIsWrong(){

}



// 11:40 
function startTimer() {
var counter = 60;
var interval = setInterval(function(event) {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval)
      	$('.countdown').html("<h5>Game Over<h5>") 
        return
    }  else if (counter < 10) {
      $(".countdown").text(counter)
      $(".timer-container").css("background-color", "#8B0000")
    } else {
      $(".countdown").text(counter)
    }
}, 1000)
}

let score = 0

function checkAnswer(answer){
   if(questions[currentQuestionIndex].correct == answer){
    score++;
  } else {
    
  }
  if(currentQuestionIndex < lastQuestionIndex) {
    count = 0
    currentQuestionIndex++
    questionRender()
  } else {
    clearInterval(timer)
  }
}

function startQuiz(event) {
  startTimer()
  $("#start-button").css("display", "none")
  renderQuestion()
  progressRender()
  checkAnswer()
  
}

$("#start-button").click(startQuiz)

$("#answer1").click(checkAnswer)
$("#answer2").click(checkAnswer)
$("#answer3").click(checkAnswer)
$("#answer4").click(checkAnswer)


