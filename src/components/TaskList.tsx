import { Task } from "../App"
import { Trash } from "@phosphor-icons/react"
import styles from './TaskList.module.css'

interface TaskLiskProps {
  tasks: Task[]
  onCompleteTask: (taskId: number) => void
  onDeleteTask: (task: Task) => void
}

export function TaskList({ tasks, onCompleteTask, onDeleteTask }: TaskLiskProps) {
  return (
    <>
      {tasks.map(task => {
        return (
          <div key={task.id} className={styles.taskListBox}>
            <input  type="checkbox" id={task.id.toString()} defaultChecked={task.concluded} onClick={() => onCompleteTask(task.id)} />
            <label className={task.concluded ? styles.taskConcluded : undefined} id={task.id.toString()}>
              {task.description}
            </label>
            <Trash className={styles.trashCan} size={21} onClick={() => onDeleteTask(task)}/>
          </div>
        )
      })}
    </>
  )
}
