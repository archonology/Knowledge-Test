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
    choiceC: "When used with a WHERE clause, it will delete a specific record in a table. Without the where clause, it will delete all records in a table.",
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
    choiceA: "git cherry-pick <hash>",
    choiceB: "git cherry-pick <branch-name>",
    choiceC: "git cherry-pick <commit-message>",
    choiceD: "git cherry-pick <log>",
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
    question: "What is an execution context in JavaScript?",
    choiceA: "The execution context is the function's reference to the keyword 'this'.",
    choiceB: "The execution context is a reference to the scope.",
    choiceC: "The execution context is the environment in which the JavaScript code is executed.",
    choiceD: "The execution context is the function's definition.",
    correct: "C",
  },
  {
    question: "Which of the following statements is false regarding the functional execution context?",
    choiceA: "A global variable value can be changed in a functional execution context.",
    choiceB: "A functional execution context contains a reference to the global variables",
    choiceC: "A functional execution context is created whenever a function is invoked",
    choiceD: "A functional execution context can be shared between functions",
    correct: "D",
  },
  {
    question: "If we are to implement a stack with an array, which pair of methods would we use?",
    choiceA: "unshift/push",
    choiceB: "shift/pop",
    choiceC: "shift/push",
    choiceD: "push/pop",
    correct: "D",
  },
  {
    question: "What is the best data structure to use if we need to implement a storage structure to hold requests that need to be processed by a web server?",
    choiceA: "Stack",
    choiceB: "Dictionary/key-value pair",
    choiceC: "List/Array",
    choiceD: "queue",
    correct: "D",
  },
  {
    question: "What is the function of the event loop?",
    choiceA: "The event loop constantly checks whether or not the call stack is empty. If it's empty, new functions are added from the callback queue.",
    choiceB: "The event loop places functions into the callback queue if the callstack is full",
    choiceC: "The event loop processes callback functions in the callback queue",
    choiceD: "The event loop pushes functions off the call stack once they are finished.",
    correct: "A",
  },
  {
    question: "What is a higher order function?",
    choiceA: "A function that can accept another function as an argument and/or a function that returns a function.",
    choiceB: "A function that is limited to accepting only another function as an argument but it must return an object or array.",
    choiceC: "A function inside of an object that can only accept arrays and objects as arguments.",
    choiceD: "A function that sits at the top of your JavaScript file that can only be called as an argument.",
    correct: "A",
  },
  {
    question: "What is a closure?",
    choiceA: "A function inside of another function with access to the outer function's state.",
    choiceB: "An object enclosed inside of a function with access to the global state.",
    choiceC: "A variable declared inside of the global scope.",
    choiceD: "A data structure JavaScript uses to store function as variables.",
    correct: "A",
  },
  {
    question: "Which statement is not true about factory functions?",
    choiceA: "Creates objects with functions",
    choiceB: "Lets us take advantage of private variables",
    choiceC: "Binds 'this' to the constructor function.",
    choiceD: "Uses lexical environment",
    correct: "C",
  },
  {
    question: "How do closures differ from constructors?",
    choiceA: "encapsulation",
    choiceB: "Uses the 'this' keyword",
    choiceC: "Uses the 'new' keyword",
    choiceD: "Rigid hierarchical trees",
    correct: "A",
  },
  {
    question: "What is not an advantage of using the closure pattern vs. the event delegation pattern to dynamically create an element in the DOM that can track its own state?",
    choiceA: "Limits DOM reference",
    choiceB: "Eliminate the need for data-* attributes",
    choiceC: "Limits the number of event handlers",
    choiceD: "Privatization of variables",
    correct: "C",
  },
  {
    question: "What is a requirement that both a recursive function and a JavaScript `while` loop have?",
    choiceA: "Recursive functions and `while` loops don't have similar requirements.",
    choiceB: "They both need to have an iterator to keep track of how many times they are to execute.",
    choiceC: "They both need to return a single value when they are finished.",
    choiceD: "They both need to have an exit condition so they don't run indefinitely.",
    correct: "D",
  },
  {
    question: "What condition does the input array need to be in for a binary search algorithm to work?",
    choiceA: "The input array must be unsorted.",
    choiceB: "The input array must be sorted.",
    choiceC: "The input array must be strings.",
    choiceD: "The input array must be an array of objects.",
    correct: "B",
  },
  {
    question: "In a shell script file, what does the `#!/bin/sh` on the first line mean?",
    choiceA: "It provides context as to how the file should be interpreted and executed.",
    choiceB: "It is a comment that lists the path of the file being executed.",
    choiceC: "It is an import command we need to use so the code can be understood and executed.",
    choiceD: "It's a comment that helps the developer understand the file better.",
    correct: "A",
  },
  {
    question: "Why do we need a temporary variable when swapping values in a bubble sort?",
    choiceA: "The variable is used to store one of the values being swapped so it isn't overwrriten.",
    choiceB: "The variable is used to determine whether or not the sort algorithm is finished.",
    choiceC: "The variable is used to determine if the swapping function has completed.",
    choiceD: "The variable is used to store the sorted array for returning.",
    correct: "A",
  },
  {
    question: "Which of the following statements best explains how data is stored in MongoDB?",
    choiceA: "MongoDB stores data as documents. A group of related documents are stored in a collection. A database contains one or more collections.",
    choiceB: "MongoDB stores data as rows. A group of related rows are stored as a table. A group of tables is a collection.",
    choiceC: "MongoDB stores data as rows. A group of related rows is stored as a database. A collection contains one or more databases.",
    choiceD: "MongoDB stores data as documents. A group of documents is stored in a database. A collection contains one or more databases.",
    correct: "A",
  },
  {
    question: "What does the shell command `db.inventory.deleteOne( { label: “DeleteMe”} );` do?",
    choiceA: "Delete the first document that matches the filter. If there are multiple matches, only the first document will be deleted.",
    choiceB: "Delete all documents that match the filter.",
    choiceC: "Delete a single document that matches the filter, but only if there is just one match. If two or more documents match the filter condition, no documents will be deleted.",
    choiceD: "Nothing. `deleteOne()` is not a valid method.",
    correct: "A",
  },
  {
    question: "Which of the following is NOT true about Mongoose?",
    choiceA: "Mongoose replaces the underlying MongoDB database with a new database that is defined by a schema.",
    choiceB: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
    choiceC: "Mongoose uses a schema to define the shape and structure of MongoDB documents",
    choiceD: "Mongoose models are used to create and read data from the underlying MongoDB database.",
    correct: "A",
  },
  {
    question: "What is the difference between an instance method and a static method?",
    choiceA: "Instance methods perform an action on a specific instance, or document, whereas static methods perform actions on the entire model.",
    choiceB: "Instance methods perform a one-time action, whereas static methods can be reused. Both are primarily used on the entire model.",
    choiceC: "Instance methods perform an action on an entire model, or instance, whereas static methods perform an action on an entire database.",
    choiceD: "Instance methods are used to perform an action on data that is likely to change over time, whereas static methods are used to perform an action on data that is not likely to change over time.",
    correct: "A",
  },
  {
    question: "Which of the following is NOT true about subdocuments?",
    choiceA: "Each subdocument has its own `_id` by default.",
    choiceB: "Subdocuments have no relationship to embedded documents in MongoDB.",
    choiceC: "Subdocuments are a great way to model relationships among connected data.",
    choiceD: "In Mongoose, using subdocuments means you can nest schemas within other schemas.",
    correct: "B",
  },
  {
    question: "Which of the following best describes aggregation operations?",
    choiceA: "When performing an aggregation operation, the `$match` stage is used to make sure the data includes only numeric values.",
    choiceB: "Aggregation operations that work in MongoDB will not work with Mongoose. They are not compatible.",
    choiceC: "Aggregation operations compute results from each document individually, and return a result for each instance..",
    choiceD: "Aggregation operations compute data on a group of documents and return a single, summary result.",
    correct: "D",
  },
  {
    question: "Which of the following is NOT true about virtuals?",
    choiceA: "Virtuals are often used for computed properties.",
    choiceB: "Mongoose does not do any type coercion on virtuals.",
    choiceC: "Virtuals are properties that are stored in MongoDB.",
    choiceD: "One limitation of Mongoose virtuals is that you cannot query based on the computed property.",
    correct: "C",
  },
  {
    question: "What does the `populate()` method do in Mongoose?",
    choiceA: "The `populate()` method allows you to merge two documents from the same collection.",
    choiceB: "Similar to MongoDB's join-like `$lookup` aggregation operator, `populate()` allows you to reference documents that are found in the same database but different collections.",
    choiceC: "Similar to seeding data, the `populate()` method allows you upload data from an external file source, usually in bulk.",
    choiceD: "The `populate()` method allows you to replace data with data from another database.",
    correct: "B",
  },
  {
    question: "Which of the following is NOT true about nested paths and subdocuments in Mongoose?",
    choiceA: "There is no difference between a subdocument and a nested path.",
    choiceB: "In nested paths, the child path must always be defined.",
    choiceC: "In subdocuments, the child path does NOT always have to be defined.",
    choiceD: "In Mongoose 5, `Document#set()` merges when you call it on a nested path.",
    correct: "A",
  },
  {
    question: "Which statement best describes GitHub Packages?",
    choiceA: "To install a GitHub package, you need to create an `.env` and include your personal access token.",
    choiceB: "To share a package, you must first publish it to the npm registry.",
    choiceC: "GitHub Packages allows you to publish your code as a package and easily share it with other developers.",
    choiceD: "GitHub Packages allows you to store your Node modules safely in your repo.",
    correct: "C",
  },
  {
    question: "Which of the following is NOT a feature of NoSQL?",
    choiceA: "No need for an ORM",
    choiceB: "Schema agnostic",
    choiceC: "Self-contained aggregate functions",
    choiceD: "Relational data tables",
    correct: "D",
  },
  {
    question: "Which of the following will have a positive impact on your website?",
    choiceA: "Using unnecessary JavaScript.",
    choiceB: "Slow page loads.",
    choiceC: "Accessibility",
    choiceD: "No 'alt' text on images.",
    correct: "C",
  },
  {
    question: "How does 'webpack --watch' know when to reload after a change is made?",
    choiceA: "Webpack checks the dependency graph for any changes that have been made.",
    choiceB: "Webpack triggers every time we save our code.",
    choiceC: "Webpack uses a 'git diff' to check whether commits are different.",
    choiceD: "Webpack runs rebuild on a set timer.",
    correct: "A",
  },
  {
    question: "What is a bundle in webpack?",
    choiceA: "A JSON file that maps and caches all of the static assets for our website.",
    choiceB: "An output file that converts all of our JavaScript to next-gen JavaScript.",
    choiceC: "A configuration file that handles processing non-JavaScript files.",
    choiceD: "The output files that contain all of the modules necessary to run the application.",
    correct: "D",
  },
  {
    question: "What is a loader in webpack?",
    choiceA: "A pre-generated dependency graph that our website can use as a template.",
    choiceB: "Loaders pre-process and transform non-JavaScript files.",
    choiceC: "A webpack plugin that makes network requests load quicker.",
    choiceD: "A webpack-generated file that holds the modules of our website.",
    correct: "B",
  },
  {
    question: "How does HTMLWebpackPlugin benefit us?",
    choiceA: "Allows you to use HTML with a Webpack project.",
    choiceB: "Allows you to use a templating engine, such as handlebars.js.",
    choiceC: "Generates an HTML5 page with all of our webpack bundles.",
    choiceD: "Allows you to use bundled JavaScript files inside an HTML document.",
    correct: "C",
  },
  {
    question: "Why does Workbox need a bundler like webpack?",
    choiceA: "To minify the code",
    choiceB: "To reduce loading time",
    choiceC: "Service workers are not compatible with JavaScript modules, which is a necessity when it comes to importing Workbox modules.",
    choiceD: "To increase performance",
    correct: "C",
  },
  {
    question: "Which of the following is NOT an operation that can be performed by service workers?",
    choiceA: "Proxy network requests",
    choiceB: "Push notifications",
    choiceC: "Write to the file system",
    choiceD: "Update the DOM",
    correct: "D",
  },
  {
    question: "Which of the following is NOT a way to match a request using workbox-routing?",
    choiceA: "a boolean",
    choiceB: "a callback function",
    choiceC: "a regular expression",
    choiceD: "a string",
    correct: "A",
  },
  {
    question: "Which caching strategy should be used if the website frequently needs updated data?",
    choiceA: "Stale while revalidate",
    choiceB: "Cache first",
    choiceC: "Network first",
    choiceD: "Cache only",
    correct: "C",
  },
  {
    question: "Which of the following is NOT an advantage of client-side rendering?",
    choiceA: "Rich interactions",
    choiceB: "Enables partial page loading",
    choiceC: "Better SEO",
    choiceD: "Better SEO",
    correct: "C",
  },
  {
    question: "Which of the following keys must be present in a manifest.json file?",
    choiceA: "scope",
    choiceB: "name",
    choiceC: "description",
    choiceD: "background_color",
    correct: "B",
  },
  {
    question: "Which of the following is a good example of a use case for IndexedDB?",
    choiceA: "When storing a large catalogue of library books in a user's browser.(large amounts of structured data)",
    choiceB: "When managing a session for a user.",
    choiceC: "When storing information about a single blog post in a user's browser.",
    choiceD: "When storing a handful of images for the homepage of an application.",
    correct: "A",
  },
  {
    question: "After creating a database and setting up an object store with IndexedDB, Michael must now add data. Which CRUD method should he use to add new data?",
    choiceA: ".put()",
    choiceB: ".add()",
    choiceC: ".insert()",
    choiceD: ".create()",
    correct: "B",
  },
  {
    question: "Omar has written a Git hook that reminds him to use proper branch naming. Which subdirectory does this script need to be included in to enable it?",
    choiceA: ".git/new/",
    choiceB: ".hooks/",
    choiceC: ".git/",
    choiceD: ".git/hooks/",
    correct: "D",
  },
  {
    question: "Which of the following is NOT a part of the core PWA checklist, or what an app needs in order to be a Progressive Web Application?",
    choiceA: "The app is installable.",
    choiceB: "The app is built using Webpack.",
    choiceC: "The app works in any browser.",
    choiceD: "The app provides a custom offline page.",
    correct: "B",
  },
  {
    question: "What is the difference between `npx create-react-app` and `npx create-react-app app`?",
    choiceA: "`npx create-react-app` will return usage information while `npx create-react-app app` will create a new React app with the name 'app'.",
    choiceB: "`npx create-react-app` installs the create-react-app npm package, while the other command `npx create-react-app app` installs the the create-react-app npm package into a sub directory called app.",
    choiceC: 'npx create-react-app sets up tooling while `npx create-react-app app` creates a new React app called "app".',
    choiceD: '`npx create-react-app` will create an application with a randomly generated project name, while `npx create-react-app app` will create a React application with the name "app".',
    correct: "A",
  },
  {
    question: "Which of the following statements is true rendering rendering elements in React?",
    choiceA: "React elements are costly to memory.",
    choiceB: "React elements are objects that represent JSX elements. React elements also describe what you see on the screen. An element is not an instance of an object, instead it is a way to tell React what you want to see on the screen.",
    choiceC: "React components and React elements are the same thing.",
    choiceD: "React elements are displayed by modifying the DOM directly.",
    correct: "B",
  },
  {
    question: "What is a React component?",
    choiceA: "React components are isolated parts of the UI abstracted into their own distinct unit. They accept props and return React elements.",
    choiceB: "React components describe individual HTML-like elements in a React application.",
    choiceC: "React components are dependencies used in a React app.",
    choiceD: "React components are a type of React hook.",
    correct: "A",
  },
  {
    question: "Which of the following is NOT true of JSX expressions?",
    choiceA: "JSX expressions are not strings.",
    choiceB: "JSX expressions are not HTML.",
    choiceC: "JSX is a syntax extension to JavaScript.",
    choiceD: "JSX is a templating language",
    correct: "D",
  },
  {
    question: "Which of the following accurately describes props as they related to React?",
    choiceA: "React props are restricted to the component they are in.",
    choiceB: "React props are restricted to the component they are in.",
    choiceC: "Props, short for properties, are a way of passing read-only data from parent to child in a unidirectional flow.",
    choiceD: "Props are multidirectional - meaning they can be passed down to a component and up to a parent.",
    correct: "C",
  },
  {
    question: "Which of the following examples correctly initializes a state variable called `count` with a default value of 0 within a functional component?",
    choiceA: "const [count, setCount] = useState(0)",
    choiceB: "const count = useState('0')",
    choiceC: "setCount('0')",
    choiceD: "const [count, setCount] = setState('0)",
    correct: "A",
  },
  {
    question: "Which of the following statements is FALSE regarding event handling in React?",
    choiceA: "Event listeners must be added using the `.addEventListener` method",
    choiceB: "React event handlers can accept arguments",
    choiceC: "You can pass functions as event handlers rather than strings.",
    choiceD: "React event names use camelCase rather than lowercase.",
    correct: "A",
  },
  {
    question: "Which of the following accurately describes a controlled input element?",
    choiceA: "An input element that can only accept a list of characters",
    choiceB: "An input element that is controlled by the value of another input element",
    choiceC: "An input element that can only accept a list of characters",
    choiceD: "An input element with a value that is controlled by a component’s state",
    correct: "D",
  },
  {
    question: "Which of the following code snippets is a POST request correctly implementing the Fetch API?",
    choiceA: "fetch('https://example.com/profile', { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(data), }) .then(response => response.json()) .then(data => console.log(data))",
    choiceB: "app.post('/api/books', (req, res) => res.json(books)",
    choiceC: "fetch('https://example.com/profile', { method: 'POST', }) .then(response => response.json()) .then(data => console.log(data))",
    choiceD: '$.post( "/api/books", { name: "Eloquent JavaScript", }, function (data, status) { alert("Data: " + data + "\nStatus: " + status); } );',
    correct: "A",
  },
  {
    question: "Which of the following is NOT true of React's useEffect hook?",
    choiceA: "The useEffect hook, by default, runs each time a component renders or updates",
    choiceB: "The useEffect hook requires a dependency array to be passed as it's second argument.",
    choiceC: "The useEffect hook is similar to lifecycle methods found in class based React components.",
    choiceD: "The useEffect hook is great for when you need to run some code after the DOM has rendered.",
    correct: "B",
  },
  {
    question: "Which of the following conditional rendering examples would NOT render 'Hello World' on screen?",
    choiceA: "function App() { const notifications = ['Hello World'] return ( <div> { notifications.length > 0 ? notifications : 'No messages'} </div> ); }",
    choiceB: "function App() { const notifications = ['Hello World'] if (notifications) { return notifications } else { return <h1>No messages</h1> }",
    choiceC: "function App() { const notifications = ['Hello World'] return ( <div> {'No messages' || notifications } </div> ); }",
    choiceD: "function App() { const notifications = ['Hello World'] return ( <div> {notifications.length > 0 && notifications} </div> ); }",
    correct: "C",
  },
  {
    question: "Which of the following is NOT correct regarding testing React applications.",
    choiceA: "The expect() method in Jest would fall into the 'act' category for the 'act, arrange, assert' pattern in React testing.",
    choiceB: 'The `act()` method included with Jest is named after the "act" portion of the act, arrange, assert pattern.',
    choiceC: "Checking a components ability to render is a good condition to include in your tests",
    choiceD: 'The arrange portion of the "act, arrange, assert" pattern involves declaring variables or conditions for the test to execute.',
    correct: "A",
  },
  {
    question: "Which of the following is NOT a benefit of deploying to GitHub pages?",
    choiceA: "GitHub pages can optionally run a build script that is declared in your package.json file when deploying your page.",
    choiceB: "GitHub pages allows you to host a backend such as an express server or a MongoDB database.",
    choiceC: "Github pages is for for serving static HTML, CSS, and JavaScript files directly from your repository",
    choiceD: "GitHub pages can be used to create a personal page or a project page.",
    correct: "B",
  },
  {
    question: "Which of the following statements regarding rendering lists and keys in React is FALSE?",
    choiceA: "With React, you can create collections of different elements and render them using the curly brace syntax `{}`.",
    choiceB: "React can determine what has changed or updated through the use of key attributes on each element. Keys should be a stable piece of information that can be added to each element in the array to uniquely identify them.",
    choiceC: "Components will still render if you forget to assign them a key, but it is not good practice.",
    choiceD: "When rendering a list of items using .map(), it is recommended to use the index as the key attribute on each element.",
    correct: "D",
  },
  {
    question: "What is the proper syntax to include an argument with a query in GraphQL?",
    choiceA: "person(id: 1234)",
    choiceB: "person({ id: 1234 })",
    choiceC: 'person("id", 1234)',
    choiceD: "person(id=1234)",
    correct: "A",
  },
  {
    question: "What option in the client-side `package.json` file needs to be set up for our React application to prefix API requests to the server with the server's address in development?",
    choiceA: '"prefix": "http://localhost:3001"',
    choiceB: '"proxy": "http://localhost:3001"',
    choiceC: 'develop": "react-scripts develop"',
    choiceD: '`"proxy": "http://localhost:3001"`, but it goes into the server-side `package.json` instead.',
    correct: "B",
  },
  {
    question: "What are the object properties returned by the `useQuery()` hook?",
    choiceA: "error and data",
    choiceB: "error and data",
    choiceC: "loading, error, data",
    choiceD: "It will return whatever the name of the query is.",
    correct: "C",
  },
  {
    question: "What is stored in the array returned by the `useMutation()` hook?",
    choiceA: "The first position stores a function to execute the mutation and the second position stores an object of data about the current state of the mutation.",
    choiceB: "The return value of the mutation's execution.",
    choiceC: "The first position stores an object of data about the current state of the mutation and the second position stores a function to execute the mutation.",
    choiceD: "It holds loading and error state information about the mutation.",
    correct: "A",
  },
  {
    question: "Where do we include the functionality for updating the cache when we perform a mutation that creates data?",
    choiceA: "When we invoke the `useMutation()` hook.",
    choiceB: "As an argument when we execute the mutation function returned by the `useMutation()` hook.",
    choiceC: "With the GraphQL mutation.",
    choiceD: "Apollo Client adds it for us.",
    correct: "A",
  },
  {
    question: "Which of the following is NOT one of the three main parts of the JSON web token?",
    choiceA: "Signature",
    choiceB: "Header",
    choiceC: "Payload",
    choiceD: "Secret",
    correct: "D",
  },
  {
    question: "What do we use the `jwt-decode` library for?",
    choiceA: "Sign a JSON web token",
    choiceB: "Reading data from a signed JSON web token",
    choiceC: "Validate a JSON web token",
    choiceD: "Create a JSON web token with a secret and expiration",
    correct: "B",
  },
  {
    question: "Which of the following is the correct way to add an authentication token to an HTTP header?",
    choiceA: '{ "Authentication": "Bearer <token>" }',
    choiceB: '{ "Authorization": "Bearer <token>" }',
    choiceC: '{ "Authorization": "Basic <token>" }',
    choiceD: '{ "Authentication": "Basic <token>" }',
    correct: "B",
  },
  {
    question: "Which of the following can you do with GitHub Actions?",
    choiceA: "Create a GitHub Action to automatically run a linter against every pull request to ensure the code meets your agreed upon standards",
    choiceB: "Host an Express.js server on GitHub's servers",
    choiceC: "Use JSX to define the events, jobs, and steps",
    choiceD: "Create a pull request from the command line",
    correct: "A",
  },
  {
    question: "Although we can technically build whatever we want in MERN, what is NOT the best use case for this stack?",
    choiceA: "Applications that are JSON-heavy",
    choiceB: "Applications at the enterprise level",
    choiceC: "Applications that are cloud-native",
    choiceD: "Applications that have dynamic web interfaces",
    correct: "B",
  },
  {
    question: "What is the purpose of the Provider component?",
    choiceA: "The <Provider> component makes a given context available to any nested components that need access to global state.",
    choiceB: "The <Provider> component consumes state from nested components and passes data up to the parent component.",
    choiceC: "The <Provider> component is required to render any elements to the page.",
    choiceD: "The <Provider> component allows you to make fetch and retrieve data from third party APIs.",
    correct: "A",
  },
  {
    question: "What is the purpose of the Consumer component?",
    choiceA: "The <Consumer> component allows nested components to subscribe to a given context within a functional component.",
    choiceB: "The <Consumer> component allows usage of user input from forms or input fields inside a component.",
    choiceC: "The <Consumer> component accepts a value prop that gets passed to any component within the Consumer.",
    choiceD: "The <Consumer> component is needed to consume network requests from a server.",
    correct: "A",
  },
  {
    question: "Which of the following statements regarding Reducers is FALSE?",
    choiceA: "Reducers are not able to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.",
    choiceB: "Reducers can utilize switch statements to perform the appropriate action.",
    choiceC: "Reducers are functions that take the current state and an action as arguments and return a new state.",
    choiceD: "A Reducer is a form of middleware that compresses minifies your React application before sending it to the client",
    correct: "D",
  },
  {
    question: "Which of the following accurately describes an action as they relate to Reducer functions?",
    choiceA: "Actions are functions that update data locally inside a component.",
    choiceB: "Actions refer to anything inside the `actions.js` file and are nothing more than variables set to the value of a string.",
    choiceC: "Actions is the name of a third party npm package used to reflect changes to the virtual DOM.",
    choiceD: "Actions are JavaScript objects that have a `type` and an optional `payload` property. Actions represent events that can take place within an application. They describe an intent to mutate data.",
    correct: "D",
  },
  {
    question: "Which of the following is a correct implementation of the `useReducer` hook inside a functional React component?",
    choiceA: "import React, {useReducer} from 'react'; import { reducer } from '../utils/reducers'; const initialState = { count: 0 }; export default function count Component() { const [state, dispatch] = useReducer(reducer, initialState); return <div> the value of count is {state.count} </div>; }",
    choiceB: "import React, {useState} from 'react'; import { reducer } from '../utils/reducers'; const initialState = { count: 0 }; export default function count Component() { const [state, dispatch] = useState(reducer, initialState); return <div> the value of count is {state.count} </div>; }",
    choiceC: "import React, {useReducer} from 'react'; const initialState = { count: 0 }; export default function count Component() { const [state, dispatch] = useReducer(); return <div> the value of count is {state.count} </div>; }",
    choiceD: "const useReducer = (state, action) => newState",
    correct: "A",
  },
  {
    question: "Which of the following is NOT a built-in React hook?",
    choiceA: "useAnchor()",
    choiceB: "useState()",
    choiceC: "useContext()",
    choiceD: "useEffect()",
    correct: "A",
  },
  {
    question: "Which one of the following statements regarding React Router is TRUE?",
    choiceA: "The react-router-dom package is built-in to React and available for use after running create-react-app",
    choiceB: "<Link> components can existing without being nested inside a <Router> component.",
    choiceC: "<BrowserRouter> makes use of the history API built in to most modern web browsers.",
    choiceD: "<Link> components also use 'href' attributes to specify what route to use.",
    correct: "C",
  },
  {
    question: "Where do we include the functionality for updating the cache when we perform a mutation that creates data?",
    choiceA: "As an argument when we execute the mutation function returned by the `useMutation()` hook.",
    choiceB: "With the GraphQL mutation.",
    choiceC: "When we invoke the `useMutation()` hook.",
    choiceD: "Apollo Client adds it for us.",
    correct: "C",
  },
  {
    question: "Which of the following is the correct way to add an authentication token to an HTTP header?",
    choiceA: '{ "Authentication": "Basic <token>" }',
    choiceB: '{ "Authorization": "Basic <token>" }',
    choiceC: '{ "Authentication": "Bearer <token>" }',
    choiceD: '{ "Authorization": "Bearer < token > " }',
    correct: "D",
  },
  {
    question: "Which of the following are returned from the useReducer hook?",
    choiceA: "An array containing a state object and a dispatch function.",
    choiceB: "A copy of state",
    choiceC: "The reducer function",
    choiceD: "An array containing the possible actions for a reducer and the reducer function itself.",
    correct: "A",
  },
  {
    question: "Which of the following code snippets is valid syntax for a type definition that can be used with Apollo Client?",
    choiceA: "interface Author { id: number; description: string; }",
    choiceB: 'gql` type Author { id: 5 firstName: "admin", lastName: "root", posts: postsArr }`',
    choiceC: "type Author { id: Int! firstName: String lastName: String posts: [Post] }",
    choiceD: "gql` type Author { id: Int! firstName: String lastName: String posts: [Post] }`",
    correct: "D",
  },
  {
    question: "Which of the following statements accurately how Stripe can be useful to developers?",
    choiceA: "Stripe is a online payment processing service that offers developers easy-to-use APIs for making secure transactions in web apps.",
    choiceB: "Stripe is a lightweight CSS framework that can be added to any project using a CDN or by adding to your project using npm.",
    choiceC: "Stripe is a third party npm package that allows developers to send and receive HTTP requests with a few lines of code.",
    choiceD: "Stripe is a cloud provider that will host and and provision your own online store.",
    correct: "A",
  },
  {
    question: 'Given an action called "UPDATE_ACCOUNT_NAME", what is the proper syntax for dispatching an action in a functional component using the useReducer hook?',
    choiceA: "store.dispatch(UPDATE_ACCOUNT_NAME(newName))",
    choiceB: "dispatch({ type: UPDATE_ACCOUNT_NAME, userName: newName, }); //(The dispatch method gets returned from the useContext hook and accepts an object as an argument. The correct syntax is such that dispatch is invoked like any other function. It is then passed an object containing type and optional payload properties.)",
    choiceC: "dispatch([UPDATE_ACCOUNT_NAME, newName])",
    choiceD: "const updateAccountName = dispatch(newname)",
    correct: "B",
  },
  {
    question: "In order to create a GitHub workflow that will create a CI/CD pipeline to Heroku, what folders and file need to be created at the root of the repository?",
    choiceA: ".github/workflows/main.yml // When pushing a repository, GitHub will automatically look for a hidden folder called `.github` for any special configurations. To create a workflow, a workflows folder must be created inside the hidden `.github` folder, and inside of it a `.yml` file which contains all the instructions to deploy to Heroku.",
    choiceB: "main.yml",
    choiceC: ".github/workflows/main.procfile",
    choiceD: "workflows/main.yml",
    correct: "A",
  },
  {
    question: "Which of the following hooks is unique to Redux?",
    choiceA: "useEffect()",
    choiceB: "useSelector() // This hook allows access to data from the Redux store state, using a selector function. A selector function simply gets and returns data from state.",
    choiceC: "useState()",
    choiceD: "useContext()",
    correct: "B",
  },
];


var timerCount = document.getElementById("timer-count");
var timeLeft = 30;
var score = 0;
var lastQuestion = questions.length - 1;
let runningQuestion = 0;


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
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    console.log(score);
    answerIsCorrect();
  } else {
    score--;
    console.log(score);
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

// click to start test handling
start.addEventListener("click", startQuiz);
// handle back and forward buttons
back.addEventListener("click", backQuestion);
forward.addEventListener("click", forwardQuestion);

save.addEventListener("click", function (event) {
  event.preventDefault();
  saveLastScore();
  renderLastScore();
  window.location.reload();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastScore function will also execute
  renderLastScore();
}
init();
