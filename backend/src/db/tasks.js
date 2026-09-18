import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in backend/.env')
}

const sql = neon(process.env.DATABASE_URL)

const initialTasks = [
  {
    title: 'Bygga formulär',
    description: 'Bygg ett formulär för att skapa nya uppgifter.',
    assignee: 'Adam',
    category: 'Frontend',
    priority: 'Hög',
    status: 'todo',
  },
  {
    title: 'Planera navigation',
    description: 'Planera appens navigation och sidstruktur.',
    assignee: 'Bertil',
    category: 'Design',
    priority: 'Medium',
    status: 'todo',
  },
  {
    title: 'Skapa datamodell',
    description: 'Definiera typer för appens data.',
    assignee: 'Cesar',
    category: 'TypeScript',
    priority: 'Låg',
    status: 'todo',
  },
  {
    title: 'Skapa dashboard',
    description: 'Bygg gränssnittet för projektets dashboard.',
    assignee: 'David',
    category: 'Frontend',
    priority: 'Hög',
    status: 'doing',
  },
  {
    title: 'Designa task-kort',
    description: 'Ta fram en tydlig design för task-korten.',
    assignee: 'Erik',
    category: 'Design',
    priority: 'Medium',
    status: 'doing',
  },
  {
    title: 'Förbättra layout',
    description: 'Justera kolumnernas layout och mellanrum.',
    assignee: 'Filip',
    category: 'CSS',
    priority: 'Låg',
    status: 'doing',
  },
  {
    title: 'Skriva tester',
    description: 'Skriv tester för projektets komponenter.',
    assignee: 'Gustav',
    category: 'Testning',
    priority: 'Hög',
    status: 'done',
  },
  {
    title: 'Skapa header',
    description: 'Skapa appens header-komponent.',
    assignee: 'Harald',
    category: 'Frontend',
    priority: 'Medium',
    status: 'done',
  },
  {
    title: 'Skapa kolumner',
    description: 'Skapa kolumner för Todo, Doing och Done.',
    assignee: 'Ivar',
    category: 'Frontend',
    priority: 'Låg',
    status: 'done',
  },
]

async function initializeDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      assignee TEXT NOT NULL,
      category TEXT NOT NULL,
      priority TEXT NOT NULL,
      status TEXT NOT NULL CHECK (status IN ('todo', 'doing', 'done'))
    )
  `

  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM tasks`

  if (count === 0) {
    for (const task of initialTasks) {
      await sql`
        INSERT INTO tasks (
          title,
          description,
          assignee,
          category,
          priority,
          status
        )
        VALUES (
          ${task.title},
          ${task.description},
          ${task.assignee},
          ${task.category},
          ${task.priority},
          ${task.status}
        )
      `
    }
  }
}

await initializeDatabase()

export async function getTasks() {
  return sql`SELECT * FROM tasks ORDER BY id`
}

export async function createTask({
  title,
  description,
  assignee,
  category,
  priority,
}) {
  const [task] = await sql`
    INSERT INTO tasks (title, description, assignee, category, priority, status)
    VALUES (${title}, ${description}, ${assignee}, ${category}, ${priority}, 'todo')
    RETURNING *
  `

  return task
}
