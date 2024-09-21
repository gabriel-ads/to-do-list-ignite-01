import { Task } from "../App"
import { Trash } from "@phosphor-icons/react"
import styles from './TaskList.module.css'

interface TaskLiskProps {
  tasks: Task[]
}

export function TaskList({tasks}: TaskLiskProps) {
  return (
    <>
      {tasks.map(({id, description}) => {
        return (
          <div className={styles.taskListBox}>
            <input key={id} type="checkbox" id={id.toString()} />
            <label id={id.toString()}>{description}</label>
            <Trash size={21}/>
          </div>
        )
      })}
    </>
  )
}
