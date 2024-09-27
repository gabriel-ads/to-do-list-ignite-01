import { Task } from '../App'
import { EmptyTaskList } from './EmptyTaskList'
import { TaskList } from './TaskList'
import styles from './TaskListContainer.module.css'

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (task: Task) => void
  onCompleteTask: (taskId: number) => void
}

export function TaskListContainer({ tasks, onDeleteTask, onCompleteTask }: TaskListProps) {

  return (
    <div className={styles.taskListBox}>
      <div className={styles.taskListHeaderBox}>
        <div className={styles.headerTextBox}>
          <span className={styles.createdTaskText}>
            Tarefas Criadas
            {/* <div className={}> */}
              <span className={styles.countBox}>{tasks.length}</span>
            {/* </div> */}
          </span>
        </div>
        <span className={styles.concludedTaskText}>
          {`Concluídas`}
        </span>
      </div>
      <div className={styles.taskListBody}>
        {tasks.length ? 
          <TaskList tasks={tasks} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask}/>
         : (
          <EmptyTaskList />
        )}
        
        
      </div>
    </div>
  )
}

