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
      saveLocalTasks();

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

  function saveLocalTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

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

    saveLocalGroups();
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

  function saveLocalGroups() {
    localStorage.setItem('groups', JSON.stringify(groups));
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
      displayNote.style.backgroundColor = "var(--noteGeneric)";
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
    localStorage.setItem("notes", JSON.stringify(notes));
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBnZXRTZWN0aW9uID0gKCgpID0+IHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGdyb3VwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBzXCIpO1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgY29uc3QgbmV3R3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dyb3VwQnV0dG9uXCIpO1xuICBjb25zdCBuZXdOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdOb3RlQnV0dG9uXCIpO1xuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya01vZGVCdXR0b25cIik7XG5cbiAgY29uc3QgdGFza0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0JveFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpO1xuICBjb25zdCB0YXNrR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tHcm91cFwiKTtcbiAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1N1Ym1pdFwiKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NhbmNlbFwiKTtcblxuICBjb25zdCBncm91cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBCb3hcIik7XG4gIGNvbnN0IGdyb3VwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwVGl0bGVcIik7XG4gIGNvbnN0IGdyb3VwU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFN1Ym1pdFwiKTtcbiAgY29uc3QgZ3JvdXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlzXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzVGV4dFwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNQcmlvcml0eVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IG5vdGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVCb3hcIik7XG4gIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZVRpdGxlXCIpO1xuICBjb25zdCBub3RlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZUJvZHlcIik7XG4gIGNvbnN0IG5vdGVTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVTdWJtaXRcIik7XG4gIGNvbnN0IG5vdGVDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVDYW5jZWxcIik7XG5cbiAgY29uc3Qgbm90ZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzXCIpO1xuICBjb25zdCBub3RlRGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzVGV4dFwiKTtcbiAgY29uc3Qgbm90ZURldGFpbHNDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzQ2FuY2VsXCIpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGhlYWRlcixcbiAgICBtYWluLFxuICAgIHNpZGViYXIsXG4gICAgY29udGVudCxcbiAgICBob21lLFxuICAgIGdyb3VwcyxcbiAgICBub3RlcyxcbiAgICBhZGRUYXNrLFxuICAgIG5ld0dyb3VwLFxuICAgIG5ld05vdGUsXG4gICAgZGFya01vZGUsXG4gICAgdGFza0JveCxcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrR3JvdXAsXG4gICAgdGFza1N1Ym1pdCxcbiAgICB0YXNrQ2FuY2VsLFxuICAgIGdyb3VwQm94LFxuICAgIGdyb3VwVGl0bGUsXG4gICAgZ3JvdXBTdWJtaXQsXG4gICAgZ3JvdXBDYW5jZWwsXG4gICAgdGFza0RldGFpbHMsXG4gICAgdGFza0RldGFpbHNUZXh0LFxuICAgIHRhc2tEZXRhaWxzUHJpb3JpdHksXG4gICAgdGFza0RldGFpbHNDYW5jZWwsXG4gICAgbm90ZUJveCxcbiAgICBub3RlVGl0bGUsXG4gICAgbm90ZUJvZHksXG4gICAgbm90ZVN1Ym1pdCxcbiAgICBub3RlQ2FuY2VsLFxuICAgIG5vdGVEZXRhaWxzLFxuICAgIG5vdGVEZXRhaWxzVGV4dCxcbiAgICBub3RlRGV0YWlsc0NhbmNlbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNlY3Rpb247XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ3JvdXApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuLy8gY3JlYXRlcyB0aGUgbmV3IHRhc2sgb2JqZWN0XG5leHBvcnQgY29uc3QgYWRkVGFza0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTsgLy8gY29udGFpbnMgdGFzayBvYmplY3RzXG4gIGxldCB0YXNrSWQgPSAxO1xuXG4gIGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICB0YXNrR3JvdXAudmFsdWVcbiAgICApO1xuXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS50aXRsZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBncm91cC50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmdyb3VwfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5zcmMgPSBcIi4uL2ltYWdlcy9jaGVjay1jaXJjbGUuc3ZnXCI7XG4gICAgICB0YXNrRG9uZS5pZCA9IFwidGFza0RvbmVcIjtcbiAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tEb25lKTtcbiAgICAgIHNhdmVMb2NhbFRhc2tzKCk7XG5cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0xvdylcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza01lZGl1bSlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tIaWdoKVwiO1xuICAgICAgfVxuXG4gICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGFsZXJ0KFwiQ29uZ3JhdHMhIFlvdSBoYXZlIGNvbXBsZXRlZCB0aGlzIHRhc2suXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0YXNrRGV0YWlsc1RleHQudGV4dENvbnRlbnQgPSBgJHtuZXdUYXNrLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7bmV3VGFzay5wcmlvcml0eX1gO1xuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImNyaW1zb25cIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlTG9jYWxUYXNrcygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXG4gIH07XG5cbiAgZnVuY3Rpb24gcmVsb2FkVGFza3MoKSB7XG4gICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbGV0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGdyb3VwLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZ3JvdXB9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmR1ZURhdGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcbiAgICAgIHRhc2tEb25lLnNyYyA9IFwiLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICAgIHRhc2tEb25lLmlkID0gXCJ0YXNrRG9uZVwiO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBhbGVydChcIkNvbmdyYXRzISBZb3UgaGF2ZSBjb21wbGV0ZWQgdGhpcyB0YXNrLlwiKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgdGFza0RldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0YXNrc1tpXS5wcmlvcml0eX1gO1xuICAgICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJsaWdodGdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2tzW2ldLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImNyaW1zb25cIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VjdGlvbi5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxvYWRUYXNrcygpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICByZWxvYWRUYXNrcygpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrRGV0YWlsc0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3R3JvdXBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IFtdO1xuXG4gIGdldFNlY3Rpb24ubmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBUaXRsZS52YWx1ZSk7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhncm91cCk7XG4gICAgY29uc29sZS5sb2coZ3JvdXBzKTtcblxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi5pZCA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLnRpdGxlO1xuICAgIGdldFNlY3Rpb24udGFza0dyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBzYXZlTG9jYWxHcm91cHMoKTtcbiAgfSk7XG5cbiAgZ2V0U2VjdGlvbi5ncm91cENhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBsb2FkR3JvdXBzKCkge1xuICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cCwgaSkgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGVsZXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICBkaXNwbGF5R3JvdXAuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBkaXNwbGF5R3JvdXAudGV4dENvbnRlbnQgPSBgJHtncm91cHNbaV0udGl0bGV9YDtcbiAgICAgIGRlbGV0ZUdyb3VwLnNyYyA9IFwiLi4vaW1hZ2VzL2RlbGV0ZS1jaXJjbGUuc3ZnXCI7XG4gICAgICBkZWxldGVHcm91cC5pZCA9IFwiZGVsZXRlR3JvdXBcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheUdyb3VwKTtcbiAgICAgIGRpc3BsYXlHcm91cC5hcHBlbmRDaGlsZChkZWxldGVHcm91cCk7XG4gICAgICBkZWxldGVHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGxheUdyb3VwLnJlbW92ZSgpO1xuICAgICAgICBncm91cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhncm91cHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlTG9jYWxHcm91cHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dyb3VwcycsIEpTT04uc3RyaW5naWZ5KGdyb3VwcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlY3Rpb24uZ3JvdXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZEdyb3VwcygpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXdOb3RlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBub3RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkTm90ZXMoKSB7XG4gICAgbm90ZXMuZm9yRWFjaCgobm90ZSwgaSkgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkZWxldGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgZGlzcGxheU5vdGUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBkaXNwbGF5Tm90ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLW5vdGVHZW5lcmljKVwiO1xuICAgICAgZGlzcGxheU5vdGUudGV4dENvbnRlbnQgPSBgJHtub3Rlc1tpXS50aXRsZX1gO1xuICAgICAgZGVsZXRlTm90ZS5zcmMgPSBcIi4uL2ltYWdlcy9kZWxldGUtY2lyY2xlLnN2Z1wiO1xuICAgICAgZGVsZXRlTm90ZS5pZCA9IFwiZGVsZXRlTm90ZVwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5Tm90ZSk7XG4gICAgICBkaXNwbGF5Tm90ZS5hcHBlbmRDaGlsZChkZWxldGVOb3RlKTtcbiAgICAgIGRlbGV0ZU5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BsYXlOb3RlLnJlbW92ZSgpO1xuICAgICAgICBub3Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwbGF5Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBub3RlRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG5vdGVEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25vdGVzW2ldLmJvZHl9YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VjdGlvbi5uZXdOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5vdGVCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgTm90ZShub3RlVGl0bGUudmFsdWUsIG5vdGVCb2R5LnZhbHVlKTtcbiAgICBub3Rlcy5wdXNoKG5ld05vdGUpO1xuICAgIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVzXCIsIEpTT04uc3RyaW5naWZ5KG5vdGVzKSk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5vdGVCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ub3Rlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGxvYWROb3RlcygpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ub3RlRGV0YWlsc0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5vdGVEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHRpdGxlWW91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVZb3VyXCIpO1xuXG4gIGdldFNlY3Rpb24uZGFya01vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwidmFyKC0tYm9keUNvbG9yRGFyaylcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJvZHlDb2xvckRhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWNvbnRhaW5lckNvbG9yRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uZGFya01vZGUuc3JjID0gXCIuLi9pbWFnZXMvd2VhdGhlci1uaWdodC5zdmdcIjtcblxuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm94ZXNEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm94ZXNEYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ncm91cHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLm5vdGVzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm94ZXNEYXJrKVwiO1xuXG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHREYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ncm91cHMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHREYXJrKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ub3Rlcy5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgICB0aXRsZVlvdXIuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHREYXJrKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9keUNvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1jb250YWluZXJDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24uZGFya01vZGUuc3JjID0gXCIuLi9pbWFnZXMvbGlnaHRidWxiLW9uLW91dGxpbmUuc3ZnXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNpZGViYXJDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNpZGViYXJDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24uZ3JvdXBzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tc2lkZWJhckNvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ub3Rlcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNpZGViYXJDb2xvcilcIjtcblxuICAgICAgZ2V0U2VjdGlvbi5ob21lLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0Q29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ub3Rlcy5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgICAgdGl0bGVZb3VyLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0Q29sb3IpXCI7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9