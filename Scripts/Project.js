const cardProject = document.createElement('div')

export class project {
    constructor(name,date,children) {
        this.id = new Date().getTime();
        this.name = name;
        this.date = date;
        this.children = children;
    }
}
