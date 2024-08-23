import { Projects } from "./Scripts/ClassProject";
import { project } from "./Scripts/Project";
import { addProjectFunction, Todos } from "./Scripts/addProject";
import "./style.css";
import { loc } from "./Scripts/addProject";
import { Todolist } from "./Scripts/ClassTodo";
 
 export const content = document.getElementById('content');
export const Cards = document.createElement('div');
export const TodoCards = document.createElement('div')
TodoCards.classList.add('cards')
Cards.classList.add('cards')

export const addProjectButton = document.createElement('button')
addProjectButton.textContent = 'Добавить проект'

content.appendChild(addProjectButton)
content.appendChild(Cards)

export const projectsLibrary = new Projects()
export const TodoLibrary = new Todolist()
// console.log(projectsLibrary._projectList)

console.log(projectsLibrary._projectList)
projectsLibrary.localProject()

addProjectButton.addEventListener('click', addProjectFunction)
// console.log (projectsLibrary._projectList)
