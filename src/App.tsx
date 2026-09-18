import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskBoard from './components/TaskBoard'
import type { NewTask, Task } from './types/Task'

const apiUrl = 'http://localhost:3001/api/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error('Kunde inte hämta tasks')
        }

        const tasks: Task[] = await response.json()
        setTasks(tasks)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTasks()
  }, [])

  const handleCreateTask = async (newTask: NewTask) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    if (!response.ok) {
      throw new Error('Kunde inte skapa task')
    }

    const createdTask: Task = await response.json()
    setTasks((currentTasks) => [...currentTasks, createdTask])
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <TaskBoard tasks={tasks} onCreateTask={handleCreateTask} />
    </div>
  )
}

export default App
