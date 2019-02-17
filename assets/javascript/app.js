// Array to store querstion objects 
var questionData = []

var question1= {
    content: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl? Miami Dolphins",
    answer1: "Pittsburgh Steelers", answer2: "Arizona Cardinals", answer3: "Miami Dolphins", answer4: "Chicago Bears"
};


    var question2 =  {
    content: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
    answer1: "3", answer2: "6", answer3: "4", answer4: "12,000,000"
};


    var question3 =  {
    content: "Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all?",
    answer1: "Tampa Bay Buccaneers", answer2: "Jacksonville Jaguars", answer3: "Philadelphia Eagles", answer4: "Buffalo Bills"
};


// variables to counts correct answers and incorrect 
var correctAnswers = 0;
var incorrectAnswers = 0;
var playerChoice = "";

// for loop to display questions with timeout and interval 

startGame();

function startGame(){
//push questions to array
questionData.push(question1, question2, question3);

console.log(questionData);

/*chosenQuestion = questionData[Math.floor(Math.random() * questionData.length)];
$("#question").text(chosenQuestion);
console.log(chosenQuestion);*/

for (var i = 0; i < questionData.length; i++){
    $("#question").text(questionData[i].content);
    $("#ans1").text(questionData[i].answer1);
    $("#ans2").text(questionData[i].answer2);
    $("#ans3").text(questionData[i].answer3);
    $("#ans4").text(questionData[i].answer4);

}

}


// if statements to check the correct answer and move on to next question 


// display user score 