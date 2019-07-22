//Crystal Variables

var randomTarget = Math.floor(Math.random() * 102) + 19;
var total = 0;
var wins = 0;
var losses = 0;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

//function to display game info
function displayStats() {
  $("#random").text("Target Score: " + randomTarget);
  $("#total").text("User Total: " + total);
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
}

//function to reset the game
function reset() {
    total = 0;
    randomTarget = Math.floor(Math.random() * 102) + 19;
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    displayStats();
  }

//function check win
function checkWin () {
    //if total is equal the randomTarget
    if(total === randomTarget) {
        wins++;
        displayStats();
        alert("You won!");
        reset();
 //if total is greater the randomTarget
    } if (total > randomTarget) {
        losses++;
        displayStats();
        alert("You Lost!");
        reset();
    }
    else {
        displayStats();
    }
}


$(document).ready(function() {
  //invoke display stats function when page loads
  displayStats();
  //Crystal 1 on-click
  $("#crystal1").on("click", function() {
      total = total + crystal1;
      checkWin();
  });
  //Crystal 2 on-click
  $("#crystal2").on("click", function() {
    total = total + crystal2;
    checkWin();
});
//Crystal 3 on-click
$("#crystal3").on("click", function() {
    total = total + crystal3;
    checkWin();
});
//Crystal 4 on-click
$("#crystal4").on("click", function() {
    total = total + crystal4;
    checkWin();
});
  
});