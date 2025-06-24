export interface Task{
    id:number,
    taskName:string;
    isCompleted:boolean;
}

export interface TaskProps extends Task{
    onToggleStatus:()=>void;
    handleUp:()=>void;
    handleDown:()=>void;
}
