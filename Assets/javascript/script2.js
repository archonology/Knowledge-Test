var startButton = document.getElementById("start-button");
var timerElement = document.querySelector(".timer-count");
var quizBox = document.querySelector(".quiz-box");
var rightChoice = document.querySelector(".right-line");
var wrongChoice = document.querySelector(".wrong-line");

var timeLeft = 60;
var score = 0;

//here is where the quiz questions live
var questionsArray = [ {
    question: "What is coding?",
    answers: {
        a: "slang for doing designer drugs",
        b: "two people ringing a door bell together",
        c: "writing lines of information for a computer to interpret",
        d: "looking for gold out West",
    },
    correctAnswer: "c"
},
{
    question: "What is Javascript?",
    answers: {
        a: "A big headache",
        b: "a computer coding language that is commonly used for web applications",
        c: "the receipt from a coffee shop",
        d: "jittery handwriting style",
    },
    correctAnswer: "b"
},
{
    question: "What is a function?",
    answers: {
        a: "an action written out for a computer to perform",
        b: "an event where people drink coffee and eat donuts",
        c: "something part, or all, of you does before you learn to code",
        d: "Fun and action mixed together",
    },
    correctAnswer: "a"
}];


// set onclick attribute to all available options
//for(i=0; i < option.length; i++){
  //  option[i].setAttribute("onclick", "optionSelected(this)");
///}