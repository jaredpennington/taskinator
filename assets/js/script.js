var formEL = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDateObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // sent it as an arguement to createTaskEL
    createTaskEL(taskDateObj);
};

var createTaskEL = function (taskDataObj) {
    // create list item
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEL = document.createElement("div");
    taskInfoEL.className = "task-info";
    taskInfoEL.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEL.appendChild(taskInfoEL);

    // add entire list item to list
    tasksToDoEL.appendChild(listItemEL);

}

formEL.addEventListener("submit", taskFormHandler);



