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
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskLogic": () => (/* binding */ addTaskLogic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "newGroupLogic": () => (/* binding */ newGroupLogic)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSection);

class Task {
    constructor (title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
};

const defaultGroup = [];

const addTaskLogic = (() => {
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

const newGroupLogic = (() => {   
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







/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVTs7QUFFbEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGdldFNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG4gICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrJyk7XG4gICAgY29uc3QgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwcycpO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcbiAgICBjb25zdCBuZXdHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdHcm91cEJ1dHRvbicpO1xuICAgIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtNb2RlQnV0dG9uJyk7XG5cbiAgICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCb3gnKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEdWVEYXRlJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1N1Ym1pdCcpO1xuICAgIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0NhbmNlbCcpO1xuXG4gICAgY29uc3QgZ3JvdXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBCb3gnKTtcbiAgICBjb25zdCBncm91cFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwVGl0bGUnKTtcbiAgICBjb25zdCBncm91cFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cFN1Ym1pdCcpO1xuICAgIGNvbnN0IGdyb3VwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwQ2FuY2VsJyk7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBoZWFkZXIsIFxuICAgICAgICAgICAgbWFpbiwgXG4gICAgICAgICAgICBzaWRlYmFyLCBcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBob21lLFxuICAgICAgICAgICAgdG9kYXksXG4gICAgICAgICAgICB3ZWVrLFxuICAgICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgICAgbm90ZXMsXG4gICAgICAgICAgICBhZGRUYXNrLFxuICAgICAgICAgICAgbmV3R3JvdXAsXG4gICAgICAgICAgICBkYXJrTW9kZSxcbiAgICAgICAgICAgIHRhc2tCb3gsXG4gICAgICAgICAgICB0YXNrVGl0bGUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgICAgICAgIHRhc2tTdWJtaXQsXG4gICAgICAgICAgICB0YXNrQ2FuY2VsLFxuICAgICAgICAgICAgZ3JvdXBCb3gsXG4gICAgICAgICAgICBncm91cFRpdGxlLFxuICAgICAgICAgICAgZ3JvdXBTdWJtaXQsXG4gICAgICAgICAgICBncm91cENhbmNlbFxuICAgICAgICAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VjdGlvblxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxufTtcblxuY29uc3QgZGVmYXVsdEdyb3VwID0gW107XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrTG9naWMgPSAoKCkgPT4ge1xuICAgIGdldFNlY3Rpb24uYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkcyB0aGUgdmlzdWFsIHRhc2sgdG8gdGhlIGFwcFxuICAgIGZ1bmN0aW9uIGFkZFRhc2tDb250ZW50KCl7XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrVGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS10YXNrTG93KSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS10YXNrTWVkaXVtKSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tdGFza0hpZ2gpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tNYW5hZ2VyKTtcbiAgICB9O1xuICAgIFxuICAgIC8vIGNyZWF0ZXMgdGhlIG5ldyB0YXNrIG9iamVjdCBhbmQgcHVzaGVzIGl0IHRvIHRhc2tNYW5hZ2VyIGFycmF5XG4gICAgZ2V0U2VjdGlvbi50YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICBkZWZhdWx0R3JvdXAucHVzaChuZXdUYXNrKTtcbiAgICAgICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhZGRUYXNrQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgZ2V0U2VjdGlvbi50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbmV3R3JvdXBMb2dpYyA9ICgoKSA9PiB7ICAgXG4gICAgZ2V0U2VjdGlvbi5uZXdHcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTtcblxuICAgIGdldFNlY3Rpb24uZ3JvdXBTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSlcblxuICAgIGdldFNlY3Rpb24uZ3JvdXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSlcbn0pKCk7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=