//DOM Elements
const startScreen=document.getElementById("startScreen");
const quizScreen=document.getElementById("quizScreen");
const resultScreen=document.getElementById("resultScreen");
const startButton=document.getElementById("startBtn");
const questionText=document.getElementById("questionText");
const answersContainer=document.getElementById("answersContainer");
const currentQuestionspan=document.getElementById("currentQuestion");
const totalQuestionsspan=document.getElementById("totalQuestions");
const scorespan=document.getElementById("score");
const finalScorespan=document.getElementById("finalScore");
const maxScorespan=document.getElementById("maxScore");
const resultMessage=document.getElementById("resultMessage");
const restartButton=document.getElementById("restartBtn");
const progressBar=document.getElementById("progressBar");


const quizQuestions=[
{question:"What is the capital city of France?",
    answers:[
        {text:"London", correct: false},
        {text:"Berlin", correct: false},
         {text:"Paris", correct: true},
        {text:"Madrid", correct: false},
    ],
},
{question:"Which planet is known as the red planet?",
    answers:[
        {text:"Venus", correct: false},
        {text:"Mars", correct: true},
        {text:"Jupiter", correct: false},
        {text:"Saturn", correct: false},
    ],
},
{question:"What is the cleanest city in the world?",
    answers:[
        {text:"Dubai", correct: true},
        {text:"New York", correct: false},
        {text:"Paris", correct: false},
        {text:"Los Angeles", correct: false},
    ],
},
{question:"Which of these is not a programming language?",
    answers:[
        {text:"Javascript", correct: false},
        {text:"C++", correct: false},
        {text:"C", correct: false},
        {text:"Git", correct: true},
    ],
},
{question:"What is the largest ocean on Earth?",
    answers:[
        {text:"Indian Ocean", correct: true},
        {text:"Atlantic Ocean", correct: false},
        {text:"Pacific Ocean", correct: false},
        {text:"Arctic Ocean", correct: false},
    ],
},
];


//QUIZ STATE VARS
let currentQuestionIndex=0;
let score=0;
let answersDisabled=false;

totalQuestionsspan.textContent=quizQuestions.length;
maxScorespan.textContent=quizQuestions.length;

//Event Listeners
startBtn.addEventListener("click", startQuiz)
function startQuiz(){
    //reset vars
    currentQuestionIndex = 0;
    scorespan.textContent = 0;

   startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}
function showQuestion(){
    //reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionspan.textContent = currentQuestionIndex + 1;
    const progresspercent = (currentQuestionIndex / quizQuestions.length) = 100;
    progressBar.style.width = progresspercent + "%";

    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        //What is dataset? its a property of the button element that
        //  allows you to store custom data
        button.dataset.correct = answer.correct;
    })
}
restartButton.addEventListener("click", restartQuiz);
function restartQuiz(){
        console.log("Quiz restarted");
}
