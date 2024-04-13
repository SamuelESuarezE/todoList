"use strict";

// DOM
const tasksContainer = document.querySelector(".tasksUl");
const inputTaskName = document.querySelector("#nombreTarea");
const inputTaskAdd = document.querySelector("#addTask");
const fullTasks = document.querySelector(".fullTasks");
const fullTasksContainer = document.querySelector('.fullTasksContainer')
const closeFullTasks = document.querySelector("#closeFullTasks");
const emptyTask = document.querySelector('.emptyTask')
const emptyTaskContainer = document.querySelector('.emptyTaskContainer')


// ADD A TASK
inputTaskAdd.onclick = addTask;
closeFullTasks.onclick = () => {
    fullTasks.style.display = 'none';
}

closeEmptyTask.onclick = () => {
    emptyTask.style.display = 'none';
}

function addTask() {
    if (inputTaskName.value === "") {
        emptyTask.style.display = 'grid';
        emptyTaskContainer.style.animation = 'appearPopUp 0.4s'
        return
    }

    if (tasksContainer.children.length == 9) {
        fullTasks.style.display = 'grid'
        fullTasksContainer.style.animation = 'appearPopUp 0.4s'
        return
    }
    let taskElement = document.createElement('li')
    taskElement.innerHTML += `${inputTaskName.value} <rightTask><i class="bi bi-trash-fill" onclick=";"></i><input type="checkbox" name="" id=""></input></rightTask></li>`
    tasksContainer.appendChild(taskElement)
    taskElement.children[0].children[0].onclick = () => {
        
        taskElement.style.animation = 'disappearTask 0.4s'

        setTimeout(function() {
            // Eliminar el elemento del DOM
            taskElement.remove();
        }, 400)
        
    }
    inputTaskName.value = "";
};

