class Task {
    id:number;
    name :string;
    status:boolean;
    constructor(id:number,name:string,status:boolean)

    {
        this.name=name;
        this.id=id;
        this.status=status;

    }
    showInFo()
    {
        console.log(`${this.id} - ${this.name}`);
    }

}
let objtask= new Task(1,"manh",true);
objtask.showInFo();
//console.log(objtask);