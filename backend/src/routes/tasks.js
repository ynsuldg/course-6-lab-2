import { Router } from 'express'
import { createTask, getTasks } from '../db/tasks.js'

const router = Router()

router.get('/', async (_request, response) => {
  const tasks = await getTasks()

  response.json(tasks)
})

router.post('/', async (request, response) => {
  const { title, description, assignee, category, priority } = request.body

  if (!title || !description || !assignee || !category || !priority) {
    return response.status(400).json({
      message: 'Title, description, assignee, category and priority are required.',
    })
  }

  const task = await createTask({
    title,
    description,
    assignee,
    category,
    priority,
  })

  return response.status(201).json(task)
})

export default router
