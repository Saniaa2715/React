import styles from './Main.module.scss';
import { useState } from 'react';
import { Todolist } from '../To Do List/Todolist';
import { todoTasks } from '../../data';

export const Main = () => {

    // const [taskList , setTaskList]=useState<Task[]>([]);
    const [taskList , setTaskList]=useState(todoTasks);


    const addTask=()=>{
        setTaskList([...taskList])
    }

    // const handleAdd=()=>{
    //     setTaskList([...taskList],)

    // }

    const handleToggle=()=>{

    }

    const handleUp=()=>{

    }

    // const handleisCompleted=()=>{

    // }

    const handleDown=()=>{

    }



    
    return (
        <main className={styles.Main}>

            <div>
            <button onClick={addTask} className={styles.Mainbtn}>ADD</button>
            <button className={styles.Mainbtn}>TOGGLE</button>
            </div>
           

            <Todolist tasks={taskList} onToggleStatus={handleToggle}  handleUp={handleUp} handleDown={handleDown}/>
            
            
        </main>
    )
}