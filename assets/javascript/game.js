
$(document).ready(function() {

//object for buttons and score that will have to be reset every game
   var startGame = {
 	goal: Math.floor(Math.random() * 120) + 19,
 	green: Math.floor(Math.random() * 12) + 1,
 	purple: Math.floor(Math.random() * 12) + 1,
 	yellow: Math.floor(Math.random() * 12) + 1,
 	red: Math.floor(Math.random() * 12) + 1,
 	score: 0,
 };

console.log(startGame)

//set wins and losses that will keep tally after every game 
var wins = 0;
var losses = 0;

//display numbers on page
 var winSet = $("#wins");
 var lossSet = $("#loss");
 var scoreSet = $("#score");
 var goalSet = $("#goal");

//on page  set random number between 19-120 for buttons and set score to 0
function initializeGame() {
		winSet.html(wins);
		lossSet.html(losses);
		scoreSet.html(startGame.score);
		goalSet.html(startGame.goal);
};

initializeGame();
//console.log(initializeGame)

// on click of crystal add its value to score

//tally wins/losses

//restart game

})