const rules = document.getElementById("rules");
const closeButton = document.getElementById("closepopup");
const rulesButton = document.getElementById("rulesButton");
const $rules = $("#rules");
const $closeButton = $("#closepopup");
const $rulesButton = $("#rulesButton");
const $playerdie1 = $("#playerdie1");
const $playerdie2 = $("#playerdie2");
const $opponentdie1 = $("#opponentdie1");
const $opponentdie2 = $("#opponentdie2");
const $playerRoundScore = $(".playerRoundScore");
const $playerTotalScore = $(".playerTotalScore");
const $opponentRoundScore = $(".opponentRoundScore");
const $opponentTotalScore = $(".opponentTotalScore");
const $rollDice = $("#rollDice");
const $resetGame = $(".resetGame");
const $win = $("#win");
const $lose = $("#lose");
const $tie = $("#tie");
const $result = $(".result");
const $roundsCounter = $("#roundsCounter");
const popupFadeInterval = 166;

let userScore = 0;  
let opponentScore = 0;
let userRoundScore = 0;
let opponentRoundScore = 0;
let roundCounter = 0;
let scoreCounter = 0;

rules.style.display = "none";

$rulesButton.click(function () {
    $rules.fadeIn(popupFadeInterval);
});  

$closeButton.click(function () {
    $rules.fadeOut(popupFadeInterval);
});

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

class Dice {
    constructor() {
        this.roll1;
        this.roll2;
    }
}

let user = new Player("user");
let opponent = new Player("opponent");
let dice = new Dice();

function rollDice() {
    dice.roll1 = Math.floor(Math.random() * 6) + 1;
    dice.roll2 = Math.floor(Math.random() * 6) + 1;
    if((dice.roll1 == 1) || (dice.roll2 == 1)){
        scoreCounter = 0;
    }
    else if (dice.roll1 == dice.roll2) {
        scoreCounter = (dice.roll1 + dice.roll2) * 2;
    }
    else {
        scoreCounter = dice.roll1 + dice.roll2;
    }
}

//rolls dice for both player and opponent,
$rollDice.click(function () {
    rollDice();
    $playerdie1.attr({
        "src": `../images/whitedie${dice.roll1}.svg`
    });
    $playerdie2.attr({
        "src": `../images/whitedie${dice.roll2}.svg`
    });
    userScore += scoreCounter;
    $playerRoundScore.text(`${scoreCounter}`);
    $playerTotalScore.text(`${userScore}`);
    rollDice();
    $opponentdie1.attr({
        "src": `../images/blackdie${dice.roll1}.svg`
    });
    $opponentdie2.attr({
        "src": `../images/blackdie${dice.roll2}.svg`
    });
    opponentScore += scoreCounter;
    $opponentRoundScore.text(`${scoreCounter}`);
    $opponentTotalScore.text(`${opponentScore}`);
    roundCounter++;
    $roundsCounter.text(`${roundCounter}`);
    if (roundCounter == 3){
        if(userScore > opponentScore) {
            $win.fadeIn(popupFadeInterval);
        }
        if(userScore < opponentScore) {
            $lose.fadeIn(popupFadeInterval);
        }
        if(userScore == opponentScore) {
            $tie.fadeIn(popupFadeInterval);
        }
        roundCounter = 0;
    }

});

//resets game, clears any win/loss/tie popup
$resetGame.click(function() {
    $result.css('display', 'none');
    userScore = 0;
    opponentScore = 0;
    userRoundScore = 0,
    opponentRoundScore = 0;
    $playerRoundScore.text(`0`);
    $playerTotalScore.text(`0`);
    $opponentRoundScore.text(`0`);
    $opponentTotalScore.text(`0`);
    $roundsCounter.text(`${roundCounter}`);
});

    