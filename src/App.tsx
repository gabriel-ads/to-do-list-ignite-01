import { useState } from 'react'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import './global.css'
import { TaskList } from './components/TaskList'
import styles from './App.module.css'

export interface Task {
  id: number
  description: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    description: 'Melhorar o código'
  }])

  function createTask(newTaskDescription: string){
    const lengthOfTasksArray = tasks.length
    setTasks((value) => 
      [...value, 
        {
          id: lengthOfTasksArray + 1,
          description: newTaskDescription
        }
      ]
    )
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerBox}>

          <TaskInput onCreateTask={createTask}/>
          
          <TaskList tasks={tasks} onDeleteTask={()=>{}}/>
        </div>
      </div>
    </>
  )
}

export default App
