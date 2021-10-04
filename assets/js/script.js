



function buttonVisibility() {
    var x = document.querySelector(".previous-button");
    if (x.style.visibility === 'visible') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }


  
  document.querySelector(".start-button").addEventListener("click", function startButton() {
    alert("Hello World!");
  });