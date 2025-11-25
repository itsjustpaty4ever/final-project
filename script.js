console.log("code running");
let index = 0;
//creating an array of questions(ai helped with the layout and i edited the questions)
let questions = [
    {
         question: "What is the capital city of France?",
         options : ["Lille" , "Paris" , "Nice","Bourges"],
         correct: 1
    },
    {
         question: "How many continents are there?",
         options : ["9" , "4" , "13","7"],
         correct: 3
    },
    {
        question : "What planet is closest to the sun?",
        options : ["Mercury" , "Mars" , "Neptune" , "Pluto"],
        correct: 0  
    },
    {
        question : "what is H2O commonly known as?" ,
        options : ["Soda" , "Water", "Dr.Pepper" , "Soap"],
        correct : 2
    },
    {
       question : "What is the main ingrediant of guacamole?",
       options : ["Apple" , "Avocado" , "Kiwi" , "Tomatos"],
       correct : 1
    }
];

//setting 0 as the score and the current question 
let currentQuestion = 0;
let score = 0;

//next i will begin to take the information from inside the array questions and print it to the live screen

//i used ai for the explanation and i changed the function name and did the coding myself
function printQuestion(){
//setting the Ids so they have a variable
     let question = document.getElementById("question");
     let optionZero = document.getElementById("option-0");
     let optionOne = document.getElementById("option-1");
     let optionTwo = document.getElementById("option-2");
     let optionThree = document.getElementById("option-3");

     let radio = document.getElementById("answer");
     //getting the data from the array specifically the questions
     // (index is the value of whatever is inside the array)
     if(currentQuestion < questions.length){
          let data = questions[currentQuestion];

          //getting the information from inside the options
          question.innerText = data.question;
          console.log(question);

          //figure out how to print the answers to screen
          optionZero.innerText = data.options[0];
          console.log(optionZero);

          optionOne.innerText = data.options[1];
          console.log(optionOne);

          optionTwo.innerText = data.options[2];
          console.log(optionTwo);

          optionThree.innerText = data.options[3];
          console.log(optionThree);
     }

}

function resetAnswers(){
     let radioZero = document.getElementById("radio-0");
     radioZero.checked = false;

     let radioOne = document.getElementById("radio-1");
     radioOne.checked = false;

     let radioTwo = document.getElementById("radio-2");
     radioTwo.checked = false;

     let radioThree = document.getElementById("radio-3");
     radioThree.checked = false;
}

function nextQuestion(){
     resetAnswers()
     //this makes sure that the current value of questions matchs with the arrays index and stops player from going further
     currentQuestion = currentQuestion + 1;
     if (currentQuestion < questions.length){
          printQuestion();
     }
}


printQuestion(currentQuestion);
