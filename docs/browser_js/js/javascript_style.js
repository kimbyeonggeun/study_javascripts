let removeBtn = document.querySelector("#removebtn");
let hideBtn = document.querySelector("#hidebtn");
let resetBtn = document.querySelector("#resetbtn");

let removeDiv;
let hideDiv;

removeBtn.addEventListener("click", (event) => {
  removeImg(event);
});

function removeImg(event) {
  removeDiv = document.querySelector("#removeDiv");
  removeDiv.style.display = "none";
}

hideBtn.addEventListener("click", (event) => {
  hideImg(event);
});

function hideImg(event) {
  hideDiv = document.querySelector("#hideDiv");
  hideDiv.style.visibility = "hidden";
}

resetBtn.addEventListener("click", (event) => {
  resetImg(event);
});

function resetImg(event) {
  removeDiv.style.display = "block";
  hideDiv.style.visibility = "visible";
}
