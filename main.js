const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer= document.querySelector("#todoCards");
const delBtn = document.querySelector('.delBtn');
const count = document.querySelectorAll('.todoCard').length; // Count all todoCards



addBtn.addEventListener('click', addTask); //add a task on click
delBtn.addEventListener('click',function(){//delete default task on click
deleteTask(taskCard);  //target the right task
});

function deleteTask(task){
    task.remove(); //remove the task
}

document.addEventListener('DOMContentLoaded', updateCount); // Initialize count on page load

function addTask(){
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = 'New Task' // set new task text to "New Task"
    newDelBtn.addEventListener('click', function(){ // add delete event listener to new task
        deleteTask(newTask); //target the new task
    })

    tasksContainer.appendChild(newTask) //append new task to the task container
}

function updateCount() {
    document.getElementById('count').innerText = `Count: ${count}`; // Display the count
}
