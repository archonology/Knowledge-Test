//getting the elements together
const topCard = document.getElementById("top-card");
const viewScores = document.getElementById("view-scores");
const cardQuiz = document.getElementById("card-quiz");
const start = document.getElementById("start");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
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


const questions = [
  {
    question: "Inside the HTML document, where do you place your Javascript code?",
    choiceA: "In the footer element",
    choiceB: "In the script element",
    choiceC: "In the head element",
    choiceD: "Inside the link element",
    correct: "B",
  },
  {
    question: "What operator is used to assign a value to a declared variable?",
    choiceA: "Double-equal(==)",
    choiceB: "Equal sign(=)",
    choiceC: "Colon(:)",
    choiceD: "Question mark(?)",
    correct: "B",
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    choiceA: "sentence, float, data, bigInt, symbol, undefined",
    choiceB: "sentence, int, truthy, bigInt, symbol, undefined",
    choiceC: "string, num, falsy, bigInt, symbol, undefined",
    choiceD: "string, number, boolean, bigInt, symbol, undefined",
    correct: "D",
  },
  {
    question: "What is the difference between && and ||?",
    choiceA: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
    choiceB: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    choiceC: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
    choiceD: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions return true.",
    correct: "B",
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    choiceA: "while loop",
    choiceB: "difference...between",
    choiceC: "for loop",
    choiceD: "if..else",
    correct: "D",
  },
  {
    question: "How do we stop a loop from from repeating indefinitely?",
    choiceA: "A loop will stop executing when the condition is false.",
    choiceB: "A loop will stop executing when the condition is true.",
    choiceC: "We have to explicitly end the loop with the break keyword.",
    choiceD: "When we have iterated through half of the condition.",
    correct: "A",
  },
  {
    question: "Which statement below is not true about functions in JavaScript?",
    choiceA: "Functions are able to be recursive.",
    choiceB: "A function must always be assigned an identifier",
    choiceC: "Functions can receive arguments that can alter the output of a function",
    choiceD: "Functions can be reused throughout your code",
    correct: "B",
  },
  {
    question: "What are the two types of scope JavaScript uses?",
    choiceA: "Global and Local",
    choiceB: "Surrounding and Inner",
    choiceC: "Outside and Inside",
    choiceD: "Abroad and Local",
    correct: "A",
  },
  {
    question: "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
    choiceA: "pop() and unshift()",
    choiceB: "forEach() and pop()",
    choiceC: "concat() and shift()",
    choiceD: "push() and sort()",
    correct: "A",
  },
  {
    question: "How do we access a value stored in an object?",
    choiceA: "Dot notation, Bracket notation",
    choiceB: "Equal notation, Abstract notation",
    choiceC: "Period notation, Square bracket notation",
    choiceD: "Dot notation, Curl bracket notation",
    correct: "A",
  },
  {
    question: "What is an object method?",
    choiceA: "An array saved inside of an object",
    choiceB: "A function that takes an object for an argument",
    choiceC: "A function associated with an object",
    choiceD: "Keys in an object that have a number assigned to it",
    correct: "C",
  },
  {
    question: "What is the purpose of the 'This' operator?",
    choiceA: "This' is an array where we can easily store global variables for when we need access to them.",
    choiceB: "This' keyword allows us to specify certain variables to it which can be used in the global scope.",
    choiceC: "This' keyword lets us make a reference to our window gives us access to special object methods.",
    choiceD: "The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.",
    correct: "D",
  },
  {
    question: "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
    choiceA: "git commit test-branch",
    choiceB: "git change test branch",
    choiceC: "git checkout test-branch",
    choiceD: "git merge test-branch",
    correct: "C",
  },
  {
    question: "From the reason listed below which is NOT true about JavaScript?",
    choiceA: "JavaScripts handles numbers better than most programming languages.",
    choiceB: "JavaScript increases interactivity of our websites.",
    choiceC: "Javascript allows developers to create richer interfaces for the users.",
    choiceD: "JavaScript lets provide the user immediate feedback upon an action.",
    correct: "A",
  },
  {
    question: "What is a media query?",
    choiceA: "A feature of CSS3 allowing content rendering to adapt to different conditions such as screen resolution",
    choiceB: "A feature of JavaScript allowing content rendering to adapt to different conditions such as screen resolution",
    choiceC: "A feature of HTML allowing content rendering to adapt to different conditions such as screen resolution",
    choiceD: "A feature of Flexbox allowing content rendering to adapt to different conditions such as screen resolution",
    correct: "A",
  },
  {
    question: "How is Flexbox related to mobile-first design?",
    choiceA: "The flex layout allows developers to design the mobile user interface first, then other screen resolutions and devices.",
    choiceB: "The flex layout allows non-responsive elements within a container to behave as responsive elements depending upon screen size (or device).",
    choiceC: "The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size (or device).",
    choiceD: "The flex layout allows for the  user to select an interface based on the screen size (or device).",
    correct: "C",
  },
  {
    question: "What is one advantage of Responsive Design for a developer?",
    choiceA: "Faster page loading time",
    choiceB: "Faster development",
    choiceC: "More social sharing",
    choiceD: "Improved SEO",
    correct: "B",
  },
  {
    question: "When using flexbox, which property needs to be adjusted in order to add space between items?",
    choiceA: "justify-content",
    choiceB: "flex-flow",
    choiceC: "align-content",
    choiceD: "space-between",
    correct: "A",
  },
  {
    question: "What is a CSS reset?",
    choiceA: "Deleting the contents of a stylesheet to implement entirely new design",
    choiceB: "A stylesheet that clears the default formatting of the browser",
    choiceC: "A CSS property that resets the values of child elements",
    choiceD: "A media query that resets the responsive design when switching devices",
    correct: "B",
  },
  {
    question: "A client wants to make sure that the browser has multiple fonts to choose from, just in case the default font isn't supported. How would you make sure that the default font is set to 'Arial', but that there are also two other fonts available to the browser?",
    choiceA: "Add a stylesheet for each additional font",
    choiceB: "Assign multiple fonts to the font-family property",
    choiceC: "Assign 'Arial' to the default-font property and use the alternative-font property for the backups",
    choiceD: "None of the above. The default font of all browsers is 'Arial' and you can only specify one alternative.",
    correct: "D",
  },
  {
    question: "Which user-action pseudo-class would you need to add in order to change an element when the mouse is over it?",
    choiceA: ":visited",
    choiceB: ":activate",
    choiceC: ":checked",
    choiceD: ":hover",
    correct: "D",
  },
  {
    question: "Which of the following is a true statement about pseudo-elements and pseudo-classes?",
    choiceA: "pseudo-elements start with a double colon (::) and pseudo-classes start with a single colon (:)",
    choiceB: "pseudo-elements and psuedo-classes are actually the same thing",
    choiceC: "psuedo-elements and pseudo-classes cannot be combined",
    choiceD: "::before is both a pseudo-element and a pseudo-class",
    correct: "A",
  },
  {
    question: "How could you use pseudo-elements to display the message, 'Thanks for checking the box!', after a user clicks on a check box?",
    choiceA: ".checkbox:checked + label::after { content: 'Thanks for checking the box!'; }",
    choiceB: ".checkbox:checked + label::after {message: 'Thanks for checking the box!'; }",
    choiceC: ".checkbox + label { message: 'Thanks for checking the box!'; }",
    choiceD: ".checkbox + label { content: 'Thanks for checking the box!'; }",
    correct: "A",
  },
  {
    question: "Which attribute selector would you use if you wanted to target all <a> elements that have an href value that ends with '.png' to change the color? What would this look like in style.css?",
    choiceA: "a.href { color: green }",
    choiceB: ".href$'.png' { color: green }",
    choiceC: "a[href$='.png']{ color: green }",
    choiceD: "a[href.png] { color: green }",
    correct: "C",
  },
  {
    question: "How do you declare a custom property or 'CSS variable'?",
    choiceA: "var root-my-color = green;",
    choiceB: ":root { var my-color = green; }",
    choiceC: "var my-color = green;",
    choiceD: ":root { --my-color: green; }",
    correct: "D",
  },
  {
    question: "When developing a user interface, all are important except...",
    choiceA: "Focusing on building a strong backend",
    choiceB: "Writing code that follows accessibility standards",
    choiceC: "Making sure that you using a mobile-responsive layout",
    choiceD: "Using readable font sizes",
    correct: "A",
  },
  {
    question: "How would I check which files are staged, unstaged, and untracked using git commands?",
    choiceA: "git commit -m",
    choiceB: "git fetch",
    choiceC: "git add .",
    choiceD: "git status",
    correct: "D",
  },
  {
    question: "What is the command we use to create a new file?",
    choiceA: "pwd",
    choiceB: "touch",
    choiceC: "cd",
    choiceD: "mkdir",
    correct: "B",
  },
  {
    question: "What are HTML semantic elements?",
    choiceA: "A semantic element reveals nothing about its content to the browser or the developer.",
    choiceB: "A semantic element clearly describes its meaning to both the browser and the developer.",
    choiceC: "Semantic elements are outdated and are no longer used in HTML.",
    choiceD: "Semantic elements, like `<div>`, hold the important content together so it's easy to understand.",
    correct: "B",
  },
  {
    question: "When adding color to your HTML elements, which is more encouraged: using hex codes or predetermined color names?",
    choiceA: "Using a predetermined color is better because you are unlimited in the types of colors you can use.",
    choiceB: "Using a hex code is better because allows you to use numbers instead of letters to describe a color.",
    choiceC: "Using a hex code is better because it allows you to get a more specific color and have more control over your design.",
    choiceD: "Using a predetermined color is better because it allows the browser to understand exactly what color you want to use.",
    correct: "C",
  },
  {
    question: "Which of the following statements are NOT true?",
    choiceA: "Inline elements are elements that only take up as much width as needed.",
    choiceB: "Inline elements automatically start a new line.",
    choiceC: "Block elements take all the possible width, regardless of its actual size.",
    choiceD: "Block elements are elements that always start on a new line.",
    correct: "B",
  },
  {
    question: "Which of the following is not a component of the box model?",
    choiceA: "The border property",
    choiceB: "The content",
    choiceC: "The display property",
    choiceD: "The padding property",
    correct: "C",
  },
  {
    question: "What CSS declaration could you add to `<div style='width: 50%;'>` to center it ?",
    choiceA: "text-align: center",
    choiceB: "align: center",
    choiceC: "margin: 0 auto",
    choiceD: "float: center",
    correct: "C",
  },
  {
    question: "What is Express.js and what is it used for?",
    choiceA: "Express.js is a back-end application framework for Node.js. It provides a flexible way for developers to create web applications and APIs.",
    choiceB: "Express.js is an npm package that helps parse JSON and XML encoded form data",
    choiceC: "Express.js is an open-source library for adding form functionality to front-end applications.",
    choiceD: "Express.js is a built-in Node.js framework that allows users to build a simple web server.",
    correct: "A",
  },
  {
    question: "What is the difference between an endpoint and a route?",
    choiceA: "A route is a URI path used to access the available endpoints. An endpoint performs one or more actions, can accept parameters, and sends back some response.",
    choiceB: "An endpoint can have multiple routes, while a route can only have one endpoint.",
    choiceC: "An endpoint can only have one HTTP method associated with it, while routes can have many HTTP methods.",
    choiceD: "A endpoint is a URI path used to access the available endpoints. A route preforms one or more actions, can accept parameters, and sends back some response.",
    correct: "A",
  },
  {
    question: "Which of the following definitions most accurately describes body parsing middleware",
    choiceA: "Body parsing middleware, in the form of `app.use(express.json())`, is a function that parses incoming request bodies before reaching route handlers. That data is then made available in the req.body property.",
    choiceB: "Body parsing middleware is implemented inside route handlers after the request has been received.",
    choiceC: "Body parsing middleware is a third party npm package that has to be installed alongside Express in order to function.",
    choiceD: "Body parsing middleware is a function that has access to the request and response object and ensures that a user is authenticated before allowing the request to continue on to the route handler.",
    correct: "A",
  },
  {
    question: "Which of the following code snippets is an example of a fetch request to a locally hosted API endpoint?",
    choiceA: "fetch(' / api / books') .then((response) => response.json()) .then((json) => { json.forEach((book) => console.log(book.title)) });",
    choiceB: "fetch.get(' / api / books') .then((response) => response.json()) .then((json) => { json.forEach((book) => console.log(book.title)) });",
    choiceC: "$.get(' / api / books', function(data, status){ alert('Data: ' + data + '\nStatus: ' + status); });",
    choiceD: 'fetch("/api/books", { method: "POST", body: JSON.stringify(book), headers: { "Content-type": "application/json", }, }) .then((response) => response.json()) .then((json) => console.log(json));',
    correct: "A",
  },
  {
    question: "Which of the following code snippets is an example of a POST route made using express?",
    choiceA: "app.post('/', function (req, res) { res.send('Got a POST request') })",
    choiceB: '$.post("/api/books", function(data, status){ alert("Data: " + data + "\nStatus: " + status); });',
    choiceC: "app.get('/', function (req, res) { res.send('Got a POST request') })",
    choiceD: "app.put('/', function (req, res) { res.send('Got a POST request') })",
    correct: "A",
  },
  {
    question: "Which of the following code snippets is an example of a fetch request designed to add a new book to a locally hosted API endpoint?",
    choiceA: "fetch('/api/books', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(newBook), }) .then((response) => response.json()) .then((data) => { console.log('Success:', data); });",
    choiceB: '$.post( "/api/books", function( newBook ) { $( ".result" ).html( newBook ); });',
    choiceC: "fetch(' / api / books', { method: 'DELETE', headers: { 'Content - Type': 'application / json', }, body: JSON.stringify(newBook), }) .then((response) => response.json()) .then((data) => { console.log('Success:', data); });",
    choiceD: "fetch('/api/books', { method: 'PUT', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(newBook), }) .then((response) => response.json()) .then((data) => { console.log('Success:', data); });",
    correct: "A",
  },
  {
    question: 'What command can be used to search for the term "express" inside a set of commit messages?',
    choiceA: 'git log --grep="express"',
    choiceB: "git log --grep -express",
    choiceC: 'git log --find="express"',
    choiceD: 'git log --grep "express"',
    correct: "D",
  },
  {
    question: "What is the correct syntax for creating a wildcard route?",
    choiceA: 'app.get(undefined, function(req,res) { req.send("I am Foo"); });',
    choiceB: 'app.get(null, function(req,res) { req.send("I am Foo"); });',
    choiceC: 'app.get(function(req,res) { req.send(""I am Foo""); });',
    choiceD: "app.get('/*',function(req,res) { req.send('I am Foo'); });",
    correct: "D",
  },
  {
    question: "What command in MySQL do we use to select a database for use?",
    choiceA: "USE",
    choiceB: "SELECT",
    choiceC: "Name of the Database",
    choiceD: "SELECT DATABASE()",
    correct: "A",
  },
  {
    question: "How do we store data in tables?",
    choiceA: "A table is made up of columns and rows. Rows are a collection of data of a particular datatype while columns represent a single point of data in that row.",
    choiceB: "A table is made up of columns and rows. Columns are a collection of data of a particular datatype while rows represent a single structured data item in a table.",
    choiceC: "A table is made up of columns and rows. Both columns and rows are collections of a particular datatype.",
    choiceD: "A table is made up of columns and rows. Neither columns and rows that hold unrelated data of any type.",
    correct: "B",
  },
  {
    question: "Which of the following is the best definition for the DELETE command in MySQL?",
    choiceA: "The DELETE command removes one or more columns from a table.",
    choiceB: "The DELETE command removes a table from a database.",
    choiceC: "Not quite. We use mysql2 to connect an existing database to an Express server To do so, we 1) Install the Node MySQL package, 2)Initialize the connection 3)Perform a query using query().",
    choiceD: "The DELETE command drops a database if it exists.",
    correct: "C",
  },
  {
    question: "Which of the following is NOT a step we must take to connect a database to an Express server and execute a query?",
    choiceA: "Require the schema.sql and seeds.sql files in our Express server file",
    choiceB: "Install the Node mysql2 package",
    choiceC: "Initialize the connection to the database",
    choiceD: "Perform a query using query()",
    correct: "A",
  },
  {
    question: "Which of the following statements are NOT true?",
    choiceA: "Schemas are used to create and define a database.",
    choiceB: "Schemas are used to seed data.",
    choiceC: "Schemas always belong to a single database.",
    choiceD: "Schemas include one or more tables which describe how the data will be stored.",
    correct: "B",
  },
  {
    question: "Which of the following is the best reason for using a prepared statement?",
    choiceA: "Prepared statements use a '?' parameter to allow us to write a single query that can take in multiple values, making our query more durable.",
    choiceB: "A prepared statement hardcodes a value we want to use over and over again in a query.",
    choiceC: "Prepared statements use a '?' parameter to designate the data as optional.This makes sure our queries do not fail even if the column is set to NOT NULL.",
    choiceD: "A prepared statement is a way of testing against a database even if the tables do not contain any data.",
    correct: "A",
  },
  {
    question: "Which of the following is NOT an aggregate function in MySQL?",
    choiceA: "ISNUMERIC()",
    choiceB: "COUNT()",
    choiceC: "SUM()",
    choiceD: "MIN()",
    correct: "A",
  },
  {
    question: "Which is the best description of a JOIN in MySQL?",
    choiceA: "A JOIN is used to combine one or more tables from related databases.",
    choiceB: "A JOIN is used to combine one or more rows from unrelated tables.",
    choiceC: "A JOIN is used to combine or more columns from related tables.",
    choiceD: "A JOIN is used to combine one or more rows from related tables.",
    correct: "D",
  },
  {
    question: "Which of the following Git command will allow us to bring specific commit into a branch we are working on?",
    choiceA: "git cherry-pick `<hash>`",
    choiceB: "git cherry-pick `<branch-name>`",
    choiceC: "git cherry-pick `<commit-message>`",
    choiceD: "git cherry-pick `<log>`",
    correct: "A",
  },
  {
    question: "What are lifecycle events called and where can they be used?",
    choiceA: "Routes and inside of your server file",
    choiceB: "Instances and you initiate them in your routes.",
    choiceC: "Hooks and you initiate them on the Model.",
    choiceD: "Models and inside of a database.",
    correct: "C",
  },
  {
    question: "How would you write the Sequelize findAll method has a literal in SQL?",
    choiceA: "SELECT users FROM database",
    choiceB: "SELECT * FROM database",
    choiceC: "SELECT all FROM database",
    choiceD: "SELECT * LOCATION database",
    correct: "B",
  },
  {
    question: "Which rule can we use in eslint to warn us when a template literal is not encased in back ticks?",
    choiceA: "prefer-template",
    choiceB: "template-tag-spacing",
    choiceC: "no-template-curly-in-string",
    choiceD: "no-useless-concat",
    correct: "C",
  },
  {
    question: "Your team is trying to determine if they should continue to query the database or switch to an ORM like Sequelize.Which statement is not true about ORMs?",
    choiceA: "Allows us to better recognize data relationships.",
    choiceB: "We only need to use JavaScript since Sequelize does all the SQL for us.",
    choiceC: "Lets us map our database to objects so we can take advantage of Object Oriented Programming.",
    choiceD: "Makes complicated SQL queries easier for us to read and write code by using JavaScript.",
    correct: "B",
  },
  {
    question: "The 'C' in MVC stands for Controller.What is the Controller responsible for?",
    choiceA: "Controllers handle all UI/UX concerns. Whenever data is requested, updated, or created using the Model, it is sent to the Controller so that the user can see it.",
    choiceB: "Controllers are responsible for all of the logic related to data and the UI/UX concerns.",
    choiceC: "Controllers act as the interface between Model and View components. A Controller will recieve new data from the View, create a new instance in the database using the Model, and then return the new data to the View.",
    choiceD: "Controllers refer to the ways in which users control the View. A keyboard, for example, would be considered a Controller.",
    correct: "C",
  },
  {
    question: "Which Sequelize method allows you to serialize an object so that you are only working with the properties that you need?",
    choiceA: "serialize()",
    choiceB: "get()",
    choiceC: "render()",
    choiceD: "pair()",
    correct: "B",
  },
  {
    question: "How do Handlebars and other template engines help us preserve the Separation of Concerns principle?",
    choiceA: "They allow us to incorporate our logic into the View so that it is isolated from the Controllers.",
    choiceB: "They allow us to write JavaScript in our HTML files in order to DRY up our code.",
    choiceC: "They allow the View to communicate directly with the backend in order to isolate the Controller.",
    choiceD: "They allow us to create logic-free templates that ensure that the View and our code are isolated.",
    correct: "D",
  },
  {
    question: "What is the syntax to import Handlebars partials?",
    choiceA: "{{{ filename }}}",
    choiceB: "{{>folder/filename}}",
    choiceC: "{{<folder/filename}}",
    choiceD: "{{#partial folder/filename}}",
    correct: "B",
  },
  {
    question: "How are custom helper functions useful when using Handlebars?",
    choiceA: "There is a separation of logic from the templates",
    choiceB: "They help render the page more quickly",
    choiceC: "They reuse code by creating shared templates",
    choiceD: "They incorporate comments to make it easier to read code",
    correct: "A",
  },
  {
    question: "When are session values deleted?",
    choiceA: "When the user manually deletes them",
    choiceB: "When the browser is closed",
    choiceC: "When they expire after a set period of time",
    choiceD: "They are never deleted",
    correct: "B",
  },
  {
    question: "Which of the following is not a benefit of templating engines?",
    choiceA: "Improves search engine discoverability",
    choiceB: "Improves the performance of client-side JavaScript",
    choiceC: "Separates the layout from the logic",
    choiceD: "Reduces the number of network requests needed to display a webpage",
    correct: "B",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
  },
  {
    question: " ",
    choiceA: " ",
    choiceB: " ",
    choiceC: " ",
    choiceD: " ",
    correct: " ",
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

  question.innerHTML = `<p class="ques">${ques.question}<p>`;
  choiceA.innerHTML = ques.choiceA;
  choiceB.innerHTML = ques.choiceB;
  choiceC.innerHTML = ques.choiceC;
  choiceD.innerHTML = ques.choiceD;

}

function backQuestion() {

  if (!runningQuestion > 0) {

    return runQuestions();

  } else {

    runningQuestion--;
    runQuestions();

  }


}

function forwardQuestion() {

  if (runningQuestion == lastQuestion) {

    return false;

  } else {

    runningQuestion++;
    runQuestions();

  }


}


// and quiz go!
function startQuiz() {
  timerCount.style.display = "block";
  start.style.display = "none";
  // quizTime();
  runQuestions();
  quiz.style.display = "block";
}

// to check the answers

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct || answer == questions[runningQuestion - 1].correct) {
    // answer is correct
    score++;
    answerIsCorrect();
  } else {
    // answer is wrong
    answerIsWrong();
    //time penalty!
    // timeLeft--;
    // timeLeft--;
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
// function quizTimeStop() {
//       timerCount.style.display = "none";
//       quiz.style.display = "none";
//     }
// function quizTime() {
//   const timerInterval = setInterval(() => {
//     timeLeft--;
//     timerCount.textContent = timeLeft;
//     if (timeLeft <= 10) {
//         timerCount.textContent = "Time Warning! Page will reload in " + timeLeft + " seconds";
//       }
//     if (timeLeft === 0) {
//       clearInterval(timerInterval);
//       window.location.reload();
//     }
//   }, 1000);
// }


function scoreDisplay() {
  lastSavedCard.style.display = "block";
  //hide the timer
  // quizTimeStop();
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);
  //put up the results
  results.innerHTML +=
    `Your score was ${scorePerCent}%.`;
  timerCount.style.display = "none";
  quiz.style.display = "none";
}


// if the user gets the correct answers
function answerIsCorrect() {
  wrong.style.display = "none";
  right.style.display = "block";
  right.innerHTML = `<p class="message">Yes, your last answer was correct.</p>`;
}

// answer is Wrong
function answerIsWrong() {
  right.style.display = "none";
  wrong.style.display = "block";
  wrong.innerHTML = `<p class="message-wrong">sorry, your last answer was wrong.</p>`;
}

function saveLastScore() {
  const scorePerCent = Math.round((100 * score) / questions.length);
  //user score data as an object
  var lastUserScore = {
    user: user.value.trim(),
    score: `${scorePerCent}%`,
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

//click to start
start.addEventListener("click", startQuiz);
back.addEventListener("click", backQuestion);
forward.addEventListener("click", forwardQuestion);

save.addEventListener("click", function (event) {
  event.preventDefault();
  saveLastScore();
  renderLastScore();
  window.location.reload();
  // document.getElementById("page-refresh").style.display = "block";
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastScore function will also execute
  renderLastScore();
}
init();
