var startButton = document.getElementById("start-button");
var timerElement = document.querySelector(".timer-count");
var quizBox = document.querySelector(".quiz-box");
var rightChoice = document.querySelector(".right-line");
var wrongChoice = document.querySelector(".wrong-line");
var highScores = document.querySelector("#click-for-scores");

var timeLeft = 60;
var score = 0;

// every array I've made has failed... I have broken it down to work through lines, but feels too broken now.. :(
var questionsObj1 = {

  question: "1. What is a method a property of?",
  choices: ["an object","a string","a boolean", "an attribute"],
  correctAnswer: 0, 

};

var questionsObj2 = {
  question: "2. What is Next?",
  choices: ["a", "b", "c", "d"],
  correctAnswer: 3,
};

var questionsObj3 = {
  
  question: "3. What is Now?",
  choices: ["a", "b", "c", "d"],
  correctAnswer: 2,

};

var questionsObj4 = {
  question: "4. What is What?",
  choices: ["a", "b", "c", "d"],
  correctAnswer: 1
};

console.log(questionsObj1["question"]);
console.log(questionsObj2["question"]);
console.log(questionsObj3["question"]);
console.log(questionsObj4["question"]);

console.log(questionsObj1["choices"]);
console.log(questionsObj2["choices"]);
console.log(questionsObj3["choices"]);
console.log(questionsObj4["choices"]);

console.log(questionsObj1["correctAnswer"]);
console.log(questionsObj2["correctAnswer"]);
console.log(questionsObj3["correctAnswer"]);
console.log(questionsObj4["correctAnswer"]);

document.getElementById("question").innerHTML = questionsObj1["question"];

highScores.addEventListener("click",function(event){
  console.log("Clicked!");
  document.getElementById('quizBox').style.display='none'
});

//here we have my LETs and trying to pinpoint how to target properties within my question array
let questionsQuiz = document.querySelectorAll("#question");
let choices1 = document.querySelectorAll("#choice");

choices1.forEach(function(element, index) {

  element.textContent = questionsObj1["choices"][index];

    element.addEventListener("click",function(event){
      console.log("Clicked!");
      document.getElementById('quizBox').style.display='block'
    if(questionsObj1.correctAnswer == index) {
      console.log("Right!");
      score++;
      console.log(score);
      document.getElementById('true').style.display='block'
    
    } else {
      console.log("Wrong!");
      timeLeft -5; //this isn't working
      console.log(score);
      document.getElementById('false').style.display='block'
    }
    document.getElementById("question").innerHTML = questionsObj2["question"];
  });
});

//this function manages the timer
function quizTime(event) {
  var timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if(timeLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();

      }

  }, 1000);
};
//for when the timer is up -this message is displayed
function sendMessage() {
timerElement.textContent = "time's up!";
}

//still need to do local storage and the form for high scores section

for (var i = 0; i < question.length; i++);