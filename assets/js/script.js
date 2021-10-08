const quizContainer = $(".quiz-container")
const questionContainer = $(".question-container")
const quizQuestions = $(".quiz-questions")
const quizOptions = $(".quiz-options")
const controls = $(".controls")
const timerContainer = $(".timer-container")
const countdown = $(".countdown")
const scoreContainer = $(".score-container")
const highScores = $("#highscores")
const clearHighScores = $("#clearhighscores")
const currentScore = $("#current-score")
const saveScore = $("#save-score")
const startButton = $("#start-button")

// Questions and Answer Arrays

let questions = [
    {
        question: "question 1",
        choiceA: "Correct",
        choiceB: "B",
        choiceC: "C",
        choiceD: "D",
        correct: "A",
    },
    {
      question: "question 2",
      choiceA: "A",
      choiceB: "Correct",
      choiceC: "C",
      choiceD: "D",
      correct: "B",
    },
    {
      question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "Correct",
        choiceD: "D",
        correct: "C",
    },
    {
      question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "Correct",
        choiceD: "D",
        correct: "C",
    },
    {
      question: "question 3",
        choiceA: "A",
        choiceB: "B",
        choiceC: "Correct",
        choiceD: "D",
        correct: "C",
    }
  ]

// variables for the questions

const lastQuestionIndex = questions.length - 1
let currentQuestionIndex = 0
var quizTime = 60
let timer
let score = 0



var isCorrect = function answerIsCorrect(){
  $(".btn")
}

// for wrong answer function

var isWrong = function answerIsWrong(){
  
}

// Rendering the questions

function renderQuestion() {
  let q = questions[currentQuestionIndex]
  quizQuestions.text(q.question)
  $("#answer1").text(q.choiceA)
  $("#answer2").text(q.choiceB)
  $("#answer3").text(q.choiceC)
  $("#answer4").text(q.choiceD)
}

// Start Quiz 

function startQuiz(event) {
  $(startButton).css("display", "none")
  renderQuestion ()
  $(questionContainer).css("display", "block")
  progressRender()
  startTimer()
  timer = setInterval(startTimer, 1000)
  
}

// for correct answer function



// checking for correct answer

function checkAnswer(answer){
  if( answer == questions[currentQuestionIndex].correct) {
      score++
      isCorrect
      
  }else{
      isWrong
      quizTime -= 3
  }
  count = 0;
  if(currentQuestionIndex < lastQuestionIndex) {
      currentQuestionIndex++
      renderQuestion()
  }else{
      // end the quiz and show the score
      clearInterval(timer)
      scoreRender()
      $('.countdown').html("<h5>Game Over<h5>")
      quizQuestions.text("Hope you had fun!")
      quizOptions.text("Thank you for playing!")
  }
}

// Progress rendered - moving to the next question 

function progressRender() {
  for(let qIndex=0; qIndex <= lastQuestionIndex; qIndex++) {
  }
}

// Timer 

function startTimer() {
      // Display 'counter' wherever you want to display it.
    if (quizTime <= 0) {
     $('.countdown').html("<h5>Game Over<h5>") 
      return
    }  else if (quizTime< 10) {
              $(".countdown").text(quizTime)
              $(".timer-container").css("background-color", "#8B0000")
              quizTime --
            } else {
              $(".countdown").text(quizTime)
              quizTime --
            }
  }

 


// Score Rendering


function scoreRender(){
  currentScore.css("display", "block")
  currentScore.text(score + " / 5")
  saveScore.css("display", "block")
}



// Click listener for start button 

$("#start-button").click(startQuiz)


