import { useState } from 'react'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import './global.css'
import { TaskListContainer } from './components/TaskListContainer'
import styles from './App.module.css'

export interface Task {
  id: number
  description: string
  concluded: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    description: 'Melhorar o código',
    concluded: false
  }])

  const handleCreateTask = (newTaskDescription: string) => {
    const lengthOfTasksArray = tasks.length
    setTasks((value) => 
      [...value, 
        {
          id: lengthOfTasksArray + 1,
          description: newTaskDescription,
          concluded: false
        }
      ]
    )
  }

  const handleCompleteTask = (taskId: number) => {
    setTasks((tasks) => {
      return tasks.map(task => {
        if(task.id === taskId && task.concluded === false) {
          return { ...task, concluded: true}
        } else if (task.id === taskId) return { ...task, concluded: false}

        return task
      })
    })
  }

  const handleDeleteTask = (taskToDelete: Task) => {
    setTasks((tasks) => {
        return tasks.filter((task) => {
          return task !== taskToDelete
        })
      })
    }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerBox}>
          <TaskInput onCreateTask={handleCreateTask}/>
          <TaskListContainer tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask}/>
        </div>
      </div>
    </>
  )
}

export default App
