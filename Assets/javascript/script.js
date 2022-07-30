var timerElement = document.querySelector(".timer-count");
var quizBox = document.querySelector(".quiz-box");
var rightChoice = document.querySelector(".right-line");
var wrongChoice = document.querySelector(".wrong-line");
var timeLeft = 60;
var score = 0;

//these variables are through jquery
var $rootEl = $("#root");
var $answersLine = $("ul");
var $timerStyle = $(".timer-count");

$timerStyle.attr("class", "time-style");
$answersLine.children().addClass('bg-light text-dark mb-3 p-3').css('border-radius', '.4rem');

console.log(score);

//here is the variable for the quiz questions
let question = {
    
    title: "1. What is a method a property of?",
    alternatives: ["an object","a string","a boolean", "an attribute"],
    correctAnswer: 0,

    title: "2. What is Next?",
    alternatives: ["a", "b", "c", "d"],
    correctAnswer: 3,

    title: "3. What is Now?",
    alternatives: ["a", "b", "c", "d"],
    // correctAnswer: 2,

    title: "4. What is What?",
    alternatives: ["a", "b", "c", "d"],
    correctAnswer: 1
};

//event listeners

//function for the quiz generating
function showQuestion(q) {
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index) {
      element.textContent = q.alternatives[index];

      //bringing in the event listeners to the alts!
      element.addEventListener("click",function(){
        console.log("Clicked!");


        if (q.correctAnswer == index) {
            console.log("Right!");
            score++;
            console.log(score);
            //rightChoice.setAttribute("visible");

        } else {
            console.log("Better luck next time!");
        }
        
        //for (var i = 0; i < q.length; i++) {
           
        //};

      });
    });
}

showQuestion(question);

//this function manages the timer
function quizTime() {
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
//repeat quiz time on page refresh
//quizTime();



 //for(var i = 0; i < number; i++) {
            // new number is now equal to line 16 new number value plus the returned line 17 function value
            //newNumber = newNumber + nameOfFunction();
        //}