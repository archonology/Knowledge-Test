var questions = document.querySelector(".display-questions");
var initials = document.querySelector(".initials")
var score = document.querySelector(".score");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var questions = [];
var finalScore;
var isComplete = false;
var timer;
var timerCount;

//call the score and initials at reload
function init() {
    getInitials();
    getScore();  
  }

// The startGame function is called when the start button is clicked
 function startQuiz() {
    isComplete = false;
    timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }

  function finishQuiz() {
    wordBlank.textContent = "Good Job!";
    startButton.disabled = false;
    setInitials();
    setScore();
  }

timerElement.addEventListener("click", function(event) {
var timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount + "Time Remaining";

    if(timerCount >= 0) {
        
        if(isComplete && timerCount > 0) {
        clearInterval(timer);
        finishQuiz();
        }
    }
}, 1000);
})

questions.addEventListener("click", function(event) {
questions.textContent = "How do you code?";

});


//start button function
//function startGame() {
  //  isWin = false;
    //timerCount = 100;
    // Prevents start button from being clicked when round is in progress
    //startButton.disabled = true;
    //renderBlanks()
    //startTimer()
  //}

  //need timer function
//function setTime() {
    // Sets interval in variable
    //var timerInterval = setInterval(function() {
      //secondsLeft--;
      //timeEl.textContent = secondsLeft + "Time Remaining";
  
      //if(secondsLeft === 0) {
        // Stops execution of action at set interval
        //clearInterval(timerInterval);
        // Calls function to create and append image
        //sendMessage();
 //     }
  
   // }, 1000);
//}
//need question function

//need function for storing leaderboard/getting user info