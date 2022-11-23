// #1
let queryChangeText = document.querySelector("#changetext");
queryChangeText.innerHTML = "Change on Me!";

// #2
let queryClickalert = document.querySelector("#clickalert");
// element.addEventListener(event, function, useCapture);
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me!");
}

// #3
let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);
function targetText() {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
