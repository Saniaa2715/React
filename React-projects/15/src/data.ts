export interface todoData{
    id:number;
    taskName:string;
    isCompleted:boolean;
}

export const todoTasks:todoData[]=[
    {id:1,taskName:"Get Up", isCompleted:false},
    {id:2,taskName:"Workout", isCompleted:false},
    {id:3,taskName:"Breakfast", isCompleted:false},
    {id:4,taskName:"Leave for Work", isCompleted:false},
    {id:5,taskName:"Meeting", isCompleted:false},
    {id:5,taskName:"Lunch", isCompleted:false},
    {id:5,taskName:"Coding", isCompleted:false}
]