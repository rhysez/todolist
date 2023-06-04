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
        event.preventDefault();
        task.remove();
        tasks.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // displays tasks from localStorage
  // if localTasks variable doesn't exist, terminates function
  function runLocalTasks() {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!localTasks) {
      return;
    }

    tasks.push(...localTasks);

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
      taskDone.src = "../dist/images/check-circle.svg";
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
        event.preventDefault();
        task.remove();
        tasks.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
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
      taskDone.src = "../dist/images/check-circle.svg";
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
        event.preventDefault();
        task.remove();
        tasks.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
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

  window.onload = runLocalTasks();

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
  let groups = [];

  getSection.newGroup.addEventListener("click", () => {
    groupBox.style.display = "flex";
  });
  getSection.groupSubmit.addEventListener("click", () => {
    event.preventDefault();
    let group = new Group(groupTitle.value);
    groupBox.style.display = "none";
    groups.push(group);

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

  // CURRENTLY DUPLICATES GROUP DIVS - FIX!
  function loadGroups() {
    const localGroups = JSON.parse(localStorage.getItem("groups"));
    if (!localGroups) {
      return;
    }

    groups = [];
    groups.push(...localGroups);

    groups.forEach((group, i) => {
      let displayGroup = document.createElement("div");
      let deleteGroup = document.createElement("img");

      displayGroup.classList.add("task");
      displayGroup.textContent = `${groups[i].title}`;
      deleteGroup.id = "deleteGroup";
      content.appendChild(displayGroup);
      displayGroup.appendChild(deleteGroup);
      deleteGroup.addEventListener("click", () => {
        event.stopPropagation();
        displayGroup.remove();
        groups.splice(i, 1);
        localStorage.setItem("groups", JSON.stringify(groups));
      });
    });
  }

  function saveLocalGroups() {
    localStorage.setItem("groups", JSON.stringify(groups));
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
  let notes = [];

  function clearContent() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  function loadNotes() {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    if (!localNotes) {
      return;
    }

    notes = [];
    notes.push(...localNotes);

    notes.forEach((note, i) => {
      let displayNote = document.createElement("div");
      let deleteNote = document.createElement("img");

      displayNote.classList.add("task");
      displayNote.style.backgroundColor = "var(--noteGeneric)";
      displayNote.textContent = `${notes[i].title}`;
      deleteNote.id = "deleteNote";
      content.appendChild(displayNote);
      displayNote.appendChild(deleteNote);
      deleteNote.addEventListener("click", () => {
        event.stopPropagation();
        displayNote.remove();
        notes.splice(i, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBnZXRTZWN0aW9uID0gKCgpID0+IHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGdyb3VwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBzXCIpO1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgY29uc3QgbmV3R3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dyb3VwQnV0dG9uXCIpO1xuICBjb25zdCBuZXdOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdOb3RlQnV0dG9uXCIpO1xuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya01vZGVCdXR0b25cIik7XG5cbiAgY29uc3QgdGFza0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0JveFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpO1xuICBjb25zdCB0YXNrR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tHcm91cFwiKTtcbiAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1N1Ym1pdFwiKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NhbmNlbFwiKTtcblxuICBjb25zdCBncm91cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBCb3hcIik7XG4gIGNvbnN0IGdyb3VwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwVGl0bGVcIik7XG4gIGNvbnN0IGdyb3VwU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFN1Ym1pdFwiKTtcbiAgY29uc3QgZ3JvdXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlzXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzVGV4dFwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNQcmlvcml0eVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IG5vdGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVCb3hcIik7XG4gIGNvbnN0IG5vdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZVRpdGxlXCIpO1xuICBjb25zdCBub3RlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZUJvZHlcIik7XG4gIGNvbnN0IG5vdGVTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVTdWJtaXRcIik7XG4gIGNvbnN0IG5vdGVDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVDYW5jZWxcIik7XG5cbiAgY29uc3Qgbm90ZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzXCIpO1xuICBjb25zdCBub3RlRGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzVGV4dFwiKTtcbiAgY29uc3Qgbm90ZURldGFpbHNDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVEZXRhaWxzQ2FuY2VsXCIpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGhlYWRlcixcbiAgICBtYWluLFxuICAgIHNpZGViYXIsXG4gICAgY29udGVudCxcbiAgICBob21lLFxuICAgIGdyb3VwcyxcbiAgICBub3RlcyxcbiAgICBhZGRUYXNrLFxuICAgIG5ld0dyb3VwLFxuICAgIG5ld05vdGUsXG4gICAgZGFya01vZGUsXG4gICAgdGFza0JveCxcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrR3JvdXAsXG4gICAgdGFza1N1Ym1pdCxcbiAgICB0YXNrQ2FuY2VsLFxuICAgIGdyb3VwQm94LFxuICAgIGdyb3VwVGl0bGUsXG4gICAgZ3JvdXBTdWJtaXQsXG4gICAgZ3JvdXBDYW5jZWwsXG4gICAgdGFza0RldGFpbHMsXG4gICAgdGFza0RldGFpbHNUZXh0LFxuICAgIHRhc2tEZXRhaWxzUHJpb3JpdHksXG4gICAgdGFza0RldGFpbHNDYW5jZWwsXG4gICAgbm90ZUJveCxcbiAgICBub3RlVGl0bGUsXG4gICAgbm90ZUJvZHksXG4gICAgbm90ZVN1Ym1pdCxcbiAgICBub3RlQ2FuY2VsLFxuICAgIG5vdGVEZXRhaWxzLFxuICAgIG5vdGVEZXRhaWxzVGV4dCxcbiAgICBub3RlRGV0YWlsc0NhbmNlbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNlY3Rpb247XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ3JvdXApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxuLy8gY3JlYXRlcyB0aGUgbmV3IHRhc2sgb2JqZWN0XG5leHBvcnQgY29uc3QgYWRkVGFza0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTsgLy8gY29udGFpbnMgdGFzayBvYmplY3RzXG4gIGxldCB0YXNrSWQgPSAxO1xuXG4gIGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICB0YXNrR3JvdXAudmFsdWVcbiAgICApO1xuXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcblxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS50aXRsZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBncm91cC50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmdyb3VwfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5pZCA9IFwidGFza0RvbmVcIjtcbiAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tEb25lKTtcbiAgICAgIHNhdmVMb2NhbFRhc2tzKCk7XG5cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0xvdylcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza01lZGl1bSlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tIaWdoKVwiO1xuICAgICAgfVxuXG4gICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICB9KTtcblxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25ld1Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtuZXdUYXNrLnByaW9yaXR5fWA7XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVMb2NhbFRhc2tzKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuXG4gIC8vIGRpc3BsYXlzIHRhc2tzIGZyb20gbG9jYWxTdG9yYWdlXG4gIC8vIGlmIGxvY2FsVGFza3MgdmFyaWFibGUgZG9lc24ndCBleGlzdCwgdGVybWluYXRlcyBmdW5jdGlvblxuICBmdW5jdGlvbiBydW5Mb2NhbFRhc2tzKCkge1xuICAgIGNvbnN0IGxvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGlmICghbG9jYWxUYXNrcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhc2tzLnB1c2goLi4ubG9jYWxUYXNrcyk7XG5cbiAgICB0YXNrcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBsZXQgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZ2V0U2VjdGlvbi5jb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0udGl0bGV9YDtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgZ3JvdXAudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5ncm91cH1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7dGFza3NbaV0uZHVlRGF0ZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbnMpO1xuICAgICAgdGFza0RvbmUuc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9jaGVjay1jaXJjbGUuc3ZnXCI7XG4gICAgICB0YXNrRG9uZS5pZCA9IFwidGFza0RvbmVcIjtcbiAgICAgIHRhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tEb25lKTtcbiAgICAgIHNhdmVMb2NhbFRhc2tzKCk7XG5cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza0xvdylcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGFza01lZGl1bSlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tIaWdoKVwiO1xuICAgICAgfVxuXG4gICAgICB0YXNrRG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICB9KTtcblxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25ld1Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtuZXdUYXNrLnByaW9yaXR5fWA7XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFRhc2tzKCkge1xuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IHRhc2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS50aXRsZX1gO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBncm91cC50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLmdyb3VwfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5zcmMgPSBcIi4uL2Rpc3QvaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmdcIjtcbiAgICAgIHRhc2tEb25lLmlkID0gXCJ0YXNrRG9uZVwiO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0YXNrRGV0YWlsc1RleHQudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2tzW2ldLnByaW9yaXR5fWA7XG4gICAgICAgIGlmICh0YXNrc1tpXS5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkuc3R5bGUuY29sb3IgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHdpbmRvdy5vbmxvYWQgPSBydW5Mb2NhbFRhc2tzKCk7XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlY3Rpb24uYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsb2FkVGFza3MoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgcmVsb2FkVGFza3MoKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza0RldGFpbHNDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0dyb3VwTG9naWMgPSAoKCkgPT4ge1xuICBsZXQgZ3JvdXBzID0gW107XG5cbiAgZ2V0U2VjdGlvbi5uZXdHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24uZ3JvdXBTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBncm91cCA9IG5ldyBHcm91cChncm91cFRpdGxlLnZhbHVlKTtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ3JvdXBzLnB1c2goZ3JvdXApO1xuXG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gZ3JvdXAudGl0bGU7XG4gICAgb3B0aW9uLmlkID0gZ3JvdXAudGl0bGU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZ3JvdXAudGl0bGU7XG4gICAgZ2V0U2VjdGlvbi50YXNrR3JvdXAuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIHNhdmVMb2NhbEdyb3VwcygpO1xuICB9KTtcblxuICBnZXRTZWN0aW9uLmdyb3VwQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIC8vIENVUlJFTlRMWSBEVVBMSUNBVEVTIEdST1VQIERJVlMgLSBGSVghXG4gIGZ1bmN0aW9uIGxvYWRHcm91cHMoKSB7XG4gICAgY29uc3QgbG9jYWxHcm91cHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JvdXBzXCIpKTtcbiAgICBpZiAoIWxvY2FsR3JvdXBzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ3JvdXBzID0gW107XG4gICAgZ3JvdXBzLnB1c2goLi4ubG9jYWxHcm91cHMpO1xuXG4gICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwLCBpKSA9PiB7XG4gICAgICBsZXQgZGlzcGxheUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkZWxldGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIGRpc3BsYXlHcm91cC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGRpc3BsYXlHcm91cC50ZXh0Q29udGVudCA9IGAke2dyb3Vwc1tpXS50aXRsZX1gO1xuICAgICAgZGVsZXRlR3JvdXAuaWQgPSBcImRlbGV0ZUdyb3VwXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlHcm91cCk7XG4gICAgICBkaXNwbGF5R3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlR3JvdXApO1xuICAgICAgZGVsZXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRpc3BsYXlHcm91cC5yZW1vdmUoKTtcbiAgICAgICAgZ3JvdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJncm91cHNcIiwgSlNPTi5zdHJpbmdpZnkoZ3JvdXBzKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVMb2NhbEdyb3VwcygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdyb3Vwc1wiLCBKU09OLnN0cmluZ2lmeShncm91cHMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWN0aW9uLmdyb3Vwcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGxvYWRHcm91cHMoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3Tm90ZUxvZ2ljID0gKCgpID0+IHtcbiAgbGV0IG5vdGVzID0gW107XG5cbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWROb3RlcygpIHtcbiAgICBjb25zdCBsb2NhbE5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpKTtcbiAgICBpZiAoIWxvY2FsTm90ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub3RlcyA9IFtdO1xuICAgIG5vdGVzLnB1c2goLi4ubG9jYWxOb3Rlcyk7XG5cbiAgICBub3Rlcy5mb3JFYWNoKChub3RlLCBpKSA9PiB7XG4gICAgICBsZXQgZGlzcGxheU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGRlbGV0ZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICBkaXNwbGF5Tm90ZS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGRpc3BsYXlOb3RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbm90ZUdlbmVyaWMpXCI7XG4gICAgICBkaXNwbGF5Tm90ZS50ZXh0Q29udGVudCA9IGAke25vdGVzW2ldLnRpdGxlfWA7XG4gICAgICBkZWxldGVOb3RlLmlkID0gXCJkZWxldGVOb3RlXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlOb3RlKTtcbiAgICAgIGRpc3BsYXlOb3RlLmFwcGVuZENoaWxkKGRlbGV0ZU5vdGUpO1xuICAgICAgZGVsZXRlTm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGlzcGxheU5vdGUucmVtb3ZlKCk7XG4gICAgICAgIG5vdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3Rlc1wiLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xuICAgICAgfSk7XG5cbiAgICAgIGRpc3BsYXlOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5vdGVEZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbm90ZURldGFpbHNUZXh0LnRleHRDb250ZW50ID0gYCR7bm90ZXNbaV0uYm9keX1gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWN0aW9uLm5ld05vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RlQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgbmV3Tm90ZSA9IG5ldyBOb3RlKG5vdGVUaXRsZS52YWx1ZSwgbm90ZUJvZHkudmFsdWUpO1xuICAgIG5vdGVzLnB1c2gobmV3Tm90ZSk7XG4gICAgY29uc29sZS5sb2cobm90ZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkobm90ZXMpKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24ubm90ZUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbm90ZUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZE5vdGVzKCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLm5vdGVEZXRhaWxzQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbm90ZURldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgdGl0bGVZb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVlvdXJcIik7XG5cbiAgZ2V0U2VjdGlvbi5kYXJrTW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ2YXIoLS1ib2R5Q29sb3JEYXJrKVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9keUNvbG9yRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24uY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tY29udGFpbmVyQ29sb3JEYXJrKVwiO1xuXG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJveGVzRGFyaylcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib3hlc0RhcmspXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgICBnZXRTZWN0aW9uLm5vdGVzLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS10ZXh0RGFyaylcIjtcbiAgICAgIHRpdGxlWW91ci5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dERhcmspXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib2R5Q29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWNvbnRhaW5lckNvbG9yKVwiO1xuXG4gICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG4gICAgICBnZXRTZWN0aW9uLmdyb3Vwcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXNpZGViYXJDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zaWRlYmFyQ29sb3IpXCI7XG5cbiAgICAgIGdldFNlY3Rpb24uaG9tZS5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgICAgZ2V0U2VjdGlvbi5ncm91cHMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICAgIGdldFNlY3Rpb24ubm90ZXMuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHRDb2xvcilcIjtcbiAgICAgIHRpdGxlWW91ci5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dENvbG9yKVwiO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9