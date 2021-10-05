var quizContainer = document.querySelector("quiz-container")

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



  function buildQuiz(){
    // variable to store the HTML output
    var output = [];
  
    // for each question...
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        var answers = [];
  
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('')

    console.log(output)
  }


  buildQuiz()
  
  // need a start quiz function

  // Need to have the quiz go through the questions
  // provide a warning if they do not include an answer
  // results to be saved with their initials