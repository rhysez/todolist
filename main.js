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
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskLogic": () => (/* binding */ addTaskLogic),
/* harmony export */   "categoryLogic": () => (/* binding */ categoryLogic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "newGroupLogic": () => (/* binding */ newGroupLogic)
/* harmony export */ });
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
  const taskSubmit = document.getElementById("taskSubmit");
  const taskCancel = document.getElementById("taskCancel");

  const groupBox = document.getElementById("groupBox");
  const groupTitle = document.getElementById("groupTitle");
  const groupSubmit = document.getElementById("groupSubmit");
  const groupCancel = document.getElementById("groupCancel");
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
    groupCancel,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSection);

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Group {
  constructor(title) {
    this.title = title;
    this.taskList = [];
  }
}

const addTaskLogic = (() => {
  const tasks = []; // contains task objects
  const taskDivs = []; // contains task div elements
  let taskId = 1;

  getSection.addTask.addEventListener("click", () => {
    taskBox.style.display = "flex";
  });

  // adds the visual task to the app
  function addTaskContent() {
    let task = document.createElement("div");
    let title = document.createElement("div");
    let date = document.createElement("div");

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

    taskDivs.push(task);
    console.log(taskDivs);
  }

  // creates the new task object
  getSection.taskSubmit.addEventListener("click", () => {
    event.preventDefault();
    let newTask = new Task(
      taskTitle.value,
      taskDescription.value,
      taskDueDate.value,
      taskPriority.value
    );
    taskBox.style.display = "none";
    addTaskContent();
    tasks.push(newTask);
    console.log(tasks);
  });

  getSection.taskCancel.addEventListener("click", () => {
    taskBox.style.display = "none";
  });
})();

const newGroupLogic = (() => {
  const groups = [];

  getSection.newGroup.addEventListener("click", () => {
    groupBox.style.display = "flex";
  });

  getSection.groupSubmit.addEventListener("click", () => {
    event.preventDefault();
    groupBox.style.display = "none";
    groups.push(new Group(groupTitle.value));
    console.log(groups);
  });

  getSection.groupCancel.addEventListener("click", () => {
    groupBox.style.display = "none";
  });
})();

const categoryLogic = (() => {
    getSection.home.addEventListener('click', () => {location.reload()});
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7O0FBRW5CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRU07QUFDUCxxREFBcUQsa0JBQWtCO0FBQ3ZFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2V0U2VjdGlvbiA9ICgoKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla1wiKTtcbiAgY29uc3QgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cHNcIik7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlc1wiKTtcblxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnV0dG9uXCIpO1xuICBjb25zdCBuZXdHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3R3JvdXBCdXR0b25cIik7XG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrTW9kZUJ1dHRvblwiKTtcblxuICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQm94XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDYW5jZWxcIik7XG5cbiAgY29uc3QgZ3JvdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQm94XCIpO1xuICBjb25zdCBncm91cFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFRpdGxlXCIpO1xuICBjb25zdCBncm91cFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBTdWJtaXRcIik7XG4gIGNvbnN0IGdyb3VwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cENhbmNlbFwiKTtcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXIsXG4gICAgbWFpbixcbiAgICBzaWRlYmFyLFxuICAgIGNvbnRlbnQsXG4gICAgaG9tZSxcbiAgICB0b2RheSxcbiAgICB3ZWVrLFxuICAgIGdyb3VwcyxcbiAgICBub3RlcyxcbiAgICBhZGRUYXNrLFxuICAgIG5ld0dyb3VwLFxuICAgIGRhcmtNb2RlLFxuICAgIHRhc2tCb3gsXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrRHVlRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgdGFza1N1Ym1pdCxcbiAgICB0YXNrQ2FuY2VsLFxuICAgIGdyb3VwQm94LFxuICAgIGdyb3VwVGl0bGUsXG4gICAgZ3JvdXBTdWJtaXQsXG4gICAgZ3JvdXBDYW5jZWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZWN0aW9uO1xuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkVGFza0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTsgLy8gY29udGFpbnMgdGFzayBvYmplY3RzXG4gIGNvbnN0IHRhc2tEaXZzID0gW107IC8vIGNvbnRhaW5zIHRhc2sgZGl2IGVsZW1lbnRzXG4gIGxldCB0YXNrSWQgPSAxO1xuXG4gIGdldFNlY3Rpb24uYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcblxuICAvLyBhZGRzIHRoZSB2aXN1YWwgdGFzayB0byB0aGUgYXBwXG4gIGZ1bmN0aW9uIGFkZFRhc2tDb250ZW50KCkge1xuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgZ2V0U2VjdGlvbi5jb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgdGFzay5pZCA9IHRhc2tJZCsrO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgaWYgKHRhc2tQcmlvcml0eS52YWx1ZSA9PT0gXCJsb3dcIikge1xuICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgfVxuXG4gICAgaWYgKHRhc2tQcmlvcml0eS52YWx1ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgfVxuXG4gICAgaWYgKHRhc2tQcmlvcml0eS52YWx1ZSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICB9XG5cbiAgICB0YXNrRGl2cy5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tEaXZzKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZXMgdGhlIG5ldyB0YXNrIG9iamVjdFxuICBnZXRTZWN0aW9uLnRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eS52YWx1ZVxuICAgICk7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYWRkVGFza0NvbnRlbnQoKTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgfSk7XG5cbiAgZ2V0U2VjdGlvbi50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0dyb3VwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBncm91cHMgPSBbXTtcblxuICBnZXRTZWN0aW9uLm5ld0dyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcblxuICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ3JvdXBzLnB1c2gobmV3IEdyb3VwKGdyb3VwVGl0bGUudmFsdWUpKTtcbiAgICBjb25zb2xlLmxvZyhncm91cHMpO1xuICB9KTtcblxuICBnZXRTZWN0aW9uLmdyb3VwQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxvZ2ljID0gKCgpID0+IHtcbiAgICBnZXRTZWN0aW9uLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bG9jYXRpb24ucmVsb2FkKCl9KTtcbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==