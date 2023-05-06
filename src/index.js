const getSection = (() => {
  "use strict";

  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const home = document.getElementById("home");
  const today = document.getElementById("today");
  const week = document.getElementById("week");
  const groups = document.getElementById("groups");
  const notes = document.getElementById("notes");

  const addTask = document.getElementById("addTaskButton");
  const newGroup = document.getElementById("newGroupButton");
  const darkMode = document.getElementById("darkModeButton");

  const taskBox = document.getElementById("taskBox");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDueDate = document.getElementById("taskDueDate");
  const taskPriority = document.getElementById("taskPriority");
  const taskGroup = document.getElementById("taskGroup");
  const taskSubmit = document.getElementById("taskSubmit");
  const taskCancel = document.getElementById("taskCancel");

  const groupBox = document.getElementById("groupBox");
  const groupTitle = document.getElementById("groupTitle");
  const groupSubmit = document.getElementById("groupSubmit");
  const groupCancel = document.getElementById("groupCancel");

  const taskDetails = document.getElementById('taskDetais');
  const taskDetailsText = document.getElementById('taskDetailsText');
  const taskDetailsCancel = document.getElementById('taskDetailsCancel')
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
    taskGroup,
    taskSubmit,
    taskCancel,
    groupBox,
    groupTitle,
    groupSubmit,
    groupCancel,
    taskDetails,
    taskDetailsText,
    taskDetailsCancel
  };
})();

export default getSection;

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export class Group {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }
}

 // creates the new task object
export const addTaskLogic = (() => {
  const tasks = []; // contains task objects
  let taskId = 1;

  function loadTasks() {
    let task = document.createElement("div");
    let title = document.createElement("div");
    let date = document.createElement("div");
    let newTask = new Task(
      taskTitle.value,
      taskDescription.value,
      taskDueDate.value,
      taskPriority.value
    );

    tasks.push(newTask);

    tasks.forEach((item, i) => {
      task.classList.add("task");
      getSection.content.appendChild(task);

      task.id = taskId++;

      title.classList.add("taskTitle");
      title.textContent = taskTitle.value;
      task.appendChild(title);

      date.textContent = taskDueDate.value;
      task.appendChild(date);

      if (taskPriority.value === "low") {
        task.style.backgroundColor = "var(--taskLow)";
      }

      if (taskPriority.value === "medium") {
        task.style.backgroundColor = "var(--taskMedium)";
      }

      if (taskPriority.value === "high") {
        task.style.backgroundColor = "var(--taskHigh)";
      }
    });

    task.addEventListener('click', () => {
      taskDetails.style.display = 'flex';
      taskDetailsText.textContent = `${newTask.description}`
    })
  }

  function reloadTasks() {
    tasks.forEach((item, i) => {
      let task = document.createElement("div");
      let title = document.createElement("div");
      let date = document.createElement("div");

      task.classList.add('task');
      getSection.content.appendChild(task)

      title.classList.add("taskTitle");
      title.textContent = `${tasks[i].title}`;
      task.appendChild(title);

      date.textContent = `${tasks[i].dueDate}`;
      task.appendChild(date);

      if (tasks[i].priority === "low") {
        task.style.backgroundColor = "var(--taskLow)";
      }

      if (tasks[i].priority === "medium") {
        task.style.backgroundColor = "var(--taskMedium)";
      }

      if (tasks[i].priority === "high") {
        task.style.backgroundColor = "var(--taskHigh)";
      }
    });

    task.addEventListener('click', () => {
      taskDetails.style.display = 'flex';
      taskDetailsText.textContent = `${newTask.description}`
    })
  }

  function clearContent() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  getSection.addTask.addEventListener("click", () => {
    taskBox.style.display = "flex";
  });

  getSection.taskSubmit.addEventListener("click", () => {
    event.preventDefault();
    taskBox.style.display = "none";
    loadTasks();
    console.log(tasks);
  });

  getSection.taskCancel.addEventListener("click", () => {
    taskBox.style.display = "none";
    event.preventDefault();
  });

  getSection.home.addEventListener("click", () => {
    clearContent();
    reloadTasks();
  });

  getSection.taskDetailsCancel.addEventListener('click', () => {
    taskDetails.style.display = 'none';
  })
})();

export const newGroupLogic = (() => {
  const groups = [];

  getSection.newGroup.addEventListener("click", () => {
    groupBox.style.display = "flex";
  });

  getSection.groupSubmit.addEventListener("click", () => {
    event.preventDefault();
    let group = new Group(groupTitle.value);
    groupBox.style.display = "none";
    groups.push(group);
    console.log(group);
    console.log(groups);

    let option = document.createElement("option");
    option.value = group.title;
    option.id = group.title;
    option.textContent = group.title;
    getSection.taskGroup.appendChild(option);
  });

  getSection.groupCancel.addEventListener("click", () => {
    groupBox.style.display = "none";
    event.preventDefault();
  });

  function loadGroups() {
    groups.forEach((group, i) => {
      let displayGroup = document.createElement("div");
      displayGroup.classList.add("task");
      displayGroup.textContent = `${groups[i].title}`;
      content.appendChild(displayGroup);
    });
  }

  function clearContent() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  getSection.groups.addEventListener("click", () => {
    clearContent();
    loadGroups();
  });
})();


