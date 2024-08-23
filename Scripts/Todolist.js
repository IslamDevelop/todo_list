import { Cards, content, TodoCards, TodoLibrary } from "../script";
import { addProjectButton } from "../script";
import { Todolist } from "./ClassTodo";
/////////////

export function openProject(ev) {
Cards.remove()
addProjectButton.remove()
const plustodo = document.createElement('button')
plustodo.textContent = '+ Новая задача'
plustodo.addEventListener('click',() => {
    addTodoFunction(ev)
})

const exit =document.createElement('button')
exit.textContent = 'Назад'
exit.addEventListener('click',()=> {
    TodoCards.remove()
    exit.remove()
    plustodo.remove()
    const BodyText = document.querySelector('.bodyH1')
    BodyText.textContent = 'TODO LIST'
content.append(addProjectButton,Cards)
})

content.append(exit,plustodo)
}
///////////

export class Todos {
    constructor(title,importance,name,text,check,date) {
        this.title = title
        this.importance = importance
        this.name = name;
        this.text = text; 
        this.check = check;   
        this.date = date;
    }
}
///////////
export function addTodoFunction (ev) {
    console.log(ev)
    const Form = document.createElement('form')
    Form.classList.add('form')
    Form.id = 'da'
    const xForm = document.createElement('span')
    xForm.textContent = 'x'
    const inputTodo = document.createElement('input')
    inputTodo.placeholder = 'Введите название'
    inputTodo.required = true
    
    
    const inputTextTodo = document.createElement('input')
    inputTextTodo.placeholder = 'Введите текст'
    inputTextTodo.required = true
    const headText = document.createElement('h2')
headText.textContent = 'Создать запись'

const select = document.createElement('select')
const option1 = document.createElement('option')
option1.textContent = 'Не важно'
const option2 = document.createElement('option')
option2.textContent = 'Важно'
const option3 = document.createElement('option')
option3.textContent = 'Очень важно'

select.append(option1,option2,option3)

    const buttonTest = document.createElement('button')
    buttonTest.type = 'button'
    
    buttonTest.textContent = 'Добавить'
   
    
    buttonTest.addEventListener('click',(e) => {
        e.preventDefault()
        const name = inputTodo.value
        const text = inputTextTodo.value
        const title = ev
        
       const importance = select.value
       console.log(importance)
     
        const checkbox = Boolean()
        
        
        const todo1 = new Todos (title,importance,name,text,checkbox,new Date())
        
        TodoLibrary.addProject(todo1)
       Form.remove()
    })
    xForm.addEventListener('click',()=>{Form.remove()})
    Form.append(xForm,headText,inputTodo,inputTextTodo,select,buttonTest)
    
    content.appendChild(Form)
    }