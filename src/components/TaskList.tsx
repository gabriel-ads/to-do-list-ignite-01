import { Task } from '../App'
import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (task: Task) => void
}

export function TaskList( {tasks, onDeleteTask}: TaskListProps) {
  return (
    <div className={styles.taskListBox}>
      <div className={styles.taskListHeaderBox}>
        <span className={styles.createdTaskText}>
          {`Tarefas Criadas`}
        </span>
        <span className={styles.concludedTaskText}>
          {`Concluídas`}
        </span>
      </div>
      <div className={styles.taskListBody}>
        <div>asds</div>
        {
          tasks.map(({id, description}) => {
            return (<input key={id} type="checkbox" id={id.toString()}/>)
          })
        }
      </div>
    </div>
  )
}

