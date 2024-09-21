import styles from './EmptyTaskList.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskListBox}>
      <img src={Clipboard} alt='Prancheta de tarefas' />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
