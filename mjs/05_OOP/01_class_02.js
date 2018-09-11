var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["create"] = 100] = "create";
    TaskStatus[TaskStatus["finish"] = 101] = "finish";
    TaskStatus[TaskStatus["loading"] = 102] = "loading";
})(TaskStatus || (TaskStatus = {}));
class TaskService {
    constructor(tasks) {
        TaskService.tasks = tasks;
    }
    GetItems() {
        return TaskService.tasks;
    }
    static ShowItem() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.username}- ${task.name}`);
        }
    }
}
TaskService.username = "john";
let tasksServiceobj = new TaskService([
    { id: 1, name: "Mạnh" },
    { id: 2, name: "Nhut" },
    { id: 3, name: "Long", state: TaskStatus.loading }
]);
TaskService.ShowItem();
//let TaskSer= new TaskService(tasks);
//console.log(TaskSer.GetItems());
