import { content, projectsLibrary, TodoCards } from "../script"

export class Todolist {
    _event = ''
    
    constructor() {
        this._TodoList =  JSON.parse(localStorage.getItem('PrList'))
       
        console.log(this._TodoList)
    }
    
    addProject(list) {
        
        
        console.log(this._TodoList)
        
       this._TodoList = projectsLibrary._projectList.find(item => item.id === list.title )
        console.log(this._TodoList)
        this._TodoList.children.push(list)
        
        console.log(this._TodoList)
        projectsLibrary.localProject()
        console.log(projectsLibrary._projectList)
        


     
        
        console.log(this._TodoList)
        this.displayTodo()
}
removeProject(index) {
   
    this._TodoList.children.splice(index,1)
    projectsLibrary.localProject()
    this.displayTodo()
 
}

localTodo(idProject) {       

 this._TodoList = projectsLibrary._projectList.find(item => item.id === idProject)


    this.displayTodo()
       
       
    
}
displayTodo() {
   
    TodoCards.textContent = ''
    console.log(this._TodoList.children)
    this._TodoList.children.forEach((item,index) => {
    
       
        const cardTodos = document.createElement('div')
        cardTodos.classList.add('cardTodo')
        

        const nameTodo = document.createElement('h1')
        nameTodo.textContent = item.name;
        const h1div = document.createElement('div')
        h1div.classList.add('h1div')
        h1div.append(nameTodo)

        const textTodo = document.createElement('h3')
        textTodo.textContent = item.text;

        const dateTodo = document.createElement('data')
        dateTodo.classList.add('dateTodo')
        dateTodo.textContent = item.date;

        const checkbox = document.createElement('checkbox')
        
        const importance = document.createElement('h4')
        importance.textContent = `${item.importance} - Изменить? `
        if(item.importance === 'Важно'){
            cardTodos.style.backgroundColor = '#ffffb3'
        } else if (item.importance === 'Очень важно') {
            cardTodos.style.backgroundColor = '#ff6d6d'
        }

        importance.addEventListener('click',()=>{
            if(item.importance === 'Не важно'){
                item.importance = 'Важно'
            } else if(item.importance === 'Важно') {
                item.importance = 'Очень важно'
            } else if(item.importance === 'Очень важно'){
                item.importance = 'Не важно'
            }

            projectsLibrary.localProject()
            this.displayTodo()
        
         
        })
        
        
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkbox')
        checkbox.textContent = 'Не завершено'
        checkbox.checked = item.check
        

        checkbox.addEventListener('click',() =>{
            if (item.check === false) {
                item.check = true;
             
            } else {
                item.check = false;
              
              }
              this.displayTodo()
              projectsLibrary.localProject()
         })
         if(item.check === true) {
            cardTodos.style.opacity = 0.5
             checkbox.textContent = 'Завершено'
            checkbox.style.color = '#0dff00';
            nameTodo.style.textDecoration = 'line-through'
            textTodo.style.display = 'none'
            importance.style.display = 'none'
            cardTodos.style.backgroundColor = '#7979797d'
            
            
         } else if (item.check === false ){
            cardTodos.style.opacity = 1;
            checkbox.style.color = '#ff0707'
         }
        console.log(item.check)

        const removeButton = document.createElement('button')
        removeButton.classList.add('removeButton2')
        removeButton.textContent = 'Удалить'
        removeButton.addEventListener('click', () => {
            this.removeProject(index)
            cardTodos.textContent = ''
            cardTodos.remove()
            
        })
       
        cardTodos.appendChild(h1div)
        cardTodos.appendChild(textTodo)
        cardTodos.appendChild(importance)
        cardTodos.appendChild(checkbox)
        cardTodos.appendChild(dateTodo)
        cardTodos.appendChild(removeButton)
        TodoCards.appendChild(cardTodos)
        content.append(TodoCards)
    });
        
    }
}
    
