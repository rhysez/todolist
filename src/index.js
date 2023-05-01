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
    const newGroup = document.getElementById('newGroupButton');
    const darkMode = document.getElementById('darkModeButton');

    const taskBox = document.getElementById('taskBox');
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskPriority = document.getElementById('taskPriority');
    const taskSubmit = document.getElementById('taskSubmit');
    const taskCancel = document.getElementById('taskCancel');

    const groupBox = document.getElementById('groupBox');
    const groupTitle = document.getElementById('groupTitle');
    const groupSubmit = document.getElementById('groupSubmit');
    const groupCancel = document.getElementById('groupCancel');
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
            newGroup,
            darkMode,
            taskBox,
            taskTitle,
            taskDescription,
            taskDueDate,
            taskPriority,
            taskSubmit,
            taskCancel,
            groupBox,
            groupTitle,
            groupSubmit,
            groupCancel
           };
})();

export default getSection

export class Task {
    constructor (title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
};

const defaultGroup = [];

export const addTaskLogic = (() => {
    getSection.addTask.addEventListener('click', () => {
        taskBox.style.display = 'flex';
    });

    // adds the visual task to the app
    function addTaskContent(){
        let task = document.createElement('div');
        let title = document.createElement('div');
        let date = document.createElement('div');

        task.classList.add('task');
        getSection.content.appendChild(task);
        
        title.classList.add('taskTitle');
        title.textContent = taskTitle.value;
        task.appendChild(title);

        date.textContent = taskDueDate.value;
        task.appendChild(date);

        if (taskPriority.value === 'low'){
            task.style.backgroundColor = 'var(--taskLow)';
        }

        if (taskPriority.value === 'medium'){
            task.style.backgroundColor = 'var(--taskMedium)';
        }

        if (taskPriority.value === 'high'){
            task.style.backgroundColor = 'var(--taskHigh)';
        }

        console.log(taskManager);
    };
    
    // creates the new task object and pushes it to taskManager array
    getSection.taskSubmit.addEventListener('click', () => {
        event.preventDefault()
        let newTask = new Task(taskTitle.value, taskDescription.value, 
                               taskDueDate.value, taskPriority.value);
        defaultGroup.push(newTask);
        taskBox.style.display = 'none';
        addTaskContent();
    });

    getSection.taskCancel.addEventListener('click', () => {
        taskBox.style.display = 'none';
    });
})();

export const newGroupLogic = (() => {   
    getSection.newGroup.addEventListener('click', () => {
        groupBox.style.display = 'flex';
    });

    getSection.groupSubmit.addEventListener('click', () => {
        groupBox.style.display = 'none';
    })

    getSection.groupCancel.addEventListener('click', () => {
        groupBox.style.display = 'none';
    })
})();






