import { Cards, projectsLibrary, TodoLibrary } from "../script";
import { openProject } from "./Todolist";


export class Projects {
    constructor() {
        this._projectList = JSON.parse(localStorage.getItem('PrList')) || []
    }

    addProject(project) {

        this._projectList.push(project)
            localStorage.setItem('PrList',JSON.stringify(this._projectList))
            console.log(this._projectList)
                    
       
this.displayProject()
}
removeProject(index) {
    this._projectList.splice(index,1)
    localStorage.setItem('PrList',JSON.stringify(this._projectList))
    this.displayProject()
}

localProject() {        
    if(this._projectList == []) {    
        return false
    } else {
        
        console.log()
        localStorage.setItem('PrList',JSON.stringify(this._projectList))
        this.displayProject()
    }
         
        // this.addProject(this._projectList.name)  
}
displayProject() {
   
   Cards.textContent = ''

    this._projectList.forEach((item,index) => {
        const cardProject = document.createElement('div')
        cardProject.classList.add('cardProject')

        const nameProject = document.createElement('h1')
        nameProject.textContent = item.name;
        nameProject.classList.add('nameProject')
        const h1div = document.createElement('div')
        h1div.classList.add('h1div')
        h1div.append(nameProject)

        const dateProject = document.createElement('data')
        dateProject.textContent = item.date;
        dateProject.style.fontSize = '25px';

        const removeButton = document.createElement('button')
        removeButton.classList.add('removeButton')
        removeButton.textContent = 'Удалить'
        removeButton.addEventListener('click', () => {
            this.removeProject(index)
            cardProject.textContent = ''
            cardProject.remove()
            
        })
        
        h1div.addEventListener('click',(e) => {
           const chototam = e.target.textContent
           const BodyText = document.querySelector('.bodyH1')
          
           BodyText.textContent = `${item.name}`
           const idProject = item.id

           openProject(idProject)
           this.displayProject()
           TodoLibrary.localTodo(idProject)
           
           
           //!1
             
             TodoLibrary._event = chototam
            
             
        }
)
       
        cardProject.appendChild(h1div)
        cardProject.appendChild(dateProject)
        cardProject.appendChild(removeButton)
        Cards.appendChild(cardProject)
        
    })
    console.log(this._projectList)
}

}