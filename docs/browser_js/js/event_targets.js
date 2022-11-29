let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  //따로 함수를 만들고 넣어도 됨.
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad()); // 설문 첫 문항 보일때 좋음

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}
