import { Task } from '../App'
import { EmptyTaskList } from './EmptyTaskList'
import { TaskList } from './TaskList'
import styles from './TaskListContainer.module.css'

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (task: Task) => void
}

export function TaskListContainer( {tasks, onDeleteTask}: TaskListProps) {
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
        {tasks.length ? 
          <TaskList tasks={tasks}/>
         : (
          <EmptyTaskList />
        )}
        
        
      </div>
    </div>
  )
}

