import { useState } from 'react'

function NewTaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignee, setAssignee] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('Låg')

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({ title, description, assignee, category, priority })
  }

  return (
    <form
      className="mx-auto max-w-2xl space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-slate-900">Skapa ny task</h2>

      <div className="space-y-2">
        <label className="block font-semibold text-slate-700" htmlFor="title">
          Titel
        </label>
        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          className="block font-semibold text-slate-700"
          htmlFor="description"
        >
          Beskrivning
        </label>
        <textarea
          className="min-h-28 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          className="block font-semibold text-slate-700"
          htmlFor="assignee"
        >
          Ansvarig
        </label>
        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="assignee"
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          className="block font-semibold text-slate-700"
          htmlFor="category"
        >
          Kategori
        </label>
        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          className="block font-semibold text-slate-700"
          htmlFor="priority"
        >
          Prioritet
        </label>
        <select
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="Låg">Låg</option>
          <option value="Medium">Medium</option>
          <option value="Hög">Hög</option>
        </select>
      </div>

      <button
        className="rounded-lg bg-sky-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-sky-800"
        type="submit"
      >
        Skapa task
      </button>
    </form>
  )
}

export default NewTaskForm
