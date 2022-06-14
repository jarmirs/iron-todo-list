const arrayOfTasks = [
  {
    task: "Go to the vet",
    checked: false,
  },
  {
    task: "Buy bananas",
    checked: true,
  },
  {
    task: "Buy cat",
    checked: true,
  },
  {
    task: "Buy cash",
    checked: true,
  },
];

// DOM variables
// const taskListDiv = document.querySelector("#listItems");
const newTaskForm = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task");
const listItems = document.getElementById("listItems");

// Function Definitions
// function generateNewItemList() {
//   taskListDiv.innerHTML = "";
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     const task = arrayOfTasks[i];
//     const newDiv = document.createElement("div");
//     const newButton = document.createElement("button");

//     newDiv.className = "col-sm-2 col-xs-1";
//     newDiv.innerText = task.task;
//     newButton.className = "btn btn-info";

//     newDiv.append(newButton);
//     taskListDiv.append(newDiv);
//     console.log(task.task);
//   }
// }
// generateNewItemList();

// JS Variables

// Create an array of objects

// function createTask() {
//   taskListDiv.innerHTML = "";

//   const newDiv = document.createElement("div");
//   const newInput = document.createElement("input");
//   const newLabel = document.createElement("label");
//   const newBtn = document.createElement("button");

//   newDiv.className = "form-check";
//   newInput.className = "form-check-input";

//   taskListDiv.append(newDiv);
//   newDiv.append(newInput);
// }

// Event Listeners
addButton.addEventListener("click", function () {
  const task = newTaskInput.value;

  if (task) {
    localStorage.setItem("task", task);
    location.reload();
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const addedTask = localStorage.key(i);
    // console.log(addedTask);

    listItems.innerHTML += `${addedTask}<br />`;
  }
