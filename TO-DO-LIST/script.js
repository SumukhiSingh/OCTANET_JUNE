function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var deadlineInput = document.getElementById("deadlineInput");
  
    var task = {
      description: taskInput.value,
      priority: prioritySelect.value,
      deadline: deadlineInput.value
    };
  
    if (task.description === "") {
      alert("Please enter a task description.");
      return;
    }
  
    var taskItem = createTaskItem(task);
    var taskList = document.getElementById("taskList");
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
    prioritySelect.value = "high";
    deadlineInput.value = "";
  }
  
  function createTaskItem(task) {
    var taskItem = document.createElement("li");
  
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = " DELETE ";
    deleteButton.onclick = function() {
      taskItem.parentNode.removeChild(taskItem);
    };
  
    var taskInfo = document.createElement("span");
    taskInfo.innerHTML = task.description + " (Priority: " + task.priority + ", Deadline: " + task.deadline + ")";
    taskInfo.className = "task-info";
  
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(taskInfo);
  
    return taskItem;
  }
  