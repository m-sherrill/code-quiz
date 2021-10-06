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

const questions = [
    {
        question: "?????",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        correctAnswer: "a"
    },
    {
        question: "?????",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        correctAnswer: "a"
    },
    {
      question: "?????",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
      },
      correctAnswer: "a"
    }
  ];



  
  // need a start quiz function

  // Need to have the quiz go through the questions
  // provide a warning if they do not include an answer
  // results to be saved with their initials


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

function startQuiz(event) {
  startTimer()
  $("#start-button").css("display", "none")
  renderQuestion()
  
}

$("#start-button").click(startQuiz)


  