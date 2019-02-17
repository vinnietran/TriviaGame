// Array to store querstion objects 
var questionData = []

var questions = [
  {
  content: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl? Miami Dolphins",
  answers: {
    a: "Pittsburgh Steelers", b: "Arizona Cardinals", c: "Miami Dolphins", d: "Chicago Bears"
  },
  correctAnswer: "c"
},

{
  content: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
  answers: {
    a:"3", b: "6", c: "4", d: "12,000,000"
  },
  correctAnswer: "b"
},

{
  content: "Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all?",
  answers: {
  a:"Tampa Bay Buccaneers", b: "Jacksonville Jaguars", c: "Philadelphia Eagles", d: "Buffalo Bills"
  },
  correctAnswer: "d"
}
]


//variable declarations
var correctAnswers = 0;
var incorrectAnswers = 0;
var playerChoice = "";
var timer = 7;
var intervalId;

// function calls
startGame();
run();
displayQuestion();

//run timer function
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//end timer function 

//decrease timer function
function decrement() {

  timer--;

  $("#time").html("<h2> Time Remaining:  " + timer + "</h2>");

  if (timer === 0) {

    stop();

    $("#time").html("<h2> TIME'S UP!! </h2>");
  }
}
//end decrease timer function


//  The stop function
function stop() {

  clearInterval(intervalId);
}
//end stop function



function startGame() {
  //push questions to array
  questionData.push(questions);

  //console.log(questionData);

  for (var i = 0; i < questionData.length; i++) {
    $("#question").text(questionData[i].content);
    $("#ans1").text(questionData[i].answer1);
    $("#ans2").text(questionData[i].answer2);
    $("#ans3").text(questionData[i].answer3);
    $("#ans4").text(questionData[i].answer4);

  }

  console.log(questionData);

  questionData.forEach(displayQuestion);
}

  function displayQuestion(){

    $("#question").append(questionData.content);
    $("#ans1").append(questionData.answers);
  }





//what if I used if statements that are based on a timer 

//need to figure out how to display the array on the html