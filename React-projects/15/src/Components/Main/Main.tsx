import styles from './Main.module.scss';

import { useState } from 'react';
import { todoTasks } from '../../data';

export const Main = () => {


    const [index, setIndex] = useState(0);
    const handlePending = () => {
        setIndex(index + 1);
    }
    const task = todoTasks[index];
    console.log(task);


    // const [tasks, setTasks] = useState(todoTasks);
    // const handlePending = (task:any) => {
    //     setTasks(tasks.map((t)=>{
    //         if(t.id===task.id){
    //             return task;
    //         }
    //         else{
    //             return t;
    //         }
    //     }));
    // }

    // // let nextId=0;
    // const handlePending=({id,taskName,isCompleted}:todoData)=>{
    //     setTasks([
    //         ...tasks,
    //         {
    //           id: id++,
    //           taskName: taskName,
    //           isCompleted: isCompleted,
    //         },
    //       ]);
    // }



    return (
        <main className={styles.main}>
            <div className={styles.action}>
                <button className={styles.btn} onClick={handlePending} >ADD</button>
                {/* <Task name={task.name}/> */}
                <button className={styles.btn}>TOGGLE</button>
            </div>

            <section className={styles.taskLists}>

                {/* {tasks.map(task => */}
                    <div className={styles.item} >
                        <h2>{task.taskName}</h2>

                        <div className={styles.btnList}>

                            <button className={`${styles.btn} ${styles.toggleBtn}`} >
                            {task.isCompleted ? 'Pending' : 'Completed'}
                            </button>
                            {/* onClick={() => {
                                task.isCompleted = !task.isCompleted;
                                setTasks([...tasks])}}>
                                    {task.isCompleted ? 'Pending' : 'Completed'}
                            </button> */}
                            <button className={styles.btn} /*onClick={handleUp}*/>Up</button>
                            <button className={styles.btn} /*onClick={handleDown}*/>Down</button>

                        </div>
                    </div>
                
                
                
            
            </section>

        </main>
    )

}

