import Header from './components/Header'
import Column from './components/Column'
import TaskCard from './components/TaskCard'
import type { Task } from './types/Task'
import './App.css'

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
  return (
    <>
      <Header />
      <main>
        <div className="board">
          <Column title="Todo">
            <TaskCard
              id={1}
              title="Bygga formulär"
              description="Bygg ett formulär för att skapa nya uppgifter."
              assignee="Adam"
              category="Frontend"
              priority="Hög"
            />
          </Column>
          <Column title="Doing">
            <TaskCard
              id={2}
              title="Skapa dashboard"
              description="Bygg gränssnittet för projektets dashboard."
              assignee="Bertil"
              category="Design"
              priority="Medium"
            />
          </Column>
          <Column title="Done">
            <TaskCard
              id={3}
              title="Skriva tester"
              description="Skriv tester för projektets komponenter."
              assignee="Cesar"
              category="Testning"
              priority="Låg"
            />
          </Column>
        </div>
      </main>
    </>
  )
}

export default App
