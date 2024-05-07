// Conts
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");
const delBtn = document.querySelector('.delBtn');

// Events
addBtn.addEventListener('click', addTask); // Add a task on click
delBtn.addEventListener('click', function() { // Delete default task on click
    deleteTask(taskCard);  // Target the right task
});
document.addEventListener('DOMContentLoaded', function() {
    updateCount(); // Count on page load
});

// Delete task
function deleteTask(task) {
    task.remove(); // Remove the task
    updateCount(); // Update the counter after deleting a task
}

// Add task 
function addTask() {
    const newTask = taskCard.cloneNode(true) // Clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = 'New Task'; // Set new task text to "New Task"
    newDelBtn.addEventListener('click', function() { // Add delete event listener to new task
        deleteTask(newTask); // Target the new task
    });

    tasksContainer.appendChild(newTask); // Append new task to the task container
    updateCount(); // Update the counter after adding a task
}

// Count the tasks
function updateCount() {
    const count = document.querySelectorAll('.todoCard').length; // Count all todoCards
    document.getElementById('count').innerText = `Count: ${count}`; // Display the updated count
}
