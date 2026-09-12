import Header from './components/Header'
import Column from './components/Column'
import TaskCard from './components/TaskCard'
import './App.css'

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
