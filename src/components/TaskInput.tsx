import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TaskInput.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { Task } from '../App'

interface TaskInputProps {
  onCreateTask: (task: Task) => void
}

export function TaskInput({ onCreateTask }:TaskInputProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

 function handleCreateNewTask(event: FormEvent) {
  event.preventDefault()
  
  onCreateTask(newTaskText)
 }

  return (
      <form onSubmit={handleCreateNewTask} className={styles.taskInputBox}>
        <input type="text"  onChange={handleNewTaskChange} placeholder='Adicione uma nova tarefa' required/>
        <button type='submit'>
          Criar
          <PlusCircle color='#ffffff' size={16} />
        </button>
      </form>
  )
}
