// Array to store querstion objects 
var questionData = []

var questions = [
  question1 = {
  content: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
  answers: {
    a: "Pittsburgh Steelers", b: "Arizona Cardinals", c: "Miami Dolphins", d: "Chicago Bears"
  },
},

{
  content: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
  answers: {
    a:"3", b: "6", c: "4", d: "12,000,000"
  },
},

{
  content: "Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all?",
  answers: {
  a:"Tampa Bay Buccaneers", b: "Jacksonville Jaguars", c: "Philadelphia Eagles", d: "Buffalo Bills"
  },
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
displayQuestion1();

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


//displayQuestion1();
console.log(questions);
}

 function displayQuestion1(){
  console.log("FUCK");
    $("#question1").html(question1.content);
    $("#ans1").html( "<input type= radio name= colors id= red></input> " + question1.answers.a + " ");
    $("#ans1").append("<input type= radio name= colors id= red></input> "  + question1.answers.b + " ");
    $("#ans1").append("<input type= radio name= colors id= red></input> " + question1.answers.c + " ");
    $("#ans1").append("<input type= radio name= colors id= red></input> " + question1.answers.d + " ");
  }

  function displayQuestion2(){
    console.log("FUCK");
      $("#question").html(question2.content);
      $("#ans1").html(question2.answers.a);
      $("#ans2").html(question2.answers.b);
      $("#ans3").html(question2.answers.c);
      $("#ans4").html(question2.answers.d);
    }





//what if I used if statements that are based on a timer 

//need to figure out how to display the array on the html