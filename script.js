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

function newTaskObj(newTask) {
  const addedTask = {
    id: Date.now(),
    task: newTask,
    checked: false,
  };
  localStorage.setItem(addedTask.id, newTask);
}

function createTask(task) {
  // listItems.innerHTML = "";

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
  createTask(task);
});



window.addEventListener("load", (evt) => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.getItem(localStorage.key(i));
    createTask(key);
  }
});
