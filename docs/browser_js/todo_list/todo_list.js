let inputtask = document.querySelector("#inputtask");
let addbutton = document.querySelector("#addbtn");
let items = document.querySelector("#items");

let count = 1;

addbutton.addEventListener("click", (event) => {
  addTask(event);
});

inputtask.addEventListener("keydown", (event) => {
  console.log(event.code);
  if (event.key == "Enter") {
    addTask(event);
  }
});

function addTask(event) {
  if (inputtask.value == "") {
    target.value = "";
    alert("Please enter a task");
    return;
  }

  let newTask = `<li  class="item">
    <span class="task">${inputtask.value}</span>
    <span>
        <span class="like">
            <i class="material-icons">favorite_border</i>
        </span>
        <span class="delete">
            <i class="material-icons">delete</i>
        </span>
    </span>
    </li>`;

  items.insertAdjacentHTML("beforeend", newTask);

  items.addEventListener("click", (event) => {
    if (event.target.innerText == "favorite")
      event.target.innerText = "favorite_border";
    else if (event.target.innerText == "favorite_border")
      event.target.innerText = "favorite";
    else if (event.target.innerText == "delete")
      event.target.parentElement.parentElement.parentElement.remove();
  });
}
