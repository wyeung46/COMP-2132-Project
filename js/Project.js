const popup = document.getElementById("popup");
const closeButton = document.getElementById("closepopup");
const rulesButton = document.getElementById("rules");
const $popup = $("#popup");
const $closeButton = $("#closepopup");
const $rulesButton = $("#rules");

const rulesFadeInterval = 1000;

popup.style.display = "none";

$rulesButton.click(function () {
    $popup.fadeIn(rulesFadeInterval);
});  

$closeButton.click(function () {
    $popup.fadeOut(rulesFadeInterval);
});
