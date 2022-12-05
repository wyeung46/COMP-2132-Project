const popup = document.getElementById("popup");
const closeButton = document.getElementById("closepopup");
const rulesButton = document.getElementById("rules");

const rulesFadeInterval = 1000;

popup.style.display = "none";

// popupDelayHandler = setTimeout(function() {
//     popup.style.display = "block";
// }, popupDelay);

rulesButton.addEventListener("click", function () {
    popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});
