/*header*/

/*intro page that needs to "hide" and quiz page needs to "show" once start quiz button is clicked
event listener */
const introPage = document.getElementById("intro-page");
const startQuizBtn = document.getElementById("startbtn");
const quizSections = document.querySelector(".quiz");
let timeStart = 10;
let shuffleQuestions = questions.sort() = Math.floor(Math.random())
const timerEl = document.getElementById("timer");
const questions = [
    {
        title:"What is 1 + 1?",
        options:["1","2","3","4"],
        answer:["2"]
    },
    {
        title:"What is 2 + 2?",
        options:["1","2","3","4"],
        answer:["4"]
    },
    {
        title:"What is 3 + 3?",
        options:["6","2","3","4"],
        answer:["6"]
    },
    {
        title:"What is 4+ 4?",
        options:["1","8","3","4"],
        answer:["8"]
    }
];

//2 functions generate questions validate answers
function questions() {
    
}

function validate() {

}

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
};

function clocktick() {
    timeStart--
    // console.log("timestart", timeStart);
    timerEl.textContent = timeStart;
    if(timeStart === 0) {
        quizDone()
    }
}

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