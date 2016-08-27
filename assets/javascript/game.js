
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

console.log(startGame);

//set wins and losses that will keep tally after every game 
var wins = 0;
var losses = 0;

//display numbers on page
 var winSet = $("#wins");
 var lossSet = $("#loss");
 var scoreSet = $("#score");
 var goalSet = $("#goal");

//on page  set random number between 19-120 for buttons and set score, wins, losses to 0
function initializeGame() {
		winSet.html(wins);
		lossSet.html(losses);
		scoreSet.html(startGame.score);
		goalSet.html(startGame.goal);
};

initializeGame();

// on click of crystal add its value to score
$(".crystal").click(function(event){
	var crystal = event.target.id;
	console.log(crystal);

	if (crystal == "red") {
			startGame.score += startGame.red;
		} else if (crystal == "grn") {
			startGame.score += startGame.green; 
		} else if (crystal == "prpl") {
			startGame.score += startGame.purple;
		} else if (crystal == "yllw") {
			startGame.score += startGame.yellow;
		}
	console.log(startGame.score);
	scoreSet.html(startGame.score); 

// function to reset game
function reset(){
	startGame.score = 0
	startGame.goal = Math.floor(Math.random() * 120) + 19;
	startGame.green = Math.floor(Math.random() * 12) + 1;
	startGame.purple = Math.floor(Math.random() * 12) + 1;
	startGame.yellow = Math.floor(Math.random() * 12) + 1;
	startGame.red = Math.floor(Math.random() * 12) + 1;

	initializeGame();
};

//set parameters for winning and losing and restart game
if(startGame.score == startGame.goal){
	alert("YOU WON! PLAY AGAIN");
	wins++;
	reset();
} else if(startGame.score > startGame.goal){
	alert("YOU LOST! PLAY AGAIN");
	losses++;
	reset();
};

});

})