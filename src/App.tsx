import Header from './components/Header'
import TaskCard from './components/TaskCard'

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <TaskCard
            id={1}
            title="Bygga formulär"
            description="Bygg ett formulär för att skapa nya uppgifter."
            assignee="Adam"
            category="Frontend"
            priority="Hög"
          />
          <TaskCard
            id={2}
            title="Skapa dashboard"
            description="Bygg gränssnittet för projektets dashboard."
            assignee="Bertil"
            category="Design"
            priority="Medium"
          />
          <TaskCard
            id={3}
            title="Skriva tester"
            description="Skriv tester för projektets komponenter."
            assignee="Cesar"
            category="Testning"
            priority="Låg"
          />
        </section>
      </main>
    </>
  )
}

export default App
