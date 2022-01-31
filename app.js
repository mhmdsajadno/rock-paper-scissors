let playerOne;
let playerTwo;
let playerOnePoint = 0;
let playerTwoPoint = 0;
let result;

const choices = new Array();
choices[0] = "rock";
choices[1] = "paper";
choices[2] = "scissors";

const onLoad = () => {
  //alert("Player 2, close youe eyes!!!")
  document.getElementById("player1R").disabled = true;
  document.getElementById("player1P").disabled = true;
  document.getElementById("player1S").disabled = true;
  document.getElementById("player2R").disabled = true;
  document.getElementById("player2P").disabled = true;
  document.getElementById("player2S").disabled = true;
  document.getElementById("player1").style.display = "none";
  document.getElementById("player2").style.display = "none";
  document.body.classList.add('loaded')
};

const start = () => {
  document.getElementById("player1R").disabled = false;
  document.getElementById("player1P").disabled = false;
  document.getElementById("player1S").disabled = false;
  document.getElementById("player2R").disabled = true;
  document.getElementById("player2P").disabled = true;
  document.getElementById("player2S").disabled = true;
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("stop").style.visibility = "visible";

  document.getElementById("player1").style.display = "inline-block";
  document.getElementById("player2").style.display = "inline-block";
};

const stop = () => {
  document.getElementById("player1R").disabled = true;
  document.getElementById("player1P").disabled = true;
  document.getElementById("player1S").disabled = true;
  document.getElementById("player2R").disabled = true;
  document.getElementById("player2P").disabled = true;
  document.getElementById("player2S").disabled = true;
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("stop").style.visibility = "hidden";
  console.log(playerOnePoint + " VS " + playerTwoPoint);
  if (playerOnePoint > playerTwoPoint) {
    //alert ("Player One won!")
    document.getElementById("vs").innerHTML = playerOnePoint + " VS " + playerTwoPoint
    document.getElementById("result").innerHTML = "Player One won!";
  } else if (playerOnePoint < playerTwoPoint) {
    //alert ("Player Two won!")
    document.getElementById("vs").innerHTML = playerOnePoint + " VS " + playerTwoPoint
    document.getElementById("result").innerHTML ="Player Two won!";
  } else {
    //alert ("Draw!")
    document.getElementById("vs").innerHTML = playerOnePoint + " VS " + playerTwoPoint
    document.getElementById("result").innerHTML = "Draw!!";
  }
  document.getElementById("reset").innerHTML = "Refresh the page to restart";
  document.getElementById("player1").style.display = "none";
  document.getElementById("player2").style.display = "none";
};

//to disable player 1 and anable player 2 after player one clicked
const disOnP1Click = function () {
  document.getElementById("player1R").disabled = true;
  document.getElementById("player1P").disabled = true;
  document.getElementById("player1S").disabled = true;
  document.getElementById("player2R").disabled = false;
  document.getElementById("player2P").disabled = false;
  document.getElementById("player2S").disabled = false;
};

//deactivating player two after clicking
const disOnP2Click = function () {
  document.getElementById("player2R").disabled = true;
  document.getElementById("player2P").disabled = true;
  document.getElementById("player2S").disabled = true;
};

const onPl1ClickRock = function () {
  playerOne = choices[0];
  console.log("pl1: " + playerOne);
  disOnP1Click();
};
const onPl1ClickPaper = function () {
  playerOne = choices[1];
  console.log("pl1: " + playerOne);
  disOnP1Click();
};
const onPl1ClickScissors = function () {
  playerOne = choices[2];
  console.log("pl1: " + playerOne);
  disOnP1Click();
};

var onPl2ClickRock = function () {
  playerTwo = choices[0];
  console.log("pl2: " + playerTwo);
  disOnP2Click();
  compare();
};
const onPl2ClickPaper = function () {
  playerTwo = choices[1];
  console.log("pl2: " + playerTwo);
  disOnP2Click();
  compare();
};
const onPl2ClickScissors = function () {
  playerTwo = choices[2];
  console.log("pl2: " + playerTwo);
  disOnP2Click();
  compare();
};

//to compare the choices
const compare = function () {
  if (playerOne == choices[0]) {
    if (playerTwo == choices[0]) {
      result = "draw";
      console.log(result);
    } else if (playerTwo == choices[1]) {
      result = "Player 2 won";
      playerTwoPoint += 1;
      console.log(result);
    } else if (playerTwo == choices[2]) {
      result = "Player 1 won";
      playerOnePoint += 1;
      console.log(result);
    }
  }

  if (playerOne == choices[1]) {
    if (playerTwo == choices[0]) {
      result = "Player 1 won";
      playerOnePoint += 1;
      console.log(result);
    } else if (playerTwo == choices[1]) {
      result = "draw";
      console.log(result);
    } else if (playerTwo == choices[2]) {
      result = "Player 2 won";
      playerTwoPoint += 1;
      console.log(result);
    }
  }

  if (playerOne == choices[2]) {
    if (playerTwo == choices[0]) {
      result = "Player 2 won";
      playerTwoPoint += 1;
      console.log(result);
    } else if (playerTwo == choices[1]) {
      result = "Player 1 won";
      playerOnePoint += 1;
      console.log(result);
    } else if (playerTwo == choices[2]) {
      result = "Draw";
      console.log(result);
    }
  }

  //alert("Player 2, close youe eyes!!!")

  document.getElementById("playerOnePoint").innerHTML =
    "Score " + playerOnePoint;
  document.getElementById("playerTwoPoint").innerHTML =
    "Score " + playerTwoPoint;

  document.getElementById("player1R").disabled = false;
  document.getElementById("player1P").disabled = false;
  document.getElementById("player1S").disabled = false;
  document.getElementById("player2R").disabled = true;
  document.getElementById("player2P").disabled = true;
  document.getElementById("player2S").disabled = true;
};
