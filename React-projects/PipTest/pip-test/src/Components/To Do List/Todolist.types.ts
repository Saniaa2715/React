// import { TaskProps } from './../To Do/Todo.types';
// import { TaskProps } from "../To Do/Todo.types";
import { Task } from "../To Do/Todo.types";

export interface ToDoListProps{
    tasks:Task[];
    onToggleStatus:(id:number)=>void;
    handleUp:(id:number)=>void;
    handleDown:(id:number)=>void;
}