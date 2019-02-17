// Array to store querstion objects 
var questionData = []

var allQuestions = {
question1:{
    content: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl? Miami Dolphins",
    answers:{answer1: "Pittsburgh Steelers", answer2: "Arizona Cardinals", answer3: "Miami Dolphins", answer4: "Chicago Bears"}
},


question2: {
    content: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
    answers:{answer1: "3", answer2: "6", answer3: "4", answer4: "12,000,000"}
},


question3: {
    content: "Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all?",
    answers:{answer1: "Tampa Bay Buccaneers", answer2: "Jacksonville Jaguars", answer3: "Philadelphia Eagles", answer4: "Buffalo Bills"}
}

}

// variables to counts correct answers and incorrect 
var correctAnswers = 0;
var incorrectAnswers = 0;
var playerChoice = "";

// for loop to display questions with timeout and interval 

startGame();

function startGame(){
//push questions to array
questionData.push(allQuestions);

console.log(questionData);

for (var i = 0; i < questionData.length; i++){
    console.log(allQuestions.question1);
}

}


// if statements to check the correct answer and move on to next question 


// display user score 