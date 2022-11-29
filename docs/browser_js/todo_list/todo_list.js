let inputtask = document.querySelector("#inputtask");

let addbutton = document.querySelector("#addbtn");

let items = document.querySelector("#items");

addbutton.addEventListener("click", (event) => {
  addTask(event);
});

inputtask.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask(event);
  }
});

function addTask(event) {
  if (inputtask.value == "") {
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

  const favorite = document.querySelector(".like>i");
  favorite.addEventListener("click", (event) => {
    if (event.target.innerText == "favorite")
      event.target.innerText = "favorite_border";
    else event.target.innerText = "favorite";
  });

  const deleteTask = document.querySelector(".delete>i");
  deleteTask.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
  });
}
