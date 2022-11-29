const inputtask = document.querySelector("#inputtask");

const addbutton = document.querySelector("#addbtn");

let items = document.querySelector("#items");

inputtask.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});

function addTask() {
  const input = inputtask.value;
  if (input == "") {
    alert("Please enter a task");
    return;
  }

  let newTask = `<li  class="item">
<span class="task">${input}</span>
<span class="manage">
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
