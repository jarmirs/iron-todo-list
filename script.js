// const arrayOfTasks = [
//   {
//     task: "Go to the vet",
//     checked: false,
//   },
//   {
//     task: "Buy bananas",
//     checked: true,
//   },
// ];

// JS Variables

// empty arrayOfTasks
const arrayOfTasks = [];
let newTask;

// DOM Variables

// taskList
const taskListDiv = document.querySelector(".col-lg.task-list");
// individualTask div
const newTaskDiv = document.querySelector(".new-task");
// addTask button
const addTaskBtn = document.querySelector(".addTask");

// Function Definitions

// makeId()
function makeId() {
  return Math.floor(Math.random() * (50 - 1) + 1);
}

// createNewTask()
function createNewTask() {
  // localStorage.taskListDiv = arrayOfTasks
  taskListDiv.innerHTML = "";
  // generate new task elements
  const newDiv = document.createElement("div");
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  const newBtn = document.createElement("button");

  // generate div
  newDiv.classList.add("form-check");
  taskListDiv.append(newDiv);

  // generate input
  newInput.classList.add("form-check-input");
  newInput.type = "checkbox";
  newInput.id = `${makeId()}`;
  newDiv.append(newInput);

  // generate label
  // TODO
  // use local storage to access

  // generate button
}

createNewTask();

// deleteTask()
// remove div,checkbox,label,delete button

// Event Listeners

// Window.addEventListener("load", create empty task array)

// addTask.addEventListener("submit", create object/with appropriate props)
// e.preventDefault()

// deleteTask.addEventListener("click", remove task from array)
