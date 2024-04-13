"use strict";

const tasksContainer = document.querySelector(".tasksUl");
const inputTaskName = document.querySelector("#nombreTarea");
const inputTaskAdd = document.querySelector("#addTask");
const fullTasks = document.querySelector(".fullTasks");
const fullTasksContainer = document.querySelector('.fullTasksContainer')
const closeFullTasks = document.querySelector("#closeFullTasks");
const emptyTask = document.querySelector('.emptyTask')
const emptyTaskContainer = document.querySelector('.emptyTaskContainer')


inputTaskAdd.addEventListener("click", addTask);
closeFullTasks.addEventListener('click', () => {
    fullTasks.style.display = 'none';
})

closeEmptyTask.addEventListener('click', () => {
    emptyTask.style.display = 'none';
})

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
   
    tasksContainer.innerHTML += `<li>${inputTaskName.value} <rightTask><i class="bi bi-trash-fill" class="removeTask"></i><input type="checkbox" name="" id=""></rightTask></li>`;
    inputTaskName.value = "";


};
