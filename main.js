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

  const taskDetails = document.getElementById("taskDetais");
  const taskDetailsText = document.getElementById("taskDetailsText");
  const taskDetailsPriority = document.getElementById("taskDetailsPriority");
  const taskDetailsAddToGroup = document.getElementById('taskDetailsAddToGroup');
  const taskDetailsCancel = document.getElementById("taskDetailsCancel");
  return {
    header,
    main,
    sidebar,
    content,
    home,
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
    taskDetailsPriority,
    taskDetailsAddToGroup,
    taskDetailsCancel,
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
    this.taskList = [];
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
    let date = document.createElement("div");
    let taskDone = document.createElement('img');
    let taskButtons = document.createElement('div');

    tasks.forEach((item, i) => {
      task.classList.add("task");
      getSection.content.appendChild(task);
      title.classList.add("taskTitle");
      title.textContent = `${tasks[i].title}`;
      task.appendChild(title);
      date.textContent = `${tasks[i].dueDate}`;
      task.appendChild(date);
      task.appendChild(taskButtons);
      taskDone.src = '../images/check-circle.svg';
      taskDone.id = 'taskDone';
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

      taskDone.addEventListener('click', () => {
        event.stopPropagation();
        task.remove();
        tasks.splice(i, 1);
        console.log(tasks);
        alert('Congrats! You have completed this task.');
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
      let date = document.createElement("div");
      let taskDone = document.createElement('img');

      task.classList.add("task");
      getSection.content.appendChild(task);
      title.classList.add("taskTitle");
      title.textContent = `${tasks[i].title}`;
      task.appendChild(title);
      date.textContent = `${tasks[i].dueDate}`;
      task.appendChild(date);
      task.appendChild(taskButtons);
      taskDone.src = '../images/check-circle.svg';
      taskDone.id = 'taskDone';
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

      taskDone.addEventListener('click', () => {
        event.stopPropagation();
        task.remove();
        tasks.splice(i, 1);
        console.log(tasks);
        alert('Congrats! You have completed this task.')
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2V0U2VjdGlvbiA9ICgoKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGdyb3VwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBzXCIpO1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5cbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J1dHRvblwiKTtcbiAgY29uc3QgbmV3R3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0dyb3VwQnV0dG9uXCIpO1xuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya01vZGVCdXR0b25cIik7XG5cbiAgY29uc3QgdGFza0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0JveFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpO1xuICBjb25zdCB0YXNrR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tHcm91cFwiKTtcbiAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1N1Ym1pdFwiKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NhbmNlbFwiKTtcblxuICBjb25zdCBncm91cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBCb3hcIik7XG4gIGNvbnN0IGdyb3VwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwVGl0bGVcIik7XG4gIGNvbnN0IGdyb3VwU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFN1Ym1pdFwiKTtcbiAgY29uc3QgZ3JvdXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwQ2FuY2VsXCIpO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGV0YWlzXCIpO1xuICBjb25zdCB0YXNrRGV0YWlsc1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXRhaWxzVGV4dFwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNQcmlvcml0eVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNBZGRUb0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxzQWRkVG9Hcm91cCcpO1xuICBjb25zdCB0YXNrRGV0YWlsc0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RldGFpbHNDYW5jZWxcIik7XG4gIHJldHVybiB7XG4gICAgaGVhZGVyLFxuICAgIG1haW4sXG4gICAgc2lkZWJhcixcbiAgICBjb250ZW50LFxuICAgIGhvbWUsXG4gICAgZ3JvdXBzLFxuICAgIG5vdGVzLFxuICAgIGFkZFRhc2ssXG4gICAgbmV3R3JvdXAsXG4gICAgZGFya01vZGUsXG4gICAgdGFza0JveCxcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tQcmlvcml0eSxcbiAgICB0YXNrR3JvdXAsXG4gICAgdGFza1N1Ym1pdCxcbiAgICB0YXNrQ2FuY2VsLFxuICAgIGdyb3VwQm94LFxuICAgIGdyb3VwVGl0bGUsXG4gICAgZ3JvdXBTdWJtaXQsXG4gICAgZ3JvdXBDYW5jZWwsXG4gICAgdGFza0RldGFpbHMsXG4gICAgdGFza0RldGFpbHNUZXh0LFxuICAgIHRhc2tEZXRhaWxzUHJpb3JpdHksXG4gICAgdGFza0RldGFpbHNBZGRUb0dyb3VwLFxuICAgIHRhc2tEZXRhaWxzQ2FuY2VsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VjdGlvbjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBncm91cCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIHRoZSBuZXcgdGFzayBvYmplY3RcbmV4cG9ydCBjb25zdCBhZGRUYXNrTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdOyAvLyBjb250YWlucyB0YXNrIG9iamVjdHNcbiAgbGV0IHRhc2tJZCA9IDE7XG5cbiAgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSxcbiAgICAgIHRhc2tHcm91cC52YWx1ZVxuICAgICk7XG5cbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0YXNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5zcmMgPSAnLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmcnO1xuICAgICAgdGFza0RvbmUuaWQgPSAndGFza0RvbmUnO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgYWxlcnQoJ0NvbmdyYXRzISBZb3UgaGF2ZSBjb21wbGV0ZWQgdGhpcyB0YXNrLicpO1xuICAgICAgfSk7XG4gIFxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25ld1Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtuZXdUYXNrLnByaW9yaXR5fWA7XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFRhc2tzKCkge1xuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgdGFza0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGdldFNlY3Rpb24uY29udGVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tzW2ldLnRpdGxlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrc1tpXS5kdWVEYXRlfWA7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9ucyk7XG4gICAgICB0YXNrRG9uZS5zcmMgPSAnLi4vaW1hZ2VzL2NoZWNrLWNpcmNsZS5zdmcnO1xuICAgICAgdGFza0RvbmUuaWQgPSAndGFza0RvbmUnO1xuICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0RvbmUpO1xuXG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tMb3cpXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXRhc2tNZWRpdW0pXCI7XG4gICAgICB9XG4gICAgICBpZiAodGFza3NbaV0ucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS10YXNrSGlnaClcIjtcbiAgICAgIH1cblxuICAgICAgdGFza0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgYWxlcnQoJ0NvbmdyYXRzISBZb3UgaGF2ZSBjb21wbGV0ZWQgdGhpcyB0YXNrLicpXG4gICAgICB9KTtcblxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHRhc2tEZXRhaWxzVGV4dC50ZXh0Q29udGVudCA9IGAke25ld1Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtuZXdUYXNrLnByaW9yaXR5fWA7XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwibGlnaHRncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUYXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS5zdHlsZS5jb2xvciA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWN0aW9uLmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfSk7XG4gIGdldFNlY3Rpb24udGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbG9hZFRhc2tzKCk7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuICB9KTtcbiAgZ2V0U2VjdGlvbi50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIGdldFNlY3Rpb24uaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIHJlbG9hZFRhc2tzKCk7XG4gIH0pO1xuICBnZXRTZWN0aW9uLnRhc2tEZXRhaWxzQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXdHcm91cExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZ3JvdXBzID0gW107XG4gIGdldFNlY3Rpb24ubmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoZ3JvdXBUaXRsZS52YWx1ZSk7XG4gICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICBjb25zb2xlLmxvZyhncm91cCk7XG4gICAgY29uc29sZS5sb2coZ3JvdXBzKTtcblxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi5pZCA9IGdyb3VwLnRpdGxlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLnRpdGxlO1xuICAgIGdldFNlY3Rpb24udGFza0dyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGdldFNlY3Rpb24uZ3JvdXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbG9hZEdyb3VwcygpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXAsIGkpID0+IHtcbiAgICAgIGxldCBkaXNwbGF5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGlzcGxheUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgZGlzcGxheUdyb3VwLnRleHRDb250ZW50ID0gYCR7Z3JvdXBzW2ldLnRpdGxlfWA7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlHcm91cCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VjdGlvbi5ncm91cHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBsb2FkR3JvdXBzKCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==