import styles from './Task.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function TaskInput() {
  return (
    <div className={styles.taskInputBox}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircle color='#ffffff' size={16} />
      </button>
    </div>
  )
}
