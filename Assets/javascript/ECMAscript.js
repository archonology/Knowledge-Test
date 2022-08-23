//getting the elements together
const topCard = document.getElementById("top-card");
const viewScores = document.getElementById("view-scores");
const cardQuiz = document.getElementById("card-quiz");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const results = document.getElementById("results");
const form = document.getElementById("form");
const scoreboard = document.getElementById("scoreboard");
const user = document.getElementById("user");
const userScore = document.getElementById("user-score");
const save = document.getElementById("save");
const lastSavedCard = document.getElementById("saved-user-card");
const savedUser = document.getElementById("saved-user");
const savedScore = document.getElementById("saved-score");

// array for the questions
let questions = [
  {
    question: "What is the birth name of Javascript?",
    choiceA: "ETAM",
    choiceB: "EGFC",
    choiceC: "CODE1",
    choiceD: "ECMA",
    correct: "D",
  },
  {
    question: "What is a method?",
    choiceA: "A property of an object",
    choiceB: "The one way to code",
    choiceC: "A type of an array",
    choiceD: "A way to get a boolean",
    correct: "A",
  },
  {
    question: "What does 'var' stand for?",
    choiceA: "various",
    choiceB: "variable",
    choiceC: "varies",
    choiceD: "German pronounciation of 'wear'",
    correct: "B",
  },
  {
    question: "What do I need if I want an event on a mouse click?",
    choiceA: "querySelectorAll",
    choiceB: "make it a button in the HTML",
    choiceC: "addEventListener",
    choiceD: "Just click it, man",
    correct: "C",
  },
  {
    question: "What does a function line look like?",
    choiceA: "for(i = 0; i < length; i++)",
    choiceB: "var function = x;",
    choiceC: "console.log('function')",
    choiceD: "yourFunction();",
    correct: "D",
  },
  {
    question: "How do you store page data after refresh?",
    choiceA: "with localStorage",
    choiceB: "with data-",
    choiceC: "console.log('storage')",
    choiceD: "yourStorage();",
    correct: "A",
  },
  {
    question: "If you don't know, what can you do?",
    choiceA: "research",
    choiceB: "quit",
    choiceC: "be hard on yourself",
    choiceD: "become a florist",
    correct: "A",
  },
];

//the variables I will need
var timerCount = document.getElementById("timer-count");
var timeLeft = 30;
var score = 0;
var lastQuestion = questions.length - 1;
let runningQuestion = 0;

//now to manage the timer -- but I haven't been able to clear it for some reason.

//now to display a question
function runQuestions() {
  let ques = questions[runningQuestion];

  question.innerHTML = "<h1>" + ques.question + "</h1>";
  choiceA.innerHTML = ques.choiceA;
  choiceB.innerHTML = ques.choiceB;
  choiceC.innerHTML = ques.choiceC;
  choiceD.innerHTML = ques.choiceD;

  console.log(runningQuestion);
}

//click to start
start.addEventListener("click", startQuiz);
// and quiz go!
function startQuiz() {
  timerCount.style.display = "block";
  start.style.display = "none";
  quizTime();
  runQuestions();
  quiz.style.display = "block";
}

// to check the answers

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    answerIsCorrect();
  } else {
    // answer is wrong
    answerIsWrong();
    //time penalty!
    timeLeft--;
    timeLeft--;
  }
  count = 0;
  //this gets us to the wrap up after the last question is answered
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    runQuestions();
  } else {
    //end the quiz and show the score
    scoreDisplay();
    start.style.display = "none";
    quiz.style.display = "none";
    form.style.display = "block";
  }
}
// I really don't understand how to get this timer to clear function at the quiz end. it seems like I need a const that is global, else the other functions aren't readinging the "timerInterval" or clearInterval...
function quizTimeStop() {
      timerCount.style.display = "none";
      quiz.style.display = "none";
    }
function quizTime() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerCount.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}


function scoreDisplay() {
  //hide the timer
  quizTimeStop();
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);
  //put up the results
  results.innerHTML +=
    "<h2>" + "Your score was " + score + " / " + scorePerCent + "%</h2>";
    timerCount.style.display = "none";
    quiz.style.display = "none";
}

//for when the timer is up, this message is displayed
function sendMessage() {
  timerCount.textContent = "time's up!";
}

// if the user gets the correct answers
function answerIsCorrect() {
  wrong.style.display = "none";
  right.style.display = "block";
  right.innerHTML = "<h3>" + "Yes!" + "</h3>";
}

// answer is Wrong
function answerIsWrong() {
  right.style.display = "none";
  wrong.style.display = "block";
  wrong.innerHTML = "<h3>" + "Nope! Time penalty!" + "</h3>";
}

function saveLastScore() {
  //user score data as an object
  var lastUserScore = {
    user: user.value.trim(),
    score: score + "/7",
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("lastUserScore", JSON.stringify(lastUserScore));
}

function renderLastScore() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastUserScore = JSON.parse(localStorage.getItem("lastUserScore"));
  // Check if data is returned, if not exit out of the function
  if (lastUserScore !== null) {
    document.getElementById("saved-user").innerHTML = lastUserScore.user;
    document.getElementById("saved-score").innerHTML = lastUserScore.score;
  } else {
    return;
  }
}
save.addEventListener("click", function (event) {
  event.preventDefault();
  lastSavedCard.style.display = "block";
  saveLastScore();
  renderLastScore();
  document.getElementById("page-refresh").style.display = "block";
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastScore function will also execute
  renderLastScore();
}
init();
