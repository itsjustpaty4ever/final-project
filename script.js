// Simple Quiz script
// Flow: show a question -> user picks an option -> click Next -> score is updated -> next question shown
console.log("code running");
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
        question : "What is H2O commonly known as?" ,
        options : ["Soda" , "Water", "Dr.Pepper" , "Soap"],
        correct : 1
    },
    {
       question : "What is the main ingrediant of guacamole?",
       options : ["Apple" , "Avocado" , "Kiwi" , "Tomatos"],
       correct : 1
    },
    {
       question : "How may sides does a pentagon have?",
       options : ["3" , "8", "10", "5"],
       correct : 3
    },
    {
       question : "What is the fastest animal?",
       options : ["Sloth","Pibble" ,"Cheetah" , "Otter"],
       correct : 2
    },
    {
       question : "What insect produces honey?",
       options : ["Bee" , "Ant","Butterfly","Ladybug"],
       correct : 0
    },
    {
       question : "What color do you get from mixing red and blue?",
       options : ["Blue", "Orange","Purple","Yellow"],
       correct : 2
    },
    {
       question : "Who lives in a pineapple under the sea?",
       options : ["Carly", "Mr.Adams","Elsa" ,"Spongebob" ],
       correct : 3
    }
];

//setting 0 as the score and the current question 
let currentQuestion = 0;
let score = 0;
let quizResults = [];
//next i will begin to take the information from inside the array questions and print it to the live screen

//i used ai for the explanation and i changed the function name and did the coding myself
function printQuestion(){
     // Get the HTML elements where we will put text
     let question = document.getElementById("question");
     let option0 = document.getElementById("option-0");
     let option1 = document.getElementById("option-1");
     let option2 = document.getElementById("option-2");
     let option3 = document.getElementById("option-3");

     // This function only shows the question and options on the page.
     if (currentQuestion < questions.length) {
          let data = questions[currentQuestion];

          // Put the question text into the page
          question.innerText = data.question;

          // Put each option text into the page
          option0.innerText = data.options[0];
          option1.innerText = data.options[1];
          option2.innerText = data.options[2];
          option3.innerText = data.options[3];
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
     // Find which answer the user clicked
     let radios = document.getElementsByName("answer");
     let userAnswer = null;
     for (let i = 0; i < radios.length; i = i + 1) {
          if (radios[i].checked) {
               userAnswer = Number(radios[i].value);
               break; // stop the loop when checked radio is found
          }
     }

         // checking if correct answer matches the array
         if (userAnswer !== null && currentQuestion < questions.length) {
               let wasCorrect = storeQuestionResult(currentQuestion, userAnswer);
               if (wasCorrect) {
                    score = score + 1;
                    let scoreElement = document.getElementById("score-display");
                    if (scoreElement) {
                         scoreElement.innerText = score;
                   }
              }
         }

     currentQuestion = currentQuestion + 1;
     if (currentQuestion < questions.length) {
          printQuestion();
          // clear previously selected radios so the next question starts with none checked
          resetAnswers();
     } else {
          document.getElementById("quiz").classList.add("hidden");
          document.getElementById("results").classList.remove("hidden");
          
          // Update the final score display
          document.getElementById("score-display").innerText = score;
          document.getElementById("total").innerText = questions.length;

          displaySummary()
     }

}

let restartButton = document.getElementById("restart-btn");
//function restartQuiz(){
     // reload the page
    // window.location.reload();
//}

document.addEventListener("click",function(e) {
     if(e.target.id === "restart-btn"){
          console.log("button clicked attemp 1" + Date.now());
          console.log("about to reload page");
          window.location.reload();

     }
});

// Only add the event listener if the button exists in the page
//if (restartButton) {
     //restartButton.addEventListener("click", restartQuiz);
//}
printQuestion(currentQuestion);


//AI helped create this 
// This function will handle storing each question's result
function storeQuestionResult(questionIndex, userAnswer) {
    // Parameter explanations:
    // questionIndex: which question number we're on
    // userAnswer: what the user selected (0, 1, 2, or 3)
    
    let correctIndex = questions[questionIndex].correct;
    let isCorrect = userAnswer === correctIndex;
    
    // Store all the info we need for the summary
    quizResults.push({
        questionText: questions[questionIndex].question,
        userAnswer: userAnswer,
        correctAnswer: correctIndex,
        userAnswerText: questions[questionIndex].options[userAnswer],
        correctAnswerText: questions[questionIndex].options[correctIndex],
        isCorrect: isCorrect
    });
    
    return isCorrect; // Return true/false so we know if they got it right
}

// Super simple version - just show the questions they missed
function displaySummary() {
    let summarySection = document.getElementById("summary-section");
    let htmlText = "<h3>Questions You Missed:</h3>";
    
    // Check each result
    for (let i = 0; i < quizResults.length; i++) {
        if (quizResults[i].isCorrect === false) {
            htmlText = htmlText + "<p>Question: " + quizResults[i].questionText + "</p>";
            htmlText = htmlText + "<p>Correct Answer: " + quizResults[i].correctAnswerText + "</p>";
            htmlText = htmlText + "<br>";
        }else{
          htmlText = htmlText + "Full Marks!";
        }
    }
    
    summarySection.innerHTML = htmlText;
}
