// const arrayOfTasks = [
//   {
//     task: "Go to the vet",
//     checked: false,
//   },
//   {
//     task: "Buy bananas",
//     checked: true,
//   },
//   {
//     task: "Buy cat",
//     checked: true,
//   },
//   {
//     task: "Buy cash",
//     checked: true,
//   },
// ];

// DOM variables
// const taskListDiv = document.querySelector("#listItems");
const newTaskForm = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task");
const listItems = document.getElementById("listItems");
const delBtn = document.querySelector(".btn-danger");

// Function Definitions

// Create an array of objects

function newTaskObj(newTask) {
  const addedTask = {
    id: Date.now(),
    task: newTask,
    checked: false,
  };
  localStorage.setItem(addedTask.id, newTask);
}

function createTask(task) {

  const newFormDiv = document.createElement("div");
  const newLi = document.createElement("li");
  const newInput = document.createElement("input");

  const newLabel = document.createElement("label");
  const newDeleteBtn = document.createElement("button");

  newLi.className = "taskItem";
  newFormDiv.className = "form-check";
  newInput.className = "form-check-input";
  newInput.type = "checkbox";
  newLabel.className = "form-check-label";
  newLabel.innerText = task;
  newDeleteBtn.className = "btn btn-danger btn-sm";
  newDeleteBtn.innerText = "Delete";

  listItems.append(newFormDiv);
  newFormDiv.append(newInput);
  newFormDiv.append(newLabel);
  newFormDiv.append(newDeleteBtn);
}

// Event Listeners
addButton.addEventListener("click", function () {
  const task = newTaskInput.value;
  newTaskObj(task);
  createTask(task);
});
// delete  task : not working
// delBtn.addEventListener("click", (evt) => {
//   listItems.removeChild(newTaskInput);
// });

window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.getItem(localStorage.key(i));
    createTask(key);
  }
});
