/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Scripts/ClassProject.js":
/*!*********************************!*\
  !*** ./Scripts/ClassProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ \"./script.js\");\n/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todolist */ \"./Scripts/Todolist.js\");\n\r\n\r\n\r\n\r\nclass Projects {\r\n    constructor() {\r\n        this._projectList = JSON.parse(localStorage.getItem('PrList')) || []\r\n    }\r\n\r\n    addProject(project) {\r\n\r\n        this._projectList.push(project)\r\n            localStorage.setItem('PrList',JSON.stringify(this._projectList))\r\n            console.log(this._projectList)\r\n                    \r\n       \r\nthis.displayProject()\r\n}\r\nremoveProject(index) {\r\n    this._projectList.splice(index,1)\r\n    localStorage.setItem('PrList',JSON.stringify(this._projectList))\r\n    this.displayProject()\r\n}\r\n\r\nlocalProject() {        \r\n    if(this._projectList == []) {    \r\n        return false\r\n    } else {\r\n        \r\n        this.displayProject()\r\n    }\r\n         \r\n        // this.addProject(this._projectList.name)  \r\n}\r\ndisplayProject() {\r\n   \r\n   _script__WEBPACK_IMPORTED_MODULE_0__.Cards.textContent = ''\r\n\r\n    this._projectList.forEach((item,index) => {\r\n        const cardProject = document.createElement('div')\r\n        cardProject.classList.add('cardProject')\r\n\r\n        const nameProject = document.createElement('h1')\r\n        nameProject.textContent = item.name;\r\n        const h1div = document.createElement('div')\r\n        h1div.classList.add('h1div')\r\n        h1div.append(nameProject)\r\n\r\n        const dateProject = document.createElement('data')\r\n        dateProject.textContent = item.date;\r\n\r\n        const removeButton = document.createElement('button')\r\n        removeButton.classList.add('removeButton')\r\n        removeButton.textContent = 'Remove'\r\n        removeButton.addEventListener('click', () => {\r\n            this.removeProject(index)\r\n            cardProject.textContent = ''\r\n            cardProject.remove()\r\n            \r\n        })\r\n    \r\n        h1div.addEventListener('click',(e) => {\r\n           const chototam = e.target.textContent\r\n           const BodyText = document.querySelector('.bodyH1')\r\n          \r\n           BodyText.textContent = `${chototam}`\r\n           \r\n           \r\n           \r\n             ;(0,_Todolist__WEBPACK_IMPORTED_MODULE_1__.openProject)(chototam)\r\n             \r\n             _script__WEBPACK_IMPORTED_MODULE_0__.TodoLibrary._event = chototam\r\n             _script__WEBPACK_IMPORTED_MODULE_0__.TodoLibrary.localProject()\r\n             \r\n             \r\n        }\r\n)\r\n       \r\n        cardProject.appendChild(h1div)\r\n        cardProject.appendChild(dateProject)\r\n        cardProject.appendChild(removeButton)\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.Cards.appendChild(cardProject)\r\n        \r\n    })\r\n}\r\n    \r\n}\n\n//# sourceURL=webpack://todo_list/./Scripts/ClassProject.js?");

/***/ }),

/***/ "./Scripts/ClassTodo.js":
/*!******************************!*\
  !*** ./Scripts/ClassTodo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todolist: () => (/* binding */ Todolist)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ \"./script.js\");\n\r\n\r\nclass Todolist {\r\n    _event = ''\r\n    \r\n    constructor() {\r\n        this._TodoList = JSON.parse(localStorage.getItem(this._event)) || []\r\n        console.log(this._event)\r\n    }\r\n\r\n    addProject(project) {\r\n\r\n        this._TodoList.push(project)\r\n            localStorage.setItem(project.title,JSON.stringify(this._TodoList))\r\n            console.log(this._TodoList)\r\n            console.log(project.title === this._event)\r\n            \r\n                    \r\n       \r\nthis.displayProject()\r\n}\r\nremoveProject(index) {\r\n    this._TodoList.splice(index,1)\r\n    localStorage.setItem(this._event,JSON.stringify(this._TodoList))\r\n    this.displayProject()\r\n}\r\n\r\nlocalProject() {        \r\n    this._TodoList = JSON.parse(localStorage.getItem(this._event)) || []\r\n    if(this._TodoList == []) {  \r\n        console.log(this._Todolist)  \r\n        return false\r\n    } else {\r\n       console.log(this._event)\r\n    //    this._TodoList = JSON.parse(localStorage.getItem(this._event))\r\n       console.log(this._TodoList)\r\n        this.displayProject()\r\n    }\r\n         \r\n     \r\n}\r\ndisplayProject() {\r\n   \r\n   _script__WEBPACK_IMPORTED_MODULE_0__.TodoCards.textContent = ''\r\n\r\n    this._TodoList.forEach((item,index) => {\r\n        const cardProject = document.createElement('div')\r\n        cardProject.classList.add('cardTodo')\r\n\r\n        const nameProject = document.createElement('h1')\r\n        nameProject.textContent = item.name;\r\n        const h1div = document.createElement('div')\r\n        h1div.classList.add('h1div')\r\n        h1div.append(nameProject)\r\n\r\n        const textTodo = document.createElement('h3')\r\n        textTodo.textContent = item.text;\r\n\r\n        const dateTodo = document.createElement('data')\r\n        dateTodo.textContent = item.date;\r\n\r\n        const checkbox = document.createElement('input')\r\n        \r\n        const importance = document.createElement('h4')\r\n        importance.textContent = `${item.importance} - Изменить? `\r\n        if(item.importance === 'Важно'){\r\n            cardProject.style.backgroundColor = '#ffffb3'\r\n        } else if (item.importance === 'Очень важно') {\r\n            cardProject.style.backgroundColor = '#ff6d6d'\r\n        }\r\n\r\n        importance.addEventListener('click',()=>{\r\n            if(item.importance === 'Не важно'){\r\n                item.importance = 'Важно'\r\n            } else if(item.importance === 'Важно') {\r\n                item.importance = 'Очень важно'\r\n            } else if(item.importance === 'Очень важно'){\r\n                item.importance = 'Не важно'\r\n            }\r\n            localStorage.setItem(this._event,JSON.stringify(this._TodoList))\r\n            this.displayProject()\r\n        })\r\n        \r\n\r\n        checkbox.type = 'checkbox'\r\n        checkbox.textContent = 'Нет'\r\n         checkbox.checked = item.check\r\n         \r\n\r\n         checkbox.addEventListener('click',(index) =>{\r\n            if (item.check === false) {\r\n                item.check = true;\r\n              } else {\r\n                item.check = false;\r\n              }\r\n              localStorage.setItem(this._event,JSON.stringify(this._TodoList))\r\n         })\r\n        console.log(item.check)\r\n\r\n        const removeButton = document.createElement('button')\r\n        removeButton.classList.add('removeButton2')\r\n        removeButton.textContent = 'Remove'\r\n        removeButton.addEventListener('click', () => {\r\n            this.removeProject(index)\r\n            cardProject.textContent = ''\r\n            cardProject.remove()\r\n            \r\n        })\r\n       \r\n        cardProject.appendChild(h1div)\r\n        cardProject.appendChild(textTodo)\r\n        cardProject.appendChild(importance)\r\n        cardProject.appendChild(checkbox)\r\n        cardProject.appendChild(dateTodo)\r\n        cardProject.appendChild(removeButton)\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.TodoCards.appendChild(cardProject)\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.content.append(_script__WEBPACK_IMPORTED_MODULE_0__.TodoCards)\r\n        \r\n    })\r\n}\r\n    \r\n}\n\n//# sourceURL=webpack://todo_list/./Scripts/ClassTodo.js?");

/***/ }),

/***/ "./Scripts/Project.js":
/*!****************************!*\
  !*** ./Scripts/Project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nconst cardProject = document.createElement('div')\r\n\r\nclass project {\r\n    constructor(name,date) {\r\n        this.name = name;\r\n        this.date = date;    \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./Scripts/Project.js?");

/***/ }),

/***/ "./Scripts/Todolist.js":
/*!*****************************!*\
  !*** ./Scripts/Todolist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todos: () => (/* binding */ Todos),\n/* harmony export */   addTodoFunction: () => (/* binding */ addTodoFunction),\n/* harmony export */   openProject: () => (/* binding */ openProject)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ \"./script.js\");\n/* harmony import */ var _ClassTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassTodo */ \"./Scripts/ClassTodo.js\");\n\r\n\r\n\r\n/////////////\r\n\r\nfunction openProject(ev) {\r\n_script__WEBPACK_IMPORTED_MODULE_0__.Cards.remove()\r\n_script__WEBPACK_IMPORTED_MODULE_0__.addProjectButton.remove()\r\nconst plustodo = document.createElement('button')\r\nplustodo.textContent = '+ Новая задача'\r\nplustodo.addEventListener('click',() => {\r\n    addTodoFunction(ev)\r\n})\r\n\r\nconst exit =document.createElement('button')\r\nexit.textContent = 'Назад'\r\nexit.addEventListener('click',()=> {\r\n    _script__WEBPACK_IMPORTED_MODULE_0__.TodoCards.remove()\r\n    exit.remove()\r\n    plustodo.remove()\r\n    const BodyText = document.querySelector('.bodyH1')\r\n    BodyText.textContent = 'TODO LIST'\r\n_script__WEBPACK_IMPORTED_MODULE_0__.content.append(_script__WEBPACK_IMPORTED_MODULE_0__.addProjectButton,_script__WEBPACK_IMPORTED_MODULE_0__.Cards)\r\n})\r\n\r\n_script__WEBPACK_IMPORTED_MODULE_0__.content.append(exit,plustodo)\r\n}\r\n///////////\r\n\r\nclass Todos {\r\n    constructor(title,importance,name,text,check,date) {\r\n        this.title = title\r\n        this.importance = importance\r\n        this.name = name;\r\n        this.text = text; \r\n        this.check = check;   \r\n        this.date = date;\r\n    }\r\n}\r\n///////////\r\nfunction addTodoFunction (ev) {\r\n    console.log(ev)\r\n    const Form = document.createElement('form')\r\n    Form.classList.add('form')\r\n    Form.id = 'da'\r\n    const xForm = document.createElement('span')\r\n    xForm.textContent = 'x'\r\n    const inputTodo = document.createElement('input')\r\n    inputTodo.placeholder = 'Введите название'\r\n    inputTodo.required = true\r\n    \r\n    \r\n    const inputTextTodo = document.createElement('input')\r\n    inputTextTodo.placeholder = 'Введите текст'\r\n    inputTextTodo.required = true\r\n    const headText = document.createElement('h2')\r\nheadText.textContent = 'Создать запись'\r\n\r\nconst select = document.createElement('select')\r\nconst option1 = document.createElement('option')\r\noption1.textContent = 'Не важно'\r\nconst option2 = document.createElement('option')\r\noption2.textContent = 'Важно'\r\nconst option3 = document.createElement('option')\r\noption3.textContent = 'Очень важно'\r\n\r\nselect.append(option1,option2,option3)\r\n\r\n    const buttonTest = document.createElement('button')\r\n    buttonTest.type = 'button'\r\n    \r\n    buttonTest.textContent = 'Добавить'\r\n   \r\n    \r\n    buttonTest.addEventListener('click',(e) => {\r\n        e.preventDefault()\r\n        const name = inputTodo.value\r\n        const text = inputTextTodo.value\r\n        const title = ev\r\n        \r\n       const importance = select.value\r\n       console.log(importance)\r\n     \r\n        const checkbox = Boolean()\r\n        \r\n        \r\n        const todo1 = new Todos (title,importance,name,text,checkbox,new Date())\r\n        \r\n        _script__WEBPACK_IMPORTED_MODULE_0__.TodoLibrary.addProject(todo1)\r\n       Form.remove()\r\n    })\r\n    xForm.addEventListener('click',()=>{Form.remove()})\r\n    Form.append(xForm,headText,inputTodo,inputTextTodo,select,buttonTest)\r\n    \r\n    _script__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(Form)\r\n    }\n\n//# sourceURL=webpack://todo_list/./Scripts/Todolist.js?");

/***/ }),

/***/ "./Scripts/addProject.js":
/*!*******************************!*\
  !*** ./Scripts/addProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectFunction: () => (/* binding */ addProjectFunction)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ \"./script.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./Scripts/Project.js\");\n\r\n\r\n\r\n\r\n\r\nfunction addProjectFunction () {\r\nconst Form = document.createElement('form')\r\nForm.classList.add('form')\r\nconst xForm = document.createElement('span')\r\nxForm.textContent = 'x'\r\nconst headText = document.createElement('h2')\r\nheadText.textContent = 'Создать проект'\r\nconst inputProject = document.createElement('input')\r\ninputProject.placeholder = 'Название проекта'\r\nconst buttonTest = document.createElement('button')\r\nbuttonTest.type = 'button'\r\nbuttonTest.textContent = 'Добавить'\r\n\r\nbuttonTest.addEventListener('click',() => {\r\n    const name = inputProject.value\r\n    const project1 = new _Project__WEBPACK_IMPORTED_MODULE_1__.project (name,new Date)\r\n    \r\n    _script__WEBPACK_IMPORTED_MODULE_0__.projectsLibrary.addProject(project1)\r\n   Form.remove()\r\n})\r\nxForm.addEventListener('click',()=>{Form.remove()})\r\nForm.append(xForm,headText,inputProject,buttonTest)\r\n\r\n_script__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(Form)\r\n}\r\n\r\n\r\n// export function Todos () {\r\n\r\n//     const todoContain = document.createElement('div')\r\n//     content.appendChild(todoContain)\r\n// }\n\n//# sourceURL=webpack://todo_list/./Scripts/addProject.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    background-color: #b7b7b7;\r\n}\r\n.bodyH1 {\r\n    text-align: center;\r\n}\r\nbutton {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    background: #292626d1;\r\n    height: 35px;\r\n    border: none;\r\n    color: white;\r\n    transition: 0.1s;\r\n}\r\nbutton:hover{\r\n    scale: 1.02;\r\n}\r\ninput {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    background: #292626a1;\r\n    height: 35px;\r\n    border: none;\r\n    color: white;\r\n}\r\ninput::placeholder {\r\n    \r\n    color: rgb(173, 173, 173);\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    margin-block: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 30px;\r\n    margin: 10px;\r\n}\r\n\r\n.cardProject{\r\n    width: 200px;\r\n    height: 250px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    padding: 5px;\r\n    background-color: #414141e6;\r\n    color: white;\r\n    display: flex;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    word-wrap: break-word;\r\n    box-shadow: 3px 4px 12px 3px black;\r\n    transition: 0.1s;\r\n}\r\n.cardProject:hover{\r\n    scale: 1.05;\r\n}\r\n.removeButton {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    background: #ffffffd1;\r\n    height: 35px;\r\n    border: none;\r\n    color: #252525;\r\n}\r\n.cards {\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    min-width: 100%;\r\n}\r\n.form {\r\n    position: absolute;\r\n    background: #dbdbdba3;\r\n    height: 351px;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 5px;\r\n    padding: 10px;\r\n    backdrop-filter: blur(12px);\r\n    flex-direction: column;\r\n    min-width: 370px;\r\n    text-align: center;\r\n}\r\n.form span {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    background-color: #373737;\r\n    width: 30px;\r\n    color: white;\r\n    text-align: center;\r\n    border-radius: 36px;\r\n}\r\n.cardTodo {\r\n    min-height: 150px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    padding: 5px;\r\n    background-color: #fffff8ad;\r\n    color: #060606;\r\n    display: flex;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    word-wrap: break-word;\r\n    box-shadow: 3px 4px 12px 3px black;\r\n    width: 100%;\r\n    margin-inline: 10px;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    transition: 0.1s;\r\n}\r\n.cardTodo:hover {\r\n    scale: 1.01;\r\n}\r\n.cardTodo input {\r\n    height: 20px;\r\n}\r\n.removeButton2 {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    background: #292626d1;\r\n    height: 35px;\r\n    border: none;\r\n    color: white;\r\n}\r\n.h1div:hover {\r\n    transform: scale(1.2);\r\n}\r\nh4 {\r\n    background-color: #383636;\r\n    border-radius: 15px;\r\n    color: white;\r\n    width: max-content;\r\n    padding: 4px;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n}\r\nh4:hover {\r\ntransform: scaleX(1.3) scaleY(1.1);\r\n}\r\n.checkbox {\r\n    background-color: #2d2d2d;\r\n    opacity: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    color: red;\r\n}\r\n@media (max-width: 450px) {\r\n    .cards {\r\n        justify-content: center;\r\n    }\r\n    .form {\r\n        min-width: 300px;\r\n    }\r\n    .cardProject {\r\n        width: 100%;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cards: () => (/* binding */ Cards),\n/* harmony export */   TodoCards: () => (/* binding */ TodoCards),\n/* harmony export */   TodoLibrary: () => (/* binding */ TodoLibrary),\n/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   projectsLibrary: () => (/* binding */ projectsLibrary)\n/* harmony export */ });\n/* harmony import */ var _Scripts_ClassProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripts/ClassProject */ \"./Scripts/ClassProject.js\");\n/* harmony import */ var _Scripts_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scripts/Project */ \"./Scripts/Project.js\");\n/* harmony import */ var _Scripts_addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scripts/addProject */ \"./Scripts/addProject.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _Scripts_ClassTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scripts/ClassTodo */ \"./Scripts/ClassTodo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n const content = document.getElementById('content');\r\nconst Cards = document.createElement('div');\r\nconst TodoCards = document.createElement('div')\r\nTodoCards.classList.add('cards')\r\nCards.classList.add('cards')\r\n\r\nconst addProjectButton = document.createElement('button')\r\naddProjectButton.textContent = 'Добавить проект'\r\n\r\ncontent.appendChild(addProjectButton)\r\ncontent.appendChild(Cards)\r\n\r\nconst projectsLibrary = new _Scripts_ClassProject__WEBPACK_IMPORTED_MODULE_0__.Projects()\r\nconst TodoLibrary = new _Scripts_ClassTodo__WEBPACK_IMPORTED_MODULE_4__.Todolist()\r\n// console.log(projectsLibrary._projectList)\r\n\r\nconsole.log(projectsLibrary._projectList)\r\nprojectsLibrary.localProject()\r\n\r\naddProjectButton.addEventListener('click', _Scripts_addProject__WEBPACK_IMPORTED_MODULE_2__.addProjectFunction)\r\n// console.log (projectsLibrary._projectList)\r\n\n\n//# sourceURL=webpack://todo_list/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;