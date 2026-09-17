import type { Task } from '../types/Task'

type TaskCardProps = {
  id: number
  title: string
  description: string
  assignee: string
  category: string
  priority: string
  status?: Task['status']
}

function TaskCard({
  id,
  title,
  description,
  assignee,
  category,
  priority,
  status = 'todo',
}: TaskCardProps) {
  const priorityStyles = {
    Hög: 'bg-red-100 text-red-800',
    Medium: 'bg-amber-100 text-amber-800',
    Låg: 'bg-emerald-100 text-emerald-800',
  }

  const priorityClass =
    priorityStyles[priority as keyof typeof priorityStyles] ??
    'bg-slate-100 text-slate-700'

  const statusClass =
    status === 'done'
      ? 'border-emerald-200 bg-emerald-50'
      : 'border-slate-200 bg-white'

  return (
    <article
      className={`space-y-3 rounded-lg border p-5 shadow-sm ${statusClass}`}
    >
      <p className="text-sm font-medium text-slate-500">Id: {id}</p>
      <p className="inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
        {category}
      </p>
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="leading-6 text-slate-600">{description}</p>
      <p className="text-sm font-medium text-slate-700">Ansvarig: {assignee}</p>
      <p
        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${priorityClass}`}
      >
        Prioritet: {priority}
      </p>
    </article>
  )
}

export default TaskCard
