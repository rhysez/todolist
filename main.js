/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskLogic": () => (/* binding */ addTaskLogic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "localStorageFunctions": () => (/* binding */ localStorageFunctions),
/* harmony export */   "newGroupLogic": () => (/* binding */ newGroupLogic),
/* harmony export */   "newNoteLogic": () => (/* binding */ newNoteLogic),
/* harmony export */   "toggleDarkMode": () => (/* binding */ toggleDarkMode)
/* harmony export */ });
const getSection = (() => {
  "use strict";

  const container = document.getElementById("container");
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const home = document.getElementById("home");
  const groups = document.getElementById("groups");
  const notes = document.getElementById("notes");

  const addTask = document.getElementById("addTaskButton");
  const newGroup = document.getElementById("newGroupButton");
  const newNote = document.getElementById("newNoteButton");
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

  const taskDetails = document.getElementById("taskDetais");
  const taskDetailsText = document.getElementById("taskDetailsText");
  const taskDetailsPriority = document.getElementById("taskDetailsPriority");
  const taskDetailsCancel = document.getElementById("taskDetailsCancel");

  const noteBox = document.getElementById("noteBox");
  const noteTitle = document.getElementById("noteTitle");
  const noteBody = document.getElementById("noteBody");
  const noteSubmit = document.getElementById("noteSubmit");
  const noteCancel = document.getElementById("noteCancel");

  const noteDetails = document.getElementById("noteDetails");
  const noteDetailsText = document.getElementById("noteDetailsText");
  const noteDetailsCancel = document.getElementById("noteDetailsCancel");

  return {
    container,
    header,
    main,
    sidebar,
    content,
    home,
    groups,
    notes,
    addTask,
    newGroup,
    newNote,
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
    taskDetailsPriority,
    taskDetailsCancel,
    noteBox,
    noteTitle,
    noteBody,
    noteSubmit,
    noteCancel,
    noteDetails,
    noteDetailsText,
    noteDetailsCancel,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSection);

class Task {
  constructor(title, description, dueDate, priority, group) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.group = group;
  }
}

class Group {
  constructor(title) {
    this.title = title;
  }
}

class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

// creates the new task object
const addTaskLogic = (() => {
  const tasks = []; // contains task objects
  let taskId = 1;

  function loadTasks() {
    let newTask = new Task(
      taskTitle.value,
      taskDescription.value,
      taskDueDate.value,
      taskPriority.value,
      taskGroup.value
    );

    tasks.push(newTask);

    let task = document.createElement("div");
    let title = document.createElement("div");
    let group = document.createElement("div");
    let date = document.createElement("div");
    let taskDone = document.createElement("img");
    let taskButtons = document.createElement("div");

    tasks.forEach((item, i) => {
      task.classList.add("task");
      getSection.content.appendChild(task);
      title.classList.add("taskTitle");
      title.textContent = `${tasks[i].title}`;
      task.appendChild(title);
      group.textContent = `${tasks[i].group}`;
      task.appendChild(group);
      date.textContent = `${tasks[i].dueDate}`;
      task.appendChild(date);
      task.appendChild(taskButtons);
      taskDone.src = "../images/check-circle.svg";
      taskDone.id = "taskDone";
      taskButtons.appendChild(taskDone);
      localStorage.setItem('tasks', JSON.stringify(tasks)) 

      if (tasks[i].priority === "low") {
        task.style.backgroundColor = "var(--taskLow)";
      }
      if (tasks[i].priority === "medium") {
        task.style.backgroundColor = "var(--taskMedium)";
      }
      if (tasks[i].priority === "high") {
        task.style.backgroundColor = "var(--taskHigh)";
      }

      taskDone.addEventListener("click", () => {
        event.stopPropagation();
        task.remove();
        tasks.splice(i, 1);
        console.log(tasks);
        alert("Congrats! You have completed this task.");
      });

      task.addEventListener("click", () => {
        taskDetails.style.display = "flex";
        taskDetailsText.textContent = `${newTask.description}`;
        taskDetailsPriority.textContent = `Priority: ${newTask.priority}`;
        if (newTask.priority === "low") {
          taskDetailsPriority.style.color = "lightgreen";
        }
        if (newTask.priority === "medium") {
          taskDetailsPriority.style.color = "orange";
        }
        if (newTask.priority === "high") {
          taskDetailsPriority.style.color = "crimson";
        }
      });
    });
  }

  function reloadTasks() {
    tasks.forEach((item, i) => {
      let task = document.createElement("div");
      let title = document.createElement("div");
      let group = document.createElement("div");
      let date = document.createElement("div");
      let taskDone = document.createElement("img");
      let taskButtons = document.createElement("div");

      task.classList.add("task");
      getSection.content.appendChild(task);
      title.classList.add("taskTitle");
      title.textContent = `${tasks[i].title}`;
      task.appendChild(title);
      group.textContent = `${tasks[i].group}`;
      task.appendChild(group);
      date.textContent = `${tasks[i].dueDate}`;
      task.appendChild(date);
      task.appendChild(taskButtons);
      taskDone.src = "../images/check-circle.svg";
      taskDone.id = "taskDone";
      taskButtons.appendChild(taskDone);

      if (tasks[i].priority === "low") {
        task.style.backgroundColor = "var(--taskLow)";
      }
      if (tasks[i].priority === "medium") {
        task.style.backgroundColor = "var(--taskMedium)";
      }
      if (tasks[i].priority === "high") {
        task.style.backgroundColor = "var(--taskHigh)";
      }

      taskDone.addEventListener("click", () => {
        event.stopPropagation();
        task.remove();
        tasks.splice(i, 1);
        console.log(tasks);
        alert("Congrats! You have completed this task.");
      });

      task.addEventListener("click", () => {
        taskDetails.style.display = "flex";
        taskDetailsText.textContent = `${tasks[i].description}`;
        taskDetailsPriority.textContent = `Priority: ${tasks[i].priority}`;
        if (tasks[i].priority === "low") {
          taskDetailsPriority.style.color = "lightgreen";
        }
        if (tasks[i].priority === "medium") {
          taskDetailsPriority.style.color = "orange";
        }
        if (tasks[i].priority === "high") {
          taskDetailsPriority.style.color = "crimson";
        }
      });
    });
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
  getSection.taskDetailsCancel.addEventListener("click", () => {
    taskDetails.style.display = "none";
  });
})();

const newGroupLogic = (() => {
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

    localStorage.setItem('groups', JSON.stringify(groups)) 
  });

  getSection.groupCancel.addEventListener("click", () => {
    groupBox.style.display = "none";
    event.preventDefault();
  });

  function loadGroups() {
    groups.forEach((group, i) => {
      let displayGroup = document.createElement("div");
      let deleteGroup = document.createElement("img");

      displayGroup.classList.add("task");
      displayGroup.textContent = `${groups[i].title}`;
      deleteGroup.src = "../images/delete-circle.svg";
      deleteGroup.id = "deleteGroup";
      content.appendChild(displayGroup);
      displayGroup.appendChild(deleteGroup);
      deleteGroup.addEventListener("click", () => {
        event.stopPropagation();
        displayGroup.remove();
        groups.splice(i, 1);
        console.log(groups);
      });
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

const newNoteLogic = (() => {
  const notes = [];

  function clearContent() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  function loadNotes() {
    notes.forEach((note, i) => {
      let displayNote = document.createElement("div");
      let deleteNote = document.createElement("img");

      displayNote.classList.add("task");
      displayNote.style.backgroundColor = 'var(--noteGeneric)'
      displayNote.textContent = `${notes[i].title}`;
      deleteNote.src = "../images/delete-circle.svg";
      deleteNote.id = "deleteNote";
      content.appendChild(displayNote);
      displayNote.appendChild(deleteNote);
      deleteNote.addEventListener("click", () => {
        event.stopPropagation();
        displayNote.remove();
        notes.splice(i, 1);
        console.log(notes);
      });

      displayNote.addEventListener("click", () => {
        noteDetails.style.display = "flex";
        noteDetailsText.textContent = `${notes[i].body}`;
      });
    });
  }

  getSection.newNote.addEventListener("click", () => {
    noteBox.style.display = "flex";
  });
  getSection.noteSubmit.addEventListener("click", () => {
    event.preventDefault();
    noteBox.style.display = "none";
    const newNote = new Note(noteTitle.value, noteBody.value);
    notes.push(newNote);
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes)) 
  });
  getSection.noteCancel.addEventListener("click", () => {
    event.preventDefault();
    noteBox.style.display = "none";
  });
  getSection.notes.addEventListener("click", () => {
    clearContent();
    loadNotes();
  });
  getSection.noteDetailsCancel.addEventListener("click", () => {
    noteDetails.style.display = "none";
    event.preventDefault();
  });
})();

const toggleDarkMode = (() => {
  const titleYour = document.querySelector(".titleYour");

  getSection.darkMode.addEventListener("click", () => {
    if (document.body.style.backgroundColor !== "var(--bodyColorDark)") {
      document.body.style.backgroundColor = "var(--bodyColorDark)";
      getSection.container.style.backgroundColor = "var(--containerColorDark)";
      getSection.darkMode.src = "../images/weather-night.svg";

      getSection.content.style.backgroundColor = "var(--boxesDark)";
      getSection.home.style.backgroundColor = "var(--boxesDark)";
      getSection.groups.style.backgroundColor = "var(--boxesDark)";
      getSection.notes.style.backgroundColor = "var(--boxesDark)";

      getSection.home.style.color = "var(--textDark)";
      getSection.groups.style.color = "var(--textDark)";
      getSection.notes.style.color = "var(--textDark)";
      titleYour.style.color = "var(--textDark)";
    } else {
      document.body.style.backgroundColor = "var(--bodyColor)";
      getSection.container.style.backgroundColor = "var(--containerColor)";
      getSection.darkMode.src = "../images/lightbulb-on-outline.svg";

      getSection.content.style.backgroundColor = "var(--sidebarColor)";
      getSection.home.style.backgroundColor = "var(--sidebarColor)";
      getSection.groups.style.backgroundColor = "var(--sidebarColor)";
      getSection.notes.style.backgroundColor = "var(--sidebarColor)";

      getSection.home.style.color = "var(--textColor)";
      getSection.groups.style.color = "var(--textColor)";
      getSection.notes.style.color = "var(--textColor)";
      titleYour.style.color = "var(--textColor)";
    }
  });
})();

const localStorageFunctions = (() => {
  function addToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  let storedTasks = JSON.parse(localStorage.getItem('tasks'));
  let storedTasksLength = JSON.parse(localStorage.getItem('tasks')).length;
  let storedGroups = localStorage.getItem('groups');
  let storedNotes = localStorage.getItem('notes');

  let task = document.createElement("div");
  let title = document.createElement("div");
  let group = document.createElement("div");
  let date = document.createElement("div");
  let taskDone = document.createElement("img");
  let taskButtons = document.createElement("div");

  for (let i = 0; i < storedTasksLength; i++){ // only displays last task - FIX
    task.classList.add("task");
    getSection.content.appendChild(task);
    title.classList.add("taskTitle");
    title.textContent = `${storedTasks[i].title}`;
    task.appendChild(title);
    group.textContent = `${storedTasks[i].group}`;
    task.appendChild(group);
    date.textContent = `${storedTasks[i].dueDate}`;
    task.appendChild(date);
    task.appendChild(taskButtons);
    taskDone.src = "../images/check-circle.svg";
    taskDone.id = "taskDone";
    taskButtons.appendChild(taskDone);
  }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGdldFNlY3Rpb24gPSAoKCkgPT4ge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgY29uc3QgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cHNcIik7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlc1wiKTtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnV0dG9uXCIpO1xuICBjb25zdCBuZXdHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R3JvdXBCdXR0b25cIik7XG4gIGNvbnN0IG5ld05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld05vdGVCdXR0b25cIik7XG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrTW9kZUJ1dHRvblwiKTtcblxuICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQm94XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gIGNvbnN0IHRhc2tHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0dyb3VwXCIpO1xuICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrU3VibWl0XCIpO1xuICBjb25zdCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IGdyb3VwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cEJveFwiKTtcbiAgY29uc3QgZ3JvdXBUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBUaXRsZVwiKTtcbiAgY29uc3QgZ3JvdXBTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwU3VibWl0XCIpO1xuICBjb25zdCBncm91cENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBDYW5jZWxcIik7XG5cbiAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaXNcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNUZXh0XCIpO1xuICBjb25zdCB0YXNrRGV0YWlsc1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlsc1ByaW9yaXR5XCIpO1xuICBjb25zdCB0YXNrRGV0YWlsc0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNDYW5jZWxcIik7XG5cbiAgY29uc3Qgbm90ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZUJveFwiKTtcbiAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlVGl0bGVcIik7XG4gIGNvbnN0IG5vdGVCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlQm9keVwiKTtcbiAgY29uc3Qgbm90ZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZVN1Ym1pdFwiKTtcbiAgY29uc3Qgbm90ZUNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZUNhbmNlbFwiKTtcblxuICBjb25zdCBub3RlRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZURldGFpbHNcIik7XG4gIGNvbnN0IG5vdGVEZXRhaWxzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZURldGFpbHNUZXh0XCIpO1xuICBjb25zdCBub3RlRGV0YWlsc0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZURldGFpbHNDYW5jZWxcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgaGVhZGVyLFxuICAgIG1haW4sXG4gICAgc2lkZWJhcixcbiAgICBjb250ZW50LFxuICAgIGhvbWUsXG4gICAgZ3JvdXBzLFxuICAgIG5vdGVzLFxuICAgIGFkZFRhc2ssXG4gICAgbmV3R3JvdXAsXG4gICAgbmV3Tm90ZSxcbiAgICBkYXJrTW9kZSxcbiAgICB0YXNrQm94LFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgdGFza0R1ZURhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIHRhc2tHcm91cCxcbiAgICB0YXNrU3VibWl0LFxuICAgIHRhc2tDYW5jZWwsXG4gICAgZ3JvdXBCb3gsXG4gICAgZ3JvdXBUaXRsZSxcbiAgICBncm91cFN1Ym1pdCxcbiAgICBncm91cENhbmNlbCxcbiAgICB0YXNrRGV0YWlscyxcbiAgICB0YXNrRGV0YWlsc1RleHQsXG4gICAgdGFza0RldGFpbHNQcmlvcml0eSxcbiAgICB0YXNrRGV0YWlsc0NhbmNlbCxcbiAgICBub3RlQm94LFxuICAgIG5vdGVUaXRsZSxcbiAgICBub3RlQm9keSxcbiAgICBub3RlU3VibWl0LFxuICAgIG5vdGVDYW5jZWwsXG4gICAgbm90ZURldGFpbHMsXG4gICAgbm90ZURldGFpbHNUZXh0LFxuICAgIG5vdGVEZXRhaWxzQ2FuY2VsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VjdGlvbjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBncm91cCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGJvZHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIHRoZSBuZXcgdGFzayBvYmplY3RcbmV4cG9ydCBjb25zdCBhZGRUYXNrTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdOyAvLyBjb250YWlucyB0YXNrIG9iamVjdHNcbiAgbGV0IHRhc2tJZCA9IDE7XG5cbiAgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSxcbiAgICAgIHRhc2tHcm91cC52YWx1ZVxuICAgICk7XG5cbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZXQgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGdyb3VwLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZ3JvdXB9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmR1ZURhdGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcbiAgICAgIHRhc2tEb25lLnNyYyA9IFwiLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICAgIHRhc2tEb25lLmlkID0gXCJ0YXNrRG9uZVwiO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKSBcblxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrTG93KVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrTWVkaXVtKVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0hpZ2gpXCI7XG4gICAgICB9XG5cbiAgICAgIHRhc2tEb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgYWxlcnQoXCJDb25ncmF0cyEgWW91IGhhdmUgY29tcGxldGVkIHRoaXMgdGFzay5cIik7XG4gICAgICB9KTtcblxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25ld1Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtuZXdUYXNrLnByaW9yaXR5fWA7XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFRhc2tzKCkge1xuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS50aXRsZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBncm91cC50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmdyb3VwfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5zcmMgPSBcIi4uL2ltYWdlcy9jaGVjay1jaXJjbGUuc3ZnXCI7XG4gICAgICB0YXNrRG9uZS5pZCA9IFwidGFza0RvbmVcIjtcbiAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tEb25lKTtcblxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrTG93KVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrTWVkaXVtKVwiO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0hpZ2gpXCI7XG4gICAgICB9XG5cbiAgICAgIHRhc2tEb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgYWxlcnQoXCJDb25ncmF0cyEgWW91IGhhdmUgY29tcGxldGVkIHRoaXMgdGFzay5cIik7XG4gICAgICB9KTtcblxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGFza3NbaV0ucHJpb3JpdHl9YDtcbiAgICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJjcmltc29uXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlY3Rpb24uYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsb2FkVGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgcmVsb2FkVGFza3MoKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza0RldGFpbHNDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0dyb3VwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBncm91cHMgPSBbXTtcblxuICBnZXRTZWN0aW9uLm5ld0dyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ncm91cFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKGdyb3VwVGl0bGUudmFsdWUpO1xuICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBncm91cHMucHVzaChncm91cCk7XG4gICAgY29uc29sZS5sb2coZ3JvdXApO1xuICAgIGNvbnNvbGUubG9nKGdyb3Vwcyk7XG5cbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBncm91cC50aXRsZTtcbiAgICBvcHRpb24uaWQgPSBncm91cC50aXRsZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBncm91cC50aXRsZTtcbiAgICBnZXRTZWN0aW9uLnRhc2tHcm91cC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dyb3VwcycsIEpTT04uc3RyaW5naWZ5KGdyb3VwcykpIFxuICB9KTtcblxuICBnZXRTZWN0aW9uLmdyb3VwQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGxvYWRHcm91cHMoKSB7XG4gICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwLCBpKSA9PiB7XG4gICAgICBsZXQgZGlzcGxheUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkZWxldGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGRpc3BsYXlHcm91cC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGRpc3BsYXlHcm91cC50ZXh0Q29udGVudCA9IGAke2dyb3Vwc1tpXS50aXRsZX1gO1xuICAgICAgZGVsZXRlR3JvdXAuc3JjID0gXCIuLi9pbWFnZXMvZGVsZXRlLWNpcmNsZS5zdmdcIjtcbiAgICAgIGRlbGV0ZUdyb3VwLmlkID0gXCJkZWxldGVHcm91cFwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5R3JvdXApO1xuICAgICAgZGlzcGxheUdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUdyb3VwKTtcbiAgICAgIGRlbGV0ZUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkaXNwbGF5R3JvdXAucmVtb3ZlKCk7XG4gICAgICAgIGdyb3Vwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyb3Vwcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWN0aW9uLmdyb3Vwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGxvYWRHcm91cHMoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3Tm90ZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSBbXTtcblxuICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZE5vdGVzKCkge1xuICAgIG5vdGVzLmZvckVhY2goKG5vdGUsIGkpID0+IHtcbiAgICAgIGxldCBkaXNwbGF5Tm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGVsZXRlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGRpc3BsYXlOb3RlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZGlzcGxheU5vdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLW5vdGVHZW5lcmljKSdcbiAgICAgIGRpc3BsYXlOb3RlLnRleHRDb250ZW50ID0gYCR7bm90ZXNbaV0udGl0bGV9YDtcbiAgICAgIGRlbGV0ZU5vdGUuc3JjID0gXCIuLi9pbWFnZXMvZGVsZXRlLWNpcmNsZS5zdmdcIjtcbiAgICAgIGRlbGV0ZU5vdGUuaWQgPSBcImRlbGV0ZU5vdGVcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheU5vdGUpO1xuICAgICAgZGlzcGxheU5vdGUuYXBwZW5kQ2hpbGQoZGVsZXRlTm90ZSk7XG4gICAgICBkZWxldGVOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkaXNwbGF5Tm90ZS5yZW1vdmUoKTtcbiAgICAgICAgbm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhub3Rlcyk7XG4gICAgICB9KTtcblxuICAgICAgZGlzcGxheU5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbm90ZURldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBub3RlRGV0YWlsc1RleHQudGV4dENvbnRlbnQgPSBgJHtub3Rlc1tpXS5ib2R5fWA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNlY3Rpb24ubmV3Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5vdGVCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ub3RlU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBub3RlQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBuZXdOb3RlID0gbmV3IE5vdGUobm90ZVRpdGxlLnZhbHVlLCBub3RlQm9keS52YWx1ZSk7XG4gICAgbm90ZXMucHVzaChuZXdOb3RlKTtcbiAgICBjb25zb2xlLmxvZyhub3Rlcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZXMpKSBcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZE5vdGVzKCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVEZXRhaWxzQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbm90ZURldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgdGl0bGVZb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVlvdXJcIik7XG5cbiAgZ2V0U2VjdGlvbi5kYXJrTW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ2YXIoLS1ib2R5Q29sb3JEYXJrKVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9keUNvbG9yRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tY29udGFpbmVyQ29sb3JEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5kYXJrTW9kZS5zcmMgPSBcIi4uL2ltYWdlcy93ZWF0aGVyLW5pZ2h0LnN2Z1wiO1xuXG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJveGVzRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLm5vdGVzLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0RGFyaylcIjtcbiAgICAgIHRpdGxlWW91ci5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib2R5Q29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWNvbnRhaW5lckNvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5kYXJrTW9kZS5zcmMgPSBcIi4uL2ltYWdlcy9saWdodGJ1bGItb24tb3V0bGluZS5zdmdcIjtcblxuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2lkZWJhckNvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2lkZWJhckNvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ncm91cHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLm5vdGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2lkZWJhckNvbG9yKVwiO1xuXG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24uZ3JvdXBzLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0Q29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLm5vdGVzLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0Q29sb3IpXCI7XG4gICAgICB0aXRsZVlvdXIuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICB9XG5cbiAgbGV0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGxldCBzdG9yZWRUYXNrc0xlbmd0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpLmxlbmd0aDtcbiAgbGV0IHN0b3JlZEdyb3VwcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm91cHMnKTtcbiAgbGV0IHN0b3JlZE5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZWRUYXNrc0xlbmd0aDsgaSsrKXsgLy8gb25seSBkaXNwbGF5cyBsYXN0IHRhc2sgLSBGSVhcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c3RvcmVkVGFza3NbaV0udGl0bGV9YDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBncm91cC50ZXh0Q29udGVudCA9IGAke3N0b3JlZFRhc2tzW2ldLmdyb3VwfWA7XG4gICAgdGFzay5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3N0b3JlZFRhc2tzW2ldLmR1ZURhdGV9YDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgIHRhc2tEb25lLnNyYyA9IFwiLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICB0YXNrRG9uZS5pZCA9IFwidGFza0RvbmVcIjtcbiAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG4gIH1cblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==