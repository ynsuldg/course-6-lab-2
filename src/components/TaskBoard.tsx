import type { NewTask, Task } from '../types/Task'
import Column from './Column'
import NewTaskForm from './NewTaskForm'
import TaskCard from './TaskCard'

type TaskBoardProps = {
  tasks: Task[]
  onCreateTask: (task: NewTask) => void
}

function TaskBoard({ tasks, onCreateTask }: TaskBoardProps) {
  const todoTasks = tasks.filter((task) => task.status === 'todo')
  const doingTasks = tasks.filter((task) => task.status === 'doing')
  const doneTasks = tasks.filter((task) => task.status === 'done')

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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Column title="Todo">{todoTasks.map(renderTask)}</Column>
        <Column title="Doing">{doingTasks.map(renderTask)}</Column>
        <Column title="Done">{doneTasks.map(renderTask)}</Column>
      </div>
    </main>
  )
}

export default TaskBoard
