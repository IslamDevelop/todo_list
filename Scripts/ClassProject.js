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
        const h1div = document.createElement('div')
        h1div.classList.add('h1div')
        h1div.append(nameProject)

        const dateProject = document.createElement('data')
        dateProject.textContent = item.date;

        const removeButton = document.createElement('button')
        removeButton.classList.add('removeButton')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', () => {
            this.removeProject(index)
            cardProject.textContent = ''
            cardProject.remove()
            
        })
    
        h1div.addEventListener('click',(e) => {
           const chototam = e.target.textContent
           const BodyText = document.querySelector('.bodyH1')
          
           BodyText.textContent = `${chototam}`
           
           
           
             openProject(chototam)
             
             TodoLibrary._event = chototam
             TodoLibrary.localProject()
             
             
        }
)
       
        cardProject.appendChild(h1div)
        cardProject.appendChild(dateProject)
        cardProject.appendChild(removeButton)
        Cards.appendChild(cardProject)
        
    })
}
    
}