type TaskCardProps = {
  id: number
  title: string
  description: string
  assignee: string
  category: string
  priority: string
}

function TaskCard({
  id,
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) {
  return (
    <article className="space-y-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">Id: {id}</p>
      <p className="inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
        {category}
      </p>
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="leading-6 text-slate-600">{description}</p>
      <p className="text-sm font-medium text-slate-700">Ansvarig: {assignee}</p>
      <p className="text-sm font-medium text-slate-700">
        Prioritet: {priority}
      </p>
    </article>
  )
}

export default TaskCard
