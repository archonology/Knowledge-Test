var startButton = document.getElementById("start-button");
var timerElement = document.querySelector(".timer-count");
var quizBox = document.querySelector(".quiz-box");
var rightChoice = document.querySelector(".right-line");
var wrongChoice = document.querySelector(".wrong-line");
var highScores = document.querySelector("#click-for-scores");
var choiceClick = document.querySelector(".choices-html");

var timeLeft = 60;
var score = 0;

//document.getElementById("question").innerHTML = "";
//document.getElementById("choice").innerHTML = [];

//here is where the quiz questions live
var questionsArray = [ 

        {question: "1. What is a method a property of?",
        choices: ["an object","a string","a boolean", "an attribute"],
        correctAnswer: 0,}, 
        
        {question: "2. What is Next?",
        choices: ["a", "b", "c", "d"],
        correctAnswer: 3,}, 
        
        {question: "3. What is Now?",
        choices: ["a", "b", "c", "d"],
        correctAnswer: 2,}, 
        
        {question: "4. What is What?",
        choices: ["a", "b", "c", "d"],
        correctAnswer: 1,},
    ];

    //the question making function 
    function questionRun(){

        for (var i = 0; i < questionsArray.length; i++) {
            //looking under the hood
            console.log(questionsArray[i].question);
            console.log(questionsArray[i].choices);
            console.log(questionsArray[i].correctAnswer);
          
            //filling in the questions
            
            //document.getElementById("choices-html").innerHTML = questionsArray[i].choices;

            //how to make the choices list and how to make them click?
            //questionsArray[i].choices.forEach(function(element, index) {

              //element.textContent = questionsArray[i, "choices"][index];
            
                //element.addEventListener("click",function(event){
                  //console.log("Clicked!");
                //});
              //});
    
          //filling in the choices
          var questionRun =   document.getElementById("question-html");
          var choiceRun = document.querySelectorAll("#choices-html");

          //shows the question
          questionRun.innerHTML = questionsArray[i].question;
          //shows the choices
          choiceRun.forEach(function(element,index) {
              element.textContent = questionsArray[i].choices[index];
            });

            
          };
  
          //how to add event listeners that work???

            //using forEach to seperate the choices
            //questionsArray[i].choices.forEach(choiceFunction);
            
            //spreading the choices out on seperate lines
            //document.getElementById("choices-html").innerHTML = text;

            //function choiceFunction(item) {
              //text += item + "<br>";
              //console.log(item);

            
           };

        

   
    //};


questionRun();
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


// set onclick attribute to all available options
//for(i=0; i < option.length; i++){
  //  option[i].setAttribute("onclick", "optionSelected(this)");
///