import type { ReactNode } from 'react'

type ColumnProps = {
  title: string
  children: ReactNode
}

function Column({ title, children }: ColumnProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-100 p-5">
      <h2 className="mb-5 text-2xl font-bold text-slate-900">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default Column
