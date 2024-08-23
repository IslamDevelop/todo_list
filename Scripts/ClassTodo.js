import { content, TodoCards } from "../script"

export class Todolist {
    _event = ''
    
    constructor() {
        this._TodoList = JSON.parse(localStorage.getItem(this._event)) || []
        console.log(this._event)
    }

    addProject(project) {

        this._TodoList.push(project)
            localStorage.setItem(project.title,JSON.stringify(this._TodoList))
            console.log(this._TodoList)
            console.log(project.title === this._event)
            
                    
       
this.displayProject()
}
removeProject(index) {
    this._TodoList.splice(index,1)
    localStorage.setItem(this._event,JSON.stringify(this._TodoList))
    this.displayProject()
}

localProject() {        
    this._TodoList = JSON.parse(localStorage.getItem(this._event)) || []
    if(this._TodoList == []) {  
        console.log(this._Todolist)  
        return false
    } else {
       console.log(this._event)
    //    this._TodoList = JSON.parse(localStorage.getItem(this._event))
       console.log(this._TodoList)
        this.displayProject()
    }
         
     
}
displayProject() {
   
   TodoCards.textContent = ''

    this._TodoList.forEach((item,index) => {
        const cardProject = document.createElement('div')
        cardProject.classList.add('cardTodo')

        const nameProject = document.createElement('h1')
        nameProject.textContent = item.name;
        const h1div = document.createElement('div')
        h1div.classList.add('h1div')
        h1div.append(nameProject)

        const textTodo = document.createElement('h3')
        textTodo.textContent = item.text;

        const dateTodo = document.createElement('data')
        dateTodo.textContent = item.date;

        const checkbox = document.createElement('input')
        
        const importance = document.createElement('h4')
        importance.textContent = `${item.importance} - Изменить? `
        if(item.importance === 'Важно'){
            cardProject.style.backgroundColor = '#ffffb3'
        } else if (item.importance === 'Очень важно') {
            cardProject.style.backgroundColor = '#ff6d6d'
        }

        importance.addEventListener('click',()=>{
            if(item.importance === 'Не важно'){
                item.importance = 'Важно'
            } else if(item.importance === 'Важно') {
                item.importance = 'Очень важно'
            } else if(item.importance === 'Очень важно'){
                item.importance = 'Не важно'
            }
            localStorage.setItem(this._event,JSON.stringify(this._TodoList))
            this.displayProject()
        })
        

        checkbox.type = 'checkbox'
        checkbox.textContent = 'Нет'
         checkbox.checked = item.check
         

         checkbox.addEventListener('click',(index) =>{
            if (item.check === false) {
                item.check = true;
              } else {
                item.check = false;
              }
              localStorage.setItem(this._event,JSON.stringify(this._TodoList))
         })
        console.log(item.check)

        const removeButton = document.createElement('button')
        removeButton.classList.add('removeButton2')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', () => {
            this.removeProject(index)
            cardProject.textContent = ''
            cardProject.remove()
            
        })
       
        cardProject.appendChild(h1div)
        cardProject.appendChild(textTodo)
        cardProject.appendChild(importance)
        cardProject.appendChild(checkbox)
        cardProject.appendChild(dateTodo)
        cardProject.appendChild(removeButton)
        TodoCards.appendChild(cardProject)
        content.append(TodoCards)
        
    })
}
    
}