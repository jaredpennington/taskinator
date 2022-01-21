var formEL = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEL = document.createElement("div");
    taskInfoEL.className = "task-info";

    //add HTML content to div
    taskInfoEL.innerHTML = "<h3 class='task-name'>" +taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEL.appendChild(taskInfoEL);

    // add entire list item to list
    tasksToDoEL.appendChild(listItemEL);
};

formEL.addEventListener("submit", createTaskHandler);



