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
    task: "Buy bananas",
    checked: true,
  },
  {
    task: "Buy bananas",
    checked: true,
  },
];

for (let i = 0; i < arrayOfTasks.length; i++) {
  console.log(arrayOfTasks[i].task);
}



// js variables
const newTasks = document.getElementById("task-input");

// Create an array of objects

// DOM variables
const newTaskEl = document.createElement("new-task");
const taskListDiv = document.querySelector("#listItems");

const phoneRowDiv = document.getElementById("phone-row");

for (let i = 0; i < users.length; i++) {
  console.log(users[i].phone);
  const newDiv = document.createElement("div");
  newDiv.className = "col-12";

  const h1El = document.createElement("h1");
  h1El.innerText = users[i].name;
  newDiv.append(h1El);

  const pEl = document.createElement("p");
  pEl.innerText = users[i].phone;
  newDiv.append(pEl);

  phoneRowDiv.append(newDiv);
}

newTaskEl.innerHTML = "This is a new task";
newTaskEl.append("div");

// Function Definitions

function createTask() {
  taskListDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  const newBtn = document.createElement("button");

  newDiv.className = "form-check";
  newInput.className = "form-check-input";

  taskListDiv.append(newDiv);
  newDiv.append(newInput);
}

// createTask();
