var quizContainer = $(".quiz-container")
var questionContainer = $(".question-container")
var quizQuestions = $(".quiz-questions")
var quizOptions = $(".quiz-options")
var controls = $(".controls")
var timerContainer = $(".timer-container")
var countdown = $(".countdown")
var scoreContainer = $(".score-container")
var highScores = $("#highscores")
var clearHighScores = $("#clearhighscores")
var currentScore = $("#current-score")
var saveScore = $("#save-score")
var startButton = $("#start-button")
var startInfo = $("#starting-info")
var progress = $("#progress")
var prog = $(".prog")

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
let score = 0

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
  $(startInfo).css("display", "none")
  $(startButton).css("display", "none")
  renderQuestion ()
  $(questionContainer).css("display", "block")
  progressRender()
  startTimer()
  timer = setInterval(startTimer, 1000)
  
}

function replayQuiz(){
  saveScore.css("display", "none")
  $("#replay").css("display", "none")
  $(startInfo).css("display", "none")
  $(currentScore).css("display", "none")
  $(quizQuestions).css("display", "inline")
  $(quizOptions).css("display", "grid")
  quizTime = 60;
  score = 0;
  currentQuestionIndex = 0;
  startQuiz()
}

// Progress rendered - moving to the next question 

function progressRender() {
  for(let qIndex=0; qIndex <= lastQuestionIndex; qIndex++) {
    $(progress).html("<div class='prog' id="+ qIndex +"></div>")
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

function checkAnswer(answer){
  if( answer == questions[currentQuestionIndex].correct) {
      score++
      isCorrect ()

  }else{
      quizTime -= 3
      isWrong ()
  }
  count = 0;
  if(currentQuestionIndex < lastQuestionIndex) {
      currentQuestionIndex++
      renderQuestion()
  }else{
      // end the quiz and show the score
      localStorage.setItem("mostRecentScore", score)
      clearInterval(timer)
      scoreRender()
        $('.countdown').html("<h5>Game Over<h5>")
        quizQuestions.css("display", "none")
        quizOptions.css("display", "none")
        $("#replay").css("display", "inline")

  }
}

function scoreRender(){
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
    }  else if (quizTime< 10) {
              $(".countdown").text(quizTime)
              $(".timer-container").css("color", "#8B0000")
              quizTime --
            } else {
              $(".countdown").text(quizTime)
              quizTime --
            }
  }

 


// Score Rendering






// Click listener for start button 

$("#start-button").click(startQuiz)
$("#replay").click(replayQuiz)




var saveScore = $("#save-score")
var highScoreList = $("#high-score-list");
var initialsInput = $("#initials")
var mostRecentScore = localStorage.getItem("mostRecentScore")
var saveButton = $("#save-button")
var initials = JSON.parse(localStorage.getItem("Initials"))


$(saveButton).on("click", function(event) {

  window.localStorage.setItem('Initials', JSON.stringify(initialsInput.val()));
  console.log("i was clicked")

})

var highScoreFinal = [initials, mostRecentScore]

function renderHighScore () {
  
  for (let i = 0; i < highScoreFinal.length; i++) {
  var initialSpan = $("<span>")
  var scoreSpan = $("<span>")

  $(initialSpan).html(initials + " scored ")
  $(scoreSpan).html(mostRecentScore + "/5")


  console.log(initialSpan)
  $(highScoreList).append(initialSpan)
  $(highScoreList).append(scoreSpan)
  
 
}
}

renderHighScore()


// for (let i = 0; i < savedTodos.length; i++) {
//   // Create an <li> element in memory (does not appear in the document yet)
//   let newTodo = document.createElement("li");
//   // Set the inner text of that new li with the contents from local storage.
//   // The savedTodos[i] is accessing data in the localStorage array.
//   // The [i] is a different number each loop.
//   // The `.task` is accessing 'task' property on the object in the array.
//   newTodo.innerText = savedTodos[i].task;
//   // Create a new property on the element called `isCompleted` and assign a boolean value.
//   // This is only accessible in code and will not show up when appending to the DOM.
//   newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
//   // Check the value we just set.
//   if (newTodo.isCompleted) {
//     // Create a style for the element if it is done (strike it out)
//     newTodo.style.textDecoration = "line-through";
//   }
//   // Actually append the new element to the document (this will make it visible)
//   todoList.appendChild(newTodo);
// }