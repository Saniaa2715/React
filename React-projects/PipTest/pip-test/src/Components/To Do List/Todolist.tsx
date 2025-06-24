

import styles from './Todolist.module.scss';
import { ToDoListProps } from './Todolist.types';
import { Todo } from '../To Do/Todo';

export const Todolist = ({ tasks, onToggleStatus, handleDown, handleUp }: ToDoListProps) => {
  return (
    <>
      <section className={styles.Todolist}>
        {tasks.map((task) => (
          <Todo
            id={task.id}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
            onToggleStatus={() => onToggleStatus}
            handleDown={() => handleDown}
            handleUp={() => handleUp}
          />
        ))}
      </section>


    </>
  )
}