const popup = document.getElementById("popup");
const closeButton = document.getElementById("closepopup");
const rulesButton = document.getElementById("rules");
const $popup = $("#popup");
const $closeButton = $("#closepopup");
const $rulesButton = $("#rules");

const rulesFadeInterval = 166;
let userScore = 0;
let opponentScore = 0;

popup.style.display = "none";

$rulesButton.click(function () {
    $popup.fadeIn(rulesFadeInterval);
});  

$closeButton.click(function () {
    $popup.fadeOut(rulesFadeInterval);
});

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

let user = new Player("user");
let opponent = new Player("opponent");
