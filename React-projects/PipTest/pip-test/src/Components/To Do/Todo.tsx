import styles from './Todo.module.scss';
import { TaskProps } from './Todo.types';

export const Todo=({taskName, isCompleted,onToggleStatus, handleUp, handleDown}:TaskProps)=>{
    return(
        <>
           <div className={styles.Todo}>
                <span>{taskName}</span>
                 <div className={styles.TodoBtns}>
                    <button onClick={onToggleStatus}>{isCompleted? 'Pending' : 'Completed'} </button>
                    <button onClick={handleUp}>Up</button>
                    <button onClick={handleDown}>Down</button>
                 </div>
           </div>
        </>
    )
}