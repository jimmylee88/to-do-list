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
    var taskText = taskInput.value.trim(); // takes value and gets rid of spaces

    if (taskText !== "") {

        // Creates a new li 
        var newListItem = document.createElement("li");

        // Add a delete button with event listener to the li
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "✕ Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", deleteTask);

        // Add inputted text to li
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Append to li
        newListItem.appendChild(taskSpan);
        newListItem.appendChild(deleteButton);

        // Add the li to the task-list ul
        taskList.appendChild(newListItem); 
        
        // // clears the input for a new task to enter
        // taskInput.value = "";
    } 
    
    else {
        alert("Sorry, empty tasks can't be added! \nPlease type one in.");  
    }
}

// delete button function
function deleteTask(event) {
    var buttonClicked = event.target;
    var listItem = buttonClicked.parentNode;
    var taskList = listItem.parentNode;
    listItem.remove();
}

