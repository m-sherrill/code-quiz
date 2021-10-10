// Page Variables

var quizContainer = $(".quiz-container")
var questionContainer = $(".question-container")
var quizQuestions = $(".quiz-questions")
var quizOptions = $(".quiz-options")
var timerContainer = $(".timer-container")
var countdown = $(".countdown")
var currentScore = $("#current-score")
var saveScore = $("#save-score")
var startButton = $("#start-button")
var startInfo = $("#starting-info")
var progress = $("#progress")
var prog = $(".prog")
var inputContainer = $("#input-container")

// Questions and Answer Arrays

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "C",
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correct: "C",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct: "D",
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correct: "C",
  },
  {
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choiceA: "Javascript",
    choiceB: "terminal / bash",
    choiceC: "for loops",
    choiceD: "console log",
    correct: "D",
  }
]

// variables for the questions

var lastQuestionIndex = questions.length - 1
let currentQuestionIndex = 0
var quizTime = 60
let timer
var score = 0

// Rendering the questions

function renderQuestion() {
  let q = questions[currentQuestionIndex]
  quizQuestions.text(q.question)
  $("#answer1").text(q.choiceA)
  $("#answer2").text(q.choiceB)
  $("#answer3").text(q.choiceC)
  $("#answer4").text(q.choiceD)
}

// Start Quiz -- triggered when start button is clicked

function startQuiz(event) {
  $(startInfo).css("display", "none")
  $(startButton).css("display", "none")
  renderQuestion()
  $(questionContainer).css("display", "block")
  progressRender()
  startTimer()
  timer = setInterval(startTimer, 1000)

}

// replay quiz function - triggered when replay button is clicked

function replayQuiz() {
  saveScore.css("display", "none")
  $("#replay").css("display", "none")
  $(startInfo).css("display", "none")
  $(currentScore).css("display", "none")
  $(quizQuestions).css("display", "inline")
  $(quizOptions).css("display", "grid")
  inputContainer.css("display", "none")
  quizTime = 60;
  score = 0;
  currentQuestionIndex = 0;
  startQuiz()
}

// Progress rendered - moving to the next question 

function progressRender() {
  for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    $(progress).html("<div class='prog' id=" + qIndex + "></div>")
  }
}

// Functions for if the answer is correct or incorrect

function isCorrect() {
  let img = $("<img>")
  $(".prog").append(img)
  $(img).attr("src", "assets/images/happy.png")
}

function isWrong() {
  let img = $("<img>")
  $(".prog").append(img)
  $(img).attr("src", "assets/images/sad.png")
}

// checking for correct answer

function checkAnswer(answer) {
  if (answer == questions[currentQuestionIndex].correct) {
    score++
    isCorrect()

  } else {
    quizTime -= 3
    isWrong()
  }
  count = 0;
  if (currentQuestionIndex < lastQuestionIndex) {
    currentQuestionIndex++
    renderQuestion()
  } else {
    // end the quiz and show the score
    clearInterval(timer)
    scoreRender()
    $('.countdown').html("<h5>Game Over<h5>")
    quizQuestions.css("display", "none")
    quizOptions.css("display", "none")
    startInfo.text("Thank you for play!")
    startInfo.css("display", "inline")
    $("#replay").css("display", "inline")
    inputContainer.css("display", "block")

  }
}

// rendering the score

function scoreRender() {
  currentScore.css("display", "block")
  currentScore.text(score + " / 5")
  $(replay).css("display", "block")
  saveScore.css("display", "block")
}

// Timer 

function startTimer() {
  // Display 'counter' wherever you want to display it.
  if (quizTime <= 0) {
    $('.countdown').html("<h5>Game Over<h5>")
    return
  } else if (quizTime < 10) {
    countdown.text(quizTime)
    timerContainer.css("color", "#8B0000")
    quizTime--
  } else {
    countdown.text(quizTime)
    quizTime--
  }
}



// Click listener for start button and replay button

$("#start-button").click(startQuiz)
$("#replay").click(replayQuiz)


// saving initials to high scores and high score display

// variables specific to the high score area

var saveScore = $("#save-score")
var highScoreList = $("#high-score-list");
var initialsInput = $("#initials")
var savedScores = $("#saved-scores")
var saveButton = $("#save-button")
var showHighScoresbtn = $("#showhighscores")
var clearHighScores = $("#clearhighscores")

// click listener for the submit button connected to the input initials area

$(saveButton).on("click", function (event) {
  localStorage.setItem(initialsInput.val(), score)
  initialsInput.val('')

})

// click listener showing and refreshing the high score list

$(showHighScoresbtn).on("click", function () {
  highScoreList.empty()

  for (var key in localStorage) {
    if (typeof localStorage[key] === "string") {

      var pEl = $("<p>")
      pEl.attr("data-index", localStorage[key])
      pEl.addClass(".child")
      pEl.html(key + " scored " + localStorage[key] + "/5")
      highScoreList.append(pEl)
      
    }
}
})

// function to clear local storage and the high scores list

  function clearScores() {
    localStorage.clear();
    highScoreList.empty()

  }

  // click listener to trigger the clearScores function and remove items from the list and local storage 

  $(clearHighScores).on("click", clearScores)
