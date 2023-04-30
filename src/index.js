const getSection = (() => {
    'use strict';

    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    const home = document.getElementById('home');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    const groups = document.getElementById('groups');
    const notes = document.getElementById('notes');

    const addTask = document.getElementById('addTaskButton');
    const darkMode = document.getElementById('darkModeButton');

    const taskBox = document.getElementById('taskBox');
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskSubmit = document.getElementById('submitButton');
    const taskCancel = document.getElementById('cancelButton');
    return { 
            header, 
            main, 
            sidebar, 
            content,
            home,
            today,
            week,
            groups,
            notes,
            addTask,
            darkMode,
            taskBox,
            taskTitle,
            taskDescription,
            taskDueDate,
            taskSubmit,
            taskCancel
           };
})();

export default getSection

export function task(title, description, dueDate) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
};

export const buttonLogic = (() => {
    getSection.addTask.addEventListener('click', () => {
        taskBox.style.display = 'flex';
    });
    
    getSection.taskSubmit.addEventListener('click', () => {
        taskBox.style.display = 'none';
    });

    getSection.taskCancel.addEventListener('click', () => {
        taskBox.style.display = 'none';
    });
})();




