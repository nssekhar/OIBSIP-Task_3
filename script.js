document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = "";
    });
    function createTaskItem(text) {
        const li = document.createElement("li");
        const taskText = document.createElement("span");
        taskText.textContent = text;
        const actions = document.createElement("div");
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        completeButton.addEventListener("click", function () {
            li.classList.toggle("completed");
            if (li.classList.contains("completed")) {
                completedTasksList.appendChild(li);
            } else {
                pendingTasksList.appendChild(li);
            }
        });
        deleteButton.addEventListener("click", function () {
            li.remove();
        });
        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        li.appendChild(taskText);
        li.appendChild(actions);
        return li;
    }
});