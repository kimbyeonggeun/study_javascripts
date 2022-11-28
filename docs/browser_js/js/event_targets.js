let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  //따로 함수를 만들고 넣어도 됨.
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
