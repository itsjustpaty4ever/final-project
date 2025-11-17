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
         question: "How many continets are there?",
         options : ["9" , "4" , "13","7"],
         correct: 3
    },
    {
        question : "What planet is closest to the sun?",
        options : ["Mercury" , "Mars" , "Neptune" , "Pluto"],
        correct: 0  
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
     let data = questions[index];

//getting the information from inside the options
     question.innerText = data.question;
     console.log(question);

     index += 1;

     //figure out how to print the answers to screen
}

//get the info from array into the variable
