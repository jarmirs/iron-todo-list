const arrayOfTasks = [
  {
    task: "Go to the vet",
    checked: false,
  },
  {
    task: "Buy bananas",
    checked: true,
  },
];

// js variables
const newTasks = document.getElementById("task-input");

// Create an array of objects
for (let i = 0; i < arrayOfTasks.lenth; i++) {
  console.log(arrayOfTasks[i].task);

}
// DOM variables
const newTaskEl = document.createElement("new-task");
const taskListDiv = document.querySelector(".col-lg.task-list")

newTaskEl.innerHTML = "This is a new task";
newTaskEl.append("div");

// Function Definitions

function createTask() {

}