// let queryInputAll = document.querySelectorAll("input");
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

let newItem = `<li>
<div>
  <input type="checkbox" name="" id="item3" />
  <label for="item3">item three</label>
</div>
</li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  // 상위 element에 event설정
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
// queryItemList.insertAdjacentHTML("beforeend", newItem);
// queryItemList.insertAdjacentHTML("beforebegin", newItem);

// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }                -> 선호하는 방식이 아님
