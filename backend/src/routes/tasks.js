import { Router } from 'express'
import { createTask, getTasks } from '../db/tasks.js'

const router = Router()

router.get('/', (_request, response) => {
  response.json(getTasks())
})

router.post('/', (request, response) => {
  const { title, description, assignee, category, priority } = request.body

  if (!title || !description || !assignee || !category || !priority) {
    return response.status(400).json({
      message: 'Title, description, assignee, category and priority are required.',
    })
  }

  const task = createTask({
    title,
    description,
    assignee,
    category,
    priority,
  })

  return response.status(201).json(task)
})

export default router
