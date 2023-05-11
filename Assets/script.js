const introPage = document.getElementById("intro-page");
const startQuizBtn = document.getElementById("startbtn");
const quizSections = document.querySelector(".quiz");
let timeStart = 5;
const timerEl = document.getElementById("timer");
var index = 0;
var score = 0;
var incorrect = 10;
var button1 = getElementById("option1");
var button2 = getElementById("option2");
var button3 = getElementById("option3");
var button4 = getElementById("option4");

const questionsArray = [
    {
        title: "What is 1 + 1?",
        options: ["1", "2", "3", "4"],
        answer: ["2"]
    },
    {
        title: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        answer: ["4"]
    },
    {
        title: "What is 3 + 3?",
        options: ["6", "2", "3", "4"],
        answer: ["6"]
    },
    {
        title: "What is 4+ 4?",
        options: ["1", "8", "3", "4"],
        answer: ["8"]
    },
];

var userQuestion = questionsArray[index].title;
var userChoices = questionsArray[index].options;

//I need 2 functions. Generate questions and validate answers
// function questionsDisplay() {
// };
/*event listener for showing quiz completed and hiding quiz questions*/

function startQuiz() {
    if (introPage.style.display === "none") {
        introPage.style.display = "block";
    } else {
        introPage.style.display = "none";
    }
    quizSections.style.display = "block";
    //start timer
    timerId = setInterval(clocktick, 1000);
    //start shuffling questions
    questionTitleEl.textContent  = userQuestion;
    questionOptionsEl.textContent  = userChoices;

};

function clocktick() {
    timeStart--
    // console.log("timestart", timeStart);
    timerEl.textContent = timeStart;
    if (timeStart === 0) {
        quizDone()
    }
};

function quizDone() {
    clearInterval(timerId);
    quizSections.style.display = "none";
    endScore.style.display = "block";
}

const endScore = document.querySelector(".enter-initials");
endScore.style.display = "none";

quizSections.style.display = "none";
const btnThree = document.getElementById("formsubmit");

startQuizBtn.onclick = startQuiz

//take away time from incorrect answers
//html & java sheet for highscore JSON



 // let shuffleQuestions = Math.floor(Math.random(questions.length));
    // console.log('shuffle', shuffleQuestions);