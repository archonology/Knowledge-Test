var timerElement = document.querySelector(".timer-count");
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")
var startTest = document.querySelector(".start-button");
var quizQuestions = document.querySelector(".display-questions");
var timeLeft = 60;

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
}
];

//function for managing the timer
function quizTime() {
    var timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();

        }

    }, 1000);
}

function sendMessage() {
timerElement.textContent = "time's up!";
}

quizTime();

function quizStart() {
    //variable to store the HTML output
    var output = [];
//for each question..
    questionsArray.forEach(
        (currentQuestion, questionNumber)=> {

            //variable to list the answers
            var answers = [];

            // for each answer
            for(letter in currentQuestion.answers){

                // add on an HTML radio button
                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}</input>
                    </label>
                ); 
            }

            // add this question and its answers to the output
            output.push(
                `<,div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it in the page
    quizQuestions.innerHTML = output.join('');
}



// https://www.sitepoint.com/simple-javascript-quiz/ is my key reference for building the test question part of the code.