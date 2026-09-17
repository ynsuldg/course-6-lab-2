function Header() {
  return (
    <header className="bg-slate-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold tracking-widest text-sky-300 uppercase">
          Laboration
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Task Board</h1>
        <p className="mt-3 text-lg text-slate-300">
          En enkel task board byggd med React och TypeScript.
        </p>
      </div>
    </header>
  )
}

export default Header
