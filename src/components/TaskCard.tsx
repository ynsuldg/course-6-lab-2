type TaskCardProps = {
  title: string
}

function TaskCard({ title }: TaskCardProps) {
  return (
    <article>
      <p>Frontend</p>
      <h2>{title}</h2>
      <p>Bygg gränssnittet för projektets dashboard.</p>
      <p>Ansvarig: Yunus</p>
      <p>Prioritet: Hög</p>
    </article>
  )
}

export default TaskCard
