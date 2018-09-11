enum TaskStatus{
    create =100,finish,loading
}

interface TaskInterface {
    id :number;
    name:string;
    state?:TaskStatus;
}
class TaskService {
    public static username:string ="john";
    static tasks:TaskInterface[];
    constructor (tasks:TaskInterface[])
    {
        TaskService.tasks=tasks;
    }
    GetItems()
    {
        return TaskService.tasks;
    }
    static ShowItem():void{
        for(let task of TaskService.tasks)
        {
            console.log(`${TaskService.username}- ${task.name}`);
        }
    }
  
}
let tasksServiceobj= new TaskService([
    {id:1,name:"Mạnh"},
    {id:2,name:"Nhut"},
    {id:3 ,name:"Long",state:TaskStatus.loading}

]);
TaskService.ShowItem();
//let TaskSer= new TaskService(tasks);
//console.log(TaskSer.GetItems());