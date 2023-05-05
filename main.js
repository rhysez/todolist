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
    constructor (title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
};

class Group {
    constructor (title) {
        this.title = title
        this.taskList = []
    }
};

const addTaskLogic = (() => {

    const tasks = [];
    let taskId = 1;

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
    
    // creates the new task object and pushes it to taskManager array
    getSection.taskSubmit.addEventListener('click', () => {
        event.preventDefault()
        let newTask = new Task(taskTitle.value, taskDescription.value, 
                               taskDueDate.value, taskPriority.value);
        taskBox.style.display = 'none';
        addTaskContent();
        tasks.push(newTask);
        console.log(tasks);
    });

    getSection.taskCancel.addEventListener('click', () => {
        taskBox.style.display = 'none';
    });

}})();

const newGroupLogic = (() => {  
    
    const groups = []

    getSection.newGroup.addEventListener('click', () => {
        groupBox.style.display = 'flex';
    });

    getSection.groupSubmit.addEventListener('click', () => {
        event.preventDefault();
        groupBox.style.display = 'none';
        groups.push(new Group(groupTitle.value));
        console.log(groups);
    });

    getSection.groupCancel.addEventListener('click', () => {
        groupBox.style.display = 'none';
    });
})();







/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVU7O0FBRWxCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxFQUFFOztBQUVLO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZ2V0U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbiAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWsnKTtcbiAgICBjb25zdCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBzJyk7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xuICAgIGNvbnN0IG5ld0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0dyb3VwQnV0dG9uJyk7XG4gICAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya01vZGVCdXR0b24nKTtcblxuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0JveCcpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZURhdGUnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3VibWl0Jyk7XG4gICAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ2FuY2VsJyk7XG5cbiAgICBjb25zdCBncm91cEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cEJveCcpO1xuICAgIGNvbnN0IGdyb3VwVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBUaXRsZScpO1xuICAgIGNvbnN0IGdyb3VwU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwU3VibWl0Jyk7XG4gICAgY29uc3QgZ3JvdXBDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBDYW5jZWwnKTtcbiAgICByZXR1cm4geyBcbiAgICAgICAgICAgIGhlYWRlciwgXG4gICAgICAgICAgICBtYWluLCBcbiAgICAgICAgICAgIHNpZGViYXIsIFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIGhvbWUsXG4gICAgICAgICAgICB0b2RheSxcbiAgICAgICAgICAgIHdlZWssXG4gICAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgICBub3RlcyxcbiAgICAgICAgICAgIGFkZFRhc2ssXG4gICAgICAgICAgICBuZXdHcm91cCxcbiAgICAgICAgICAgIGRhcmtNb2RlLFxuICAgICAgICAgICAgdGFza0JveCxcbiAgICAgICAgICAgIHRhc2tUaXRsZSxcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICAgICAgdGFza1N1Ym1pdCxcbiAgICAgICAgICAgIHRhc2tDYW5jZWwsXG4gICAgICAgICAgICBncm91cEJveCxcbiAgICAgICAgICAgIGdyb3VwVGl0bGUsXG4gICAgICAgICAgICBncm91cFN1Ym1pdCxcbiAgICAgICAgICAgIGdyb3VwQ2FuY2VsXG4gICAgICAgICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZWN0aW9uXG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxufTtcblxuZXhwb3J0IGNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrTG9naWMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBsZXQgdGFza0lkID0gMTtcblxuICAgIGdldFNlY3Rpb24uYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkcyB0aGUgdmlzdWFsIHRhc2sgdG8gdGhlIGFwcFxuICAgIGZ1bmN0aW9uIGFkZFRhc2tDb250ZW50KCl7XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBnZXRTZWN0aW9uLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrVGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnbG93Jyl7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS10YXNrTG93KSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS10YXNrTWVkaXVtKSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFza1ByaW9yaXR5LnZhbHVlID09PSAnaGlnaCcpe1xuICAgICAgICAgICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tdGFza0hpZ2gpJztcbiAgICAgICAgfVxuICAgIFxuICAgIC8vIGNyZWF0ZXMgdGhlIG5ldyB0YXNrIG9iamVjdCBhbmQgcHVzaGVzIGl0IHRvIHRhc2tNYW5hZ2VyIGFycmF5XG4gICAgZ2V0U2VjdGlvbi50YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICB0YXNrQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRhc2tDb250ZW50KCk7XG4gICAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICB9KTtcblxuICAgIGdldFNlY3Rpb24udGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG59fSkoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0dyb3VwTG9naWMgPSAoKCkgPT4geyAgXG4gICAgXG4gICAgY29uc3QgZ3JvdXBzID0gW11cblxuICAgIGdldFNlY3Rpb24ubmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdyb3VwQm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSk7XG5cbiAgICBnZXRTZWN0aW9uLmdyb3VwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBncm91cEJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBncm91cHMucHVzaChuZXcgR3JvdXAoZ3JvdXBUaXRsZS52YWx1ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhncm91cHMpO1xuICAgIH0pO1xuXG4gICAgZ2V0U2VjdGlvbi5ncm91cENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ3JvdXBCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbn0pKCk7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=