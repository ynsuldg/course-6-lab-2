import cors from 'cors'
import express from 'express'
import taskRoutes from './routes/tasks.js'

const app = express()
const port = 3001

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

app.use('/api/tasks', taskRoutes)

app.listen(port, () => {
  console.log(`TaskBoard API is running on http://localhost:${port}`)
})
