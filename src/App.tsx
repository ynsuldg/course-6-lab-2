import Header from './components/Header'
import Column from './components/Column'
import TaskCard from './components/TaskCard'
import NewTaskForm from './components/NewTaskForm'
import type { Task } from './types/Task'

const tasks: Task[] = [
  {
    id: 1,
    title: 'Bygga formulär',
    description: 'Bygg ett formulär för att skapa nya uppgifter.',
    assignee: 'Adam',
    category: 'Frontend',
    priority: 'Hög',
    status: 'todo',
  },
  {
    id: 2,
    title: 'Planera navigation',
    description: 'Planera appens navigation och sidstruktur.',
    assignee: 'Bertil',
    category: 'Design',
    priority: 'Medium',
    status: 'todo',
  },
  {
    id: 3,
    title: 'Skapa datamodell',
    description: 'Definiera typer för appens data.',
    assignee: 'Cesar',
    category: 'TypeScript',
    priority: 'Låg',
    status: 'todo',
  },
  {
    id: 4,
    title: 'Skapa dashboard',
    description: 'Bygg gränssnittet för projektets dashboard.',
    assignee: 'David',
    category: 'Frontend',
    priority: 'Hög',
    status: 'doing',
  },
  {
    id: 5,
    title: 'Designa task-kort',
    description: 'Ta fram en tydlig design för task-korten.',
    assignee: 'Erik',
    category: 'Design',
    priority: 'Medium',
    status: 'doing',
  },
  {
    id: 6,
    title: 'Förbättra layout',
    description: 'Justera kolumnernas layout och mellanrum.',
    assignee: 'Filip',
    category: 'CSS',
    priority: 'Låg',
    status: 'doing',
  },
  {
    id: 7,
    title: 'Skriva tester',
    description: 'Skriv tester för projektets komponenter.',
    assignee: 'Gustav',
    category: 'Testning',
    priority: 'Hög',
    status: 'done',
  },
  {
    id: 8,
    title: 'Skapa header',
    description: 'Skapa appens header-komponent.',
    assignee: 'Harald',
    category: 'Frontend',
    priority: 'Medium',
    status: 'done',
  },
  {
    id: 9,
    title: 'Skapa kolumner',
    description: 'Skapa kolumner för Todo, Doing och Done.',
    assignee: 'Ivar',
    category: 'Frontend',
    priority: 'Låg',
    status: 'done',
  },
]

function App() {
  const todoTasks = tasks.filter((task) => task.status === 'todo')
  const doingTasks = tasks.filter((task) => task.status === 'doing')
  const doneTasks = tasks.filter((task) => task.status === 'done')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
        <NewTaskForm />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Column title="Todo">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
                status={task.status}
              />
            ))}
          </Column>
          <Column title="Doing">
            {doingTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
                status={task.status}
              />
            ))}
          </Column>
          <Column title="Done">
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
                status={task.status}
              />
            ))}
          </Column>
        </div>
      </main>
    </div>
  )
}

export default App
