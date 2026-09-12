type ColumnProps = {
  title: string
}

function Column({ title }: ColumnProps) {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  )
}

export default Column
