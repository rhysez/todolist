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
      titleYour.style.color = "var(--titleYourDark)";
    } else {
      document.body.style.backgroundColor = "var(--bodyColor)";
      getSection.container.style.backgroundColor = "var(--containerColor)";
      titleYour.style.color = "var(--titleYour)";
    }
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2V0U2VjdGlvbiA9ICgoKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBjb25zdCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3Vwc1wiKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIik7XG4gIGNvbnN0IG5ld0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdHcm91cEJ1dHRvblwiKTtcbiAgY29uc3QgbmV3Tm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Tm90ZUJ1dHRvblwiKTtcbiAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtNb2RlQnV0dG9uXCIpO1xuXG4gIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCb3hcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKTtcbiAgY29uc3QgdGFza0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrR3JvdXBcIik7XG4gIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDYW5jZWxcIik7XG5cbiAgY29uc3QgZ3JvdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQm94XCIpO1xuICBjb25zdCBncm91cFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFRpdGxlXCIpO1xuICBjb25zdCBncm91cFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBTdWJtaXRcIik7XG4gIGNvbnN0IGdyb3VwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cENhbmNlbFwiKTtcblxuICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpc1wiKTtcbiAgY29uc3QgdGFza0RldGFpbHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlsc1RleHRcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzUHJpb3JpdHlcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlsc0NhbmNlbFwiKTtcblxuICBjb25zdCBub3RlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlQm94XCIpO1xuICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVUaXRsZVwiKTtcbiAgY29uc3Qgbm90ZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVCb2R5XCIpO1xuICBjb25zdCBub3RlU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlU3VibWl0XCIpO1xuICBjb25zdCBub3RlQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IG5vdGVEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc1wiKTtcbiAgY29uc3Qgbm90ZURldGFpbHNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc1RleHRcIik7XG4gIGNvbnN0IG5vdGVEZXRhaWxzQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlRGV0YWlsc0NhbmNlbFwiKTtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBoZWFkZXIsXG4gICAgbWFpbixcbiAgICBzaWRlYmFyLFxuICAgIGNvbnRlbnQsXG4gICAgaG9tZSxcbiAgICBncm91cHMsXG4gICAgbm90ZXMsXG4gICAgYWRkVGFzayxcbiAgICBuZXdHcm91cCxcbiAgICBuZXdOb3RlLFxuICAgIGRhcmtNb2RlLFxuICAgIHRhc2tCb3gsXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgdGFza0dyb3VwLFxuICAgIHRhc2tTdWJtaXQsXG4gICAgdGFza0NhbmNlbCxcbiAgICBncm91cEJveCxcbiAgICBncm91cFRpdGxlLFxuICAgIGdyb3VwU3VibWl0LFxuICAgIGdyb3VwQ2FuY2VsLFxuICAgIHRhc2tEZXRhaWxzLFxuICAgIHRhc2tEZXRhaWxzVGV4dCxcbiAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LFxuICAgIHRhc2tEZXRhaWxzQ2FuY2VsLFxuICAgIG5vdGVCb3gsXG4gICAgbm90ZVRpdGxlLFxuICAgIG5vdGVCb2R5LFxuICAgIG5vdGVTdWJtaXQsXG4gICAgbm90ZUNhbmNlbCxcbiAgICBub3RlRGV0YWlscyxcbiAgICBub3RlRGV0YWlsc1RleHQsXG4gICAgbm90ZURldGFpbHNDYW5jZWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZWN0aW9uO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGdyb3VwKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyb3VwIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGUge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgYm9keSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG5cbi8vIGNyZWF0ZXMgdGhlIG5ldyB0YXNrIG9iamVjdFxuZXhwb3J0IGNvbnN0IGFkZFRhc2tMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107IC8vIGNvbnRhaW5zIHRhc2sgb2JqZWN0c1xuICBsZXQgdGFza0lkID0gMTtcblxuICBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlLnZhbHVlLFxuICAgICAgdGFza1ByaW9yaXR5LnZhbHVlLFxuICAgICAgdGFza0dyb3VwLnZhbHVlXG4gICAgKTtcblxuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0udGl0bGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgZ3JvdXAudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5ncm91cH1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZHVlRGF0ZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgdGFza0RvbmUuc3JjID0gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiO1xuICAgICAgdGFza0RvbmUuaWQgPSBcInRhc2tEb25lXCI7XG4gICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG5cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0xvdylcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza01lZGl1bSlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tIaWdoKVwiO1xuICAgICAgfVxuXG4gICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGFsZXJ0KFwiQ29uZ3JhdHMhIFlvdSBoYXZlIGNvbXBsZXRlZCB0aGlzIHRhc2suXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0YXNrRGV0YWlsc1RleHQudGV4dENvbnRlbnQgPSBgJHtuZXdUYXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7bmV3VGFzay5wcmlvcml0eX1gO1xuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImNyaW1zb25cIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxvYWRUYXNrcygpIHtcbiAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBsZXQgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0udGl0bGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgZ3JvdXAudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5ncm91cH1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZHVlRGF0ZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgdGFza0RvbmUuc3JjID0gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiO1xuICAgICAgdGFza0RvbmUuaWQgPSBcInRhc2tEb25lXCI7XG4gICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRG9uZSk7XG5cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0xvdylcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza01lZGl1bSlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tIaWdoKVwiO1xuICAgICAgfVxuXG4gICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGFsZXJ0KFwiQ29uZ3JhdHMhIFlvdSBoYXZlIGNvbXBsZXRlZCB0aGlzIHRhc2suXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0YXNrRGV0YWlsc1RleHQudGV4dENvbnRlbnQgPSBgJHtuZXdUYXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7bmV3VGFzay5wcmlvcml0eX1gO1xuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImNyaW1zb25cIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VjdGlvbi5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxvYWRUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICByZWxvYWRUYXNrcygpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrRGV0YWlsc0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3R3JvdXBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IFtdO1xuXG4gIGdldFNlY3Rpb24ubmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBUaXRsZS52YWx1ZSk7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhncm91cCk7XG4gICAgY29uc29sZS5sb2coZ3JvdXBzKTtcblxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi5pZCA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLnRpdGxlO1xuICAgIGdldFNlY3Rpb24udGFza0dyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGdldFNlY3Rpb24uZ3JvdXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbG9hZEdyb3VwcygpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXAsIGkpID0+IHtcbiAgICAgIGxldCBkaXNwbGF5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGRlbGV0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgZGlzcGxheUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZGlzcGxheUdyb3VwLnRleHRDb250ZW50ID0gYCR7Z3JvdXBzW2ldLnRpdGxlfWA7XG4gICAgICBkZWxldGVHcm91cC5zcmMgPSBcIi4uL2ltYWdlcy9kZWxldGUtY2lyY2xlLnN2Z1wiO1xuICAgICAgZGVsZXRlR3JvdXAuaWQgPSBcImRlbGV0ZUdyb3VwXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlHcm91cCk7XG4gICAgICBkaXNwbGF5R3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlR3JvdXApO1xuICAgICAgZGVsZXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BsYXlHcm91cC5yZW1vdmUoKTtcbiAgICAgICAgZ3JvdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXBzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlY3Rpb24uZ3JvdXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZEdyb3VwcygpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXdOb3RlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBub3RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkTm90ZXMoKSB7XG4gICAgbm90ZXMuZm9yRWFjaCgobm90ZSwgaSkgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkZWxldGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgZGlzcGxheU5vdGUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBkaXNwbGF5Tm90ZS50ZXh0Q29udGVudCA9IGAke25vdGVzW2ldLnRpdGxlfWA7XG4gICAgICBkZWxldGVOb3RlLnNyYyA9IFwiLi4vaW1hZ2VzL2RlbGV0ZS1jaXJjbGUuc3ZnXCI7XG4gICAgICBkZWxldGVOb3RlLmlkID0gXCJkZWxldGVOb3RlXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlOb3RlKTtcbiAgICAgIGRpc3BsYXlOb3RlLmFwcGVuZENoaWxkKGRlbGV0ZU5vdGUpO1xuICAgICAgZGVsZXRlTm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGxheU5vdGUucmVtb3ZlKCk7XG4gICAgICAgIG5vdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cobm90ZXMpO1xuICAgICAgfSk7XG5cbiAgICAgIGRpc3BsYXlOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5vdGVEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbm90ZURldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYCR7bm90ZXNbaV0uYm9keX1gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWN0aW9uLm5ld05vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RlQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgbmV3Tm90ZSA9IG5ldyBOb3RlKG5vdGVUaXRsZS52YWx1ZSwgbm90ZUJvZHkudmFsdWUpO1xuICAgIG5vdGVzLnB1c2gobmV3Tm90ZSk7XG4gICAgY29uc29sZS5sb2cobm90ZXMpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ub3RlQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBub3RlQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBsb2FkTm90ZXMoKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZURldGFpbHNDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RlRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCB0aXRsZVlvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlWW91clwiKTtcblxuICBnZXRTZWN0aW9uLmRhcmtNb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcInZhcigtLWJvZHlDb2xvckRhcmspXCIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib2R5Q29sb3JEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1jb250YWluZXJDb2xvckRhcmspXCI7XG4gICAgICB0aXRsZVlvdXIuc3R5bGUuY29sb3IgPSBcInZhcigtLXRpdGxlWW91ckRhcmspXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib2R5Q29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWNvbnRhaW5lckNvbG9yKVwiO1xuICAgICAgdGl0bGVZb3VyLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10aXRsZVlvdXIpXCI7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=