import { useEffect, useState } from 'react'
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
  const [concludedCount, setConcludedCount] = useState(0)

  useEffect(() => {
    const concludedTasks = tasks.filter(task => task.concluded);

    setConcludedCount(concludedTasks.length)
  }, [tasks])
  

  return (
    <div className={styles.taskListBox}>
      <div className={styles.taskListHeaderBox}>
        <div className={styles.headerTextBox}>
          <span className={styles.createdTaskText}>
            Tarefas Criadas
          </span>
          <span className={styles.countBox}>
            {tasks.length}
          </span>
        </div>
        <div className={styles.headerTextBox}>
          <span className={styles.concludedTaskText}>
            Concluídas
          </span>
          <span className={styles.countBox}>
            {tasks.length ? `${concludedCount} de ${tasks.length}`: concludedCount}
          </span>
        </div>
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

