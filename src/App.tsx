import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router'
import Header from './components/Header'
import NewTaskForm from './components/NewTaskForm'
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
      <nav className="bg-slate-800 px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl gap-6">
          <NavLink to="/">Task board</NavLink>
          <NavLink to="/new-task">Skapa task</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TaskBoard tasks={tasks} />} />
        <Route
          path="/new-task"
          element={
            <main className="mx-auto max-w-6xl px-6 py-10">
              <NewTaskForm onCreateTask={handleCreateTask} />
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
