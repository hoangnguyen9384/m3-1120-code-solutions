/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/todo-app.js":
/*!************************************!*\
  !*** ./src/components/todo-app.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoApp; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ "./src/components/todo-list.js");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-form */ "./src/components/todo-form.js");
// const { createElement, noop } = require('../lib');
// const TodoList = require('./todo-list');
// const TodoForm = require('./todo-form');





class TodoApp {
  constructor(container, nextId, todos, onUpdate = _lib__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  start() {
    if (this.isStarted) return;
    this.todoForm = new _todo_form__WEBPACK_IMPORTED_MODULE_2__["default"](this.addTodo);
    this.todoList = new _todo_list__WEBPACK_IMPORTED_MODULE_1__["default"](this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  update() {
    this.container.innerHTML = '';
    this.container.append(
      Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}

// module.exports = TodoApp;


/***/ }),

/***/ "./src/components/todo-form.js":
/*!*************************************!*\
  !*** ./src/components/todo-form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoForm; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
// const { createElement } = require('../lib');

class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.newTask = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  render() {
    if (this.element) return this.element;
    this.element = (
      Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('form', { class: 'shadow-sm mb-4' }, [
        Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { class: 'input-group' }, [
          Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { class: 'input-group-append' }, [
            Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}

// module.exports = TodoForm;


/***/ }),

/***/ "./src/components/todo-list.js":
/*!*************************************!*\
  !*** ./src/components/todo-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
// const { createElement } = require('../lib');


class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    this.onToggle(todoId);
  }

  renderCheckbox(todo) {
    const checkbox = Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  render(todos) {
    const todoList = (
      Object(_lib__WEBPACK_IMPORTED_MODULE_0__["createElement"])('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}

// module.exports = TodoList;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_todo_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todo-app */ "./src/components/todo-app.js");
// const TodoApp = require('./components/todo-app');


const container = document.querySelector('#app');

const nextId = 4;

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

const app = new _components_todo_app__WEBPACK_IMPORTED_MODULE_0__["default"](container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
});

app.start();


/***/ }),

/***/ "./src/lib/create-element.js":
/*!***********************************!*\
  !*** ./src/lib/create-element.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-array */ "./src/lib/to-array.js");
// const toArray = require('./to-array');


function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  Object(_to_array__WEBPACK_IMPORTED_MODULE_0__["default"])(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}

// module.exports = createElement;
/* harmony default export */ __webpack_exports__["default"] = (createElement);


/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: noop, toArray, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./src/lib/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-array */ "./src/lib/to-array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _to_array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-element */ "./src/lib/create-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _create_element__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./src/lib/noop.js":
/*!*************************!*\
  !*** ./src/lib/noop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function noop() {}

// module.exports = noop;
/* harmony default export */ __webpack_exports__["default"] = (noop);


/***/ }),

/***/ "./src/lib/to-array.js":
/*!*****************************!*\
  !*** ./src/lib/to-array.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

// module.exports = toArray;
/* harmony default export */ __webpack_exports__["default"] = (toArray);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map