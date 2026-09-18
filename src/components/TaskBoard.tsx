import { useState } from 'react'
import type { NewTask, Task } from '../types/Task'
import Column from './Column'
import NewTaskForm from './NewTaskForm'
import TaskCard from './TaskCard'

type TaskBoardProps = {
  tasks: Task[]
  onCreateTask: (task: NewTask) => Promise<void>
}

function TaskBoard({ tasks, onCreateTask }: TaskBoardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearchTerm = searchTerm.toLowerCase()

  const filteredTasks = tasks.filter((task) => {
    const searchableValues = [
      task.title,
      task.description,
      task.category,
      task.assignee,
      task.priority,
    ]

    return searchableValues.some((value) =>
      value.toLowerCase().includes(normalizedSearchTerm),
    )
  })

  const todoTasks = filteredTasks.filter((task) => task.status === 'todo')
  const doingTasks = filteredTasks.filter((task) => task.status === 'doing')
  const doneTasks = filteredTasks.filter((task) => task.status === 'done')

  const renderTask = (task: Task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      assignee={task.assignee}
      category={task.category}
      priority={task.priority}
      status={task.status}
    />
  )

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
      <NewTaskForm onCreateTask={onCreateTask} />
      <div className="mx-auto max-w-2xl space-y-2">
        <label className="block font-semibold text-slate-700" htmlFor="search">
          Sök tasks
        </label>
        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Column title="Todo">{todoTasks.map(renderTask)}</Column>
        <Column title="Doing">{doingTasks.map(renderTask)}</Column>
        <Column title="Done">{doneTasks.map(renderTask)}</Column>
      </div>
    </main>
  )
}

export default TaskBoard
