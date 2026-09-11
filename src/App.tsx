import Header from './components/Header'
import TaskCard from './components/TaskCard'

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <TaskCard title="Bygga formulär" />
        </section>
      </main>
    </>
  )
}

export default App
