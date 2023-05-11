const introPage = document.getElementById("intro-page");
const startQuizBtn = document.getElementById("startbtn");
const quizSections = document.querySelector(".quiz");
let timeStart = 100;
const timerEl = document.getElementById("timer");
var index = 0;
var score = 0;
var incorrect = 10;
var title = document.getElementById("question-title");
var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");

const questionsArray = [
    {
        title: "What is the file type for Javascript?",
        options: [".xs", ".js", ",jss", ".java"],
        answer: [".js"]
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

console.log("array length", questionsArray.length);

//function to render the questions
function renderQuestion() {
    var userQuestion = questionsArray[index].title;
    var userChoices = questionsArray[index].options;
    title.textContent = userQuestion;
    button1.textContent = userChoices[0];
    button2.textContent = userChoices[1];
    button3.textContent = userChoices[2];
    button4.textContent = userChoices[3];

    // for (var i = 0; i < questionsArray.length; i++) {
    // };
};

// const button = document.querySelector(".options");

// button.addEventListener("click", function checkAnswer(event) {
//     index++;
//     console.log(event.target.className);
// });


const button = document.querySelector(".options");
button.addEventListener("click", checkAnswer);
var correctAnswers = questionsArray[index].answer;

function checkAnswer(event) {
    if {
        userChoices === correctAnswers
    };
    else {
        //timeleft - incorrect
    };
    index++;
};



function startQuiz() {
    if (introPage.style.display === "none") {
        introPage.style.display = "block";
    } else {
        introPage.style.display = "none";
    }
    quizSections.style.display = "block";
    //start timer
    timerId = setInterval(clocktick, 1000);
    renderQuestion();
};

// userChoices.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         questionsDiv.appendChild(ulCreate);
//         ulCreate.appendChild(listItem);
//         listItem.addEventListener("click", (compare));
//     });


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