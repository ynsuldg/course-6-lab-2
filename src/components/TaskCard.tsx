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
    <article className="task-card">
      <p>Id: {id}</p>
      <p className="category">{category}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Ansvarig: {assignee}</p>
      <p className="priority">Prioritet: {priority}</p>
    </article>
  )
}

export default TaskCard
