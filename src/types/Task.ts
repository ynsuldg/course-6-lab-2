export type Task = {
  id: number
  title: string
  description: string
  assignee: string
  category: string
  priority: string
  status: 'todo' | 'doing' | 'done'
}

export type NewTask = Omit<Task, 'id' | 'status'>
