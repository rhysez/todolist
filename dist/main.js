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

  let storedTasks = JSON.parse(localStorage.getItem('tasks'));
  let storedGroups = localStorage.getItem('groups');
  let storedNotes = localStorage.getItem('notes');

  let task = document.createElement("div");
  let title = document.createElement("div");
  let group = document.createElement("div");
  let date = document.createElement("div");
  let taskDone = document.createElement("img");
  let taskButtons = document.createElement("div");

   // only displays last task - FIX
  if (storedTasks && storedTasks.length > 0) {
    for (let i = 0; i <= storedTasks.length; i++){
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2V0U2VjdGlvbiA9ICgoKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBjb25zdCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3Vwc1wiKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIik7XG4gIGNvbnN0IG5ld0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHcm91cEJ1dHRvblwiKTtcbiAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Tm90ZUJ1dHRvblwiKTtcbiAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtNb2RlQnV0dG9uXCIpO1xuXG4gIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCb3hcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKTtcbiAgY29uc3QgdGFza0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrR3JvdXBcIik7XG4gIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDYW5jZWxcIik7XG5cbiAgY29uc3QgZ3JvdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQm94XCIpO1xuICBjb25zdCBncm91cFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFRpdGxlXCIpO1xuICBjb25zdCBncm91cFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBTdWJtaXRcIik7XG4gIGNvbnN0IGdyb3VwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cENhbmNlbFwiKTtcblxuICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpc1wiKTtcbiAgY29uc3QgdGFza0RldGFpbHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlsc1RleHRcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzUHJpb3JpdHlcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlsc0NhbmNlbFwiKTtcblxuICBjb25zdCBub3RlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlQm94XCIpO1xuICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVUaXRsZVwiKTtcbiAgY29uc3Qgbm90ZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVCb2R5XCIpO1xuICBjb25zdCBub3RlU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlU3VibWl0XCIpO1xuICBjb25zdCBub3RlQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IG5vdGVEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc1wiKTtcbiAgY29uc3Qgbm90ZURldGFpbHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc1RleHRcIik7XG4gIGNvbnN0IG5vdGVEZXRhaWxzQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc0NhbmNlbFwiKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBoZWFkZXIsXG4gICAgbWFpbixcbiAgICBzaWRlYmFyLFxuICAgIGNvbnRlbnQsXG4gICAgaG9tZSxcbiAgICBncm91cHMsXG4gICAgbm90ZXMsXG4gICAgYWRkVGFzayxcbiAgICBuZXdHcm91cCxcbiAgICBuZXdOb3RlLFxuICAgIGRhcmtNb2RlLFxuICAgIHRhc2tCb3gsXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgdGFza0dyb3VwLFxuICAgIHRhc2tTdWJtaXQsXG4gICAgdGFza0NhbmNlbCxcbiAgICBncm91cEJveCxcbiAgICBncm91cFRpdGxlLFxuICAgIGdyb3VwU3VibWl0LFxuICAgIGdyb3VwQ2FuY2VsLFxuICAgIHRhc2tEZXRhaWxzLFxuICAgIHRhc2tEZXRhaWxzVGV4dCxcbiAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LFxuICAgIHRhc2tEZXRhaWxzQ2FuY2VsLFxuICAgIG5vdGVCb3gsXG4gICAgbm90ZVRpdGxlLFxuICAgIG5vdGVCb2R5LFxuICAgIG5vdGVTdWJtaXQsXG4gICAgbm90ZUNhbmNlbCxcbiAgICBub3RlRGV0YWlscyxcbiAgICBub3RlRGV0YWlsc1RleHQsXG4gICAgbm90ZURldGFpbHNDYW5jZWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZWN0aW9uO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGdyb3VwKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyb3VwIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGUge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgYm9keSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGhlIG5ldyB0YXNrIG9iamVjdFxuZXhwb3J0IGNvbnN0IGFkZFRhc2tMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107IC8vIGNvbnRhaW5zIHRhc2sgb2JqZWN0c1xuICBsZXQgdGFza0lkID0gMTtcblxuICBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlLnZhbHVlLFxuICAgICAgdGFza1ByaW9yaXR5LnZhbHVlLFxuICAgICAgdGFza0dyb3VwLnZhbHVlXG4gICAgKTtcblxuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0udGl0bGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgZ3JvdXAudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5ncm91cH1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZHVlRGF0ZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgdGFza0RvbmUuc3JjID0gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiO1xuICAgICAgdGFza0RvbmUuaWQgPSBcInRhc2tEb25lXCI7XG4gICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpIFxuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBhbGVydChcIkNvbmdyYXRzISBZb3UgaGF2ZSBjb21wbGV0ZWQgdGhpcyB0YXNrLlwiKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgdGFza0RldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYCR7bmV3VGFzay5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke25ld1Rhc2sucHJpb3JpdHl9YDtcbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJsaWdodGdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJjcmltc29uXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkVGFza3MoKSB7XG4gICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbGV0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGdyb3VwLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZ3JvdXB9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmR1ZURhdGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcbiAgICAgIHRhc2tEb25lLnNyYyA9IFwiLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICAgIHRhc2tEb25lLmlkID0gXCJ0YXNrRG9uZVwiO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBhbGVydChcIkNvbmdyYXRzISBZb3UgaGF2ZSBjb21wbGV0ZWQgdGhpcyB0YXNrLlwiKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgdGFza0RldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0YXNrc1tpXS5wcmlvcml0eX1gO1xuICAgICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJsaWdodGdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImNyaW1zb25cIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VjdGlvbi5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxvYWRUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICByZWxvYWRUYXNrcygpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrRGV0YWlsc0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3R3JvdXBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IFtdO1xuXG4gIGdldFNlY3Rpb24ubmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBUaXRsZS52YWx1ZSk7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhncm91cCk7XG4gICAgY29uc29sZS5sb2coZ3JvdXBzKTtcblxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi5pZCA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLnRpdGxlO1xuICAgIGdldFNlY3Rpb24udGFza0dyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3JvdXBzJywgSlNPTi5zdHJpbmdpZnkoZ3JvdXBzKSkgXG4gIH0pO1xuXG4gIGdldFNlY3Rpb24uZ3JvdXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbG9hZEdyb3VwcygpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXAsIGkpID0+IHtcbiAgICAgIGxldCBkaXNwbGF5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGRlbGV0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgZGlzcGxheUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZGlzcGxheUdyb3VwLnRleHRDb250ZW50ID0gYCR7Z3JvdXBzW2ldLnRpdGxlfWA7XG4gICAgICBkZWxldGVHcm91cC5zcmMgPSBcIi4uL2ltYWdlcy9kZWxldGUtY2lyY2xlLnN2Z1wiO1xuICAgICAgZGVsZXRlR3JvdXAuaWQgPSBcImRlbGV0ZUdyb3VwXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlHcm91cCk7XG4gICAgICBkaXNwbGF5R3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlR3JvdXApO1xuICAgICAgZGVsZXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BsYXlHcm91cC5yZW1vdmUoKTtcbiAgICAgICAgZ3JvdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXBzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlY3Rpb24uZ3JvdXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZEdyb3VwcygpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXdOb3RlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBub3RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkTm90ZXMoKSB7XG4gICAgbm90ZXMuZm9yRWFjaCgobm90ZSwgaSkgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkZWxldGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgZGlzcGxheU5vdGUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBkaXNwbGF5Tm90ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tbm90ZUdlbmVyaWMpJ1xuICAgICAgZGlzcGxheU5vdGUudGV4dENvbnRlbnQgPSBgJHtub3Rlc1tpXS50aXRsZX1gO1xuICAgICAgZGVsZXRlTm90ZS5zcmMgPSBcIi4uL2ltYWdlcy9kZWxldGUtY2lyY2xlLnN2Z1wiO1xuICAgICAgZGVsZXRlTm90ZS5pZCA9IFwiZGVsZXRlTm90ZVwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5Tm90ZSk7XG4gICAgICBkaXNwbGF5Tm90ZS5hcHBlbmRDaGlsZChkZWxldGVOb3RlKTtcbiAgICAgIGRlbGV0ZU5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BsYXlOb3RlLnJlbW92ZSgpO1xuICAgICAgICBub3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwbGF5Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBub3RlRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG5vdGVEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25vdGVzW2ldLmJvZHl9YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VjdGlvbi5uZXdOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5vdGVCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgTm90ZShub3RlVGl0bGUudmFsdWUsIG5vdGVCb2R5LnZhbHVlKTtcbiAgICBub3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlcykpIFxuICB9KTtcbiAgZ2V0U2VjdGlvbi5ub3RlQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBub3RlQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBsb2FkTm90ZXMoKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZURldGFpbHNDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RlRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCB0aXRsZVlvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlWW91clwiKTtcblxuICBnZXRTZWN0aW9uLmRhcmtNb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcInZhcigtLWJvZHlDb2xvckRhcmspXCIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib2R5Q29sb3JEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1jb250YWluZXJDb2xvckRhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmRhcmtNb2RlLnNyYyA9IFwiLi4vaW1hZ2VzL3dlYXRoZXItbmlnaHQuc3ZnXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJveGVzRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJveGVzRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uZ3JvdXBzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm94ZXNEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ub3Rlcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJveGVzRGFyaylcIjtcblxuICAgICAgZ2V0U2VjdGlvbi5ob21lLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0RGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uZ3JvdXBzLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0RGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHREYXJrKVwiO1xuICAgICAgdGl0bGVZb3VyLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0RGFyaylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJvZHlDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24uY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tY29udGFpbmVyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmRhcmtNb2RlLnNyYyA9IFwiLi4vaW1hZ2VzL2xpZ2h0YnVsYi1vbi1vdXRsaW5lLnN2Z1wiO1xuXG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNpZGViYXJDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ncm91cHMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICAgIHRpdGxlWW91ci5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlRnVuY3Rpb25zID0gKCgpID0+IHtcblxuICBsZXQgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgbGV0IHN0b3JlZEdyb3VwcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm91cHMnKTtcbiAgbGV0IHN0b3JlZE5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgIC8vIG9ubHkgZGlzcGxheXMgbGFzdCB0YXNrIC0gRklYXG4gIGlmIChzdG9yZWRUYXNrcyAmJiBzdG9yZWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RvcmVkVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3N0b3JlZFRhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGdyb3VwLnRleHRDb250ZW50ID0gYCR7c3RvcmVkVGFza3NbaV0uZ3JvdXB9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3N0b3JlZFRhc2tzW2ldLmR1ZURhdGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcbiAgICAgIHRhc2tEb25lLnNyYyA9IFwiLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICAgIHRhc2tEb25lLmlkID0gXCJ0YXNrRG9uZVwiO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuICB9XG59XG5cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=