document.addEventListener('DOMContentLoaded', () => {
    const quizContainer=document.getElementById("quiz-container");
    const questionContainer=document.getElementById("question-container");
    const questionText=document.getElementById("question-text");
    const choiceList=document.getElementById("choices-list");
    const nextButton=document.getElementById("next-btn");
    const resultContainer=document.getElementById("result-container");
    const restartButton =document.getElementById("restart-btn");
    const startButton =document.getElementById("start-btn");

    const questions=[{
        question:"What is the capital of France?",
        choices:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Paris"
    },{
        question:"What is the capital of Germany?",
        choices:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Berlin"
    },{
        question:"What is the capital of Spain?",
        choices:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Madrid"
    },{
        question:"What is the capital of England?",
        choices:["Paris","London","Berlin","Madrid"],
        correctAnswer:"London"
    }];

    let currentQuestionIndex=0;
    let score=0;

    startButton.addEventListener("click",startQuiz); //same as our regular function but defining the func outside
    function startQuiz(){
        startButton.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }
    function showQuestion(){
        nextButton.classList.add('hidden');
        questionText.textContent= questions[currentQuestionIndex].question;
    }
});