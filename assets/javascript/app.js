//objects 
var questions = [
  question1 = {
  content: "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
  answers: {
    a: "Pittsburgh Steelers", b: "Arizona Cardinals", c: "Miami Dolphins", d: "Chicago Bears"
  },
},

question2 = {
  content: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
  answers: {
    a:"3", b: "6", c: "4", d: "12,000,000"
  },
},

question3 = {
  content: "Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all?",
  answers: {
  a:"Tampa Bay Buccaneers", b: "Jacksonville Jaguars", c: "Philadelphia Eagles", d: "Buffalo Bills"
  },
},

question4 = {
  content: "Who is the NFL's all time leading rusher?",
  answers: {
  a:"Peyton Manning", b: "Michael Phelps", c: "Jerome Bettis", d: "Emmit Smith"
  },
},

question5 = {
  content: "As of February 2019, who is the manager of the Pittsburgh Pirates?",
  answers: {
  a:"Donald Trump", b: "Clint Hurdle", c: "Tim Cook", d: "Michael Scott"
  },
}
]

//--------------------------------------------------------------------------------------------------------------------

//variable declarations
var correctAnswers = 0;
var incorrectAnswers = 0;
var playerChoice = "";
var timer = 7;
var intervalId;
//--------------------------------------------------------------------------------------------------------------------

// start game on click function



$("#startButton").click(function startGame() { 
run();
displayQuestion1();
displayQuestion2();
displayQuestion3();
displayQuestion4();
displayQuestion5();

$("#startButton").html("");

})


//--------------------------------------------------------------------------------------------------------------------

//run timer function
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//end timer function 

//decrease timer function
function decrement() {
  timer--;
  $("#time").html(" Time Remaining:  " + timer + " ");
  if (timer === 0) {
    stop();
    $("#time").html(" TIME'S UP!! ");
  }
}
//end decrease timer function

//  The stop function
function stop() {
  clearInterval(intervalId);
}
//end stop function

//--------------------------------------------------------------------------------------------------------------------

//im sure its not the most efficient way to do it, but functions to display questions
 function displayQuestion1(){
    $("#question1").html("<h3>" + question1.content  + "</h3>");
    $("#ans1").html( "<input type= radio name= colors id= red></input> " + question1.answers.a + " ");
    $("#ans1").append("<input type= radio name= colors id= red></input> "  + question1.answers.b + " ");
    $("#ans1").append("<input type= radio name= colors id= correct></input> " + question1.answers.c + " ");
    $("#ans1").append("<input type= radio name= colors id= red></input> " + question1.answers.d + " ");
  }

  function displayQuestion2(){
    $("#question2").html("<h3>" + question2.content  + "</h3>");
    $("#ans2").html( "<input type= radio name= colors id= red></input> " + question2.answers.a + " ");
    $("#ans2").append("<input type= radio name= colors id= correct></input> "  + question2.answers.b + " ");
    $("#ans2").append("<input type= radio name= colors id= red></input> " + question2.answers.c + " ");
    $("#ans2").append("<input type= radio name= colors id= red></input> " + question2.answers.d + " ");
  }

  function displayQuestion3(){
    $("#question3").html("<h3>" + question3.content  + "</h3>");
    $("#ans3").html( "<input type= radio name= colors id= red></input> " + question3.answers.a + " ");
    $("#ans3").append("<input type= radio name= colors id= red></input> "  + question3.answers.b + " ");
    $("#ans3").append("<input type= radio name= colors id= red></input> " + question3.answers.c + " ");
    $("#ans3").append("<input type= radio name= colors id= correct></input> " + question3.answers.d + " ");
  }

  function displayQuestion4(){
    $("#question4").html("<h3>" + question4.content  + "</h3>");
    $("#ans4").html( "<input type= radio name= colors id= red></input> " + question4.answers.a + " ");
    $("#ans4").append("<input type= radio name= colors id= red></input> "  + question4.answers.b + " ");
    $("#ans4").append("<input type= radio name= colors id= red></input> " + question4.answers.c + " ");
    $("#ans4").append("<input type= radio name= colors id= correct></input> " + question4.answers.d + " ");
  }

  function displayQuestion5(){
    $("#question5").html("<h3>" + question5.content  + "</h3>");
    $("#ans5").html( "<input type= radio name= colors id= red></input> " + question5.answers.a + " ");
    $("#ans5").append("<input type= radio name= colors id= correct></input> "  + question5.answers.b + " ");
    $("#ans5").append("<input type= radio name= colors id= red></input> " + question5.answers.c + " ");
    $("#ans5").append("<input type= radio name= colors id= red></input> " + question5.answers.d + " ");
  }

  $("#submitButton").click(function checkAnswers(){
if (document.getElementById('correct').checked){
  correctAnswers++; 
  console.log(correctAnswers);
}

  })




