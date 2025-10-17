// Selects the input field (text-field)
var taskInput = document.getElementById("text-field");

// select the button (submit-btn)
var submitButton = document.getElementById("submit-btn");

// select the list (task-list)
var taskList = document.getElementById("task-list");

// Attach event listener with addTask function to the button
submitButton.addEventListener("click", addTask);

// define function for addTask
function addTask() {
    var taskText = taskInput.value.trim(); // gets value and gets rid of spaces

    if (taskText !== "") {

        // Creates a new li 
        var newListItem = document.createElement("li");

        // Add the li to the task-list ul
        newListItem.textContent = taskText;

        taskList.appendChild(newListItem); 

        taskInput.value = "";

    } else {
        alert("You can't enter an empty task! \nPlease type one in.");  
    }
}

