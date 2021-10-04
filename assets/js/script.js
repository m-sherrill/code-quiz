

var quizQuestions = [
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



function buttonVisibility() {
    var x = document.querySelector(".quiz-questions");
    if (x.style.visibility === 'visible') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }



  
  document.querySelector(".start-button").addEventListener("click", buttonVisibility)