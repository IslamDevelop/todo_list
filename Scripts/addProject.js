import { content, projectsLibrary } from "../script"
import { project } from "./Project"



export function addProjectFunction () {
const Form = document.createElement('form')
Form.classList.add('form')
const xForm = document.createElement('span')
xForm.textContent = 'x'
const headText = document.createElement('h2')
headText.textContent = 'Создать проект'
const inputProject = document.createElement('input')
inputProject.placeholder = 'Название проекта'
const buttonTest = document.createElement('button')
buttonTest.type = 'button'
buttonTest.textContent = 'Добавить'

buttonTest.addEventListener('click',() => {
    const name = inputProject.value
    const project1 = new project (name,new Date)
    
    projectsLibrary.addProject(project1)
   Form.remove()
})
xForm.addEventListener('click',()=>{Form.remove()})
Form.append(xForm,headText,inputProject,buttonTest)

content.appendChild(Form)
}


// export function Todos () {

//     const todoContain = document.createElement('div')
//     content.appendChild(todoContain)
// }