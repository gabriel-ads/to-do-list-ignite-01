import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TaskInput.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface TaskInputProps {
  onCreateTask: (newTaskDescription: string) => void
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
          <PlusCircle color='#ffffff' size={21} />
        </button>
      </form>
  )
}
