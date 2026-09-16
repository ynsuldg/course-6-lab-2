import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import TaskCard from '../components/TaskCard'

it('visar data som skickas in via props', () => {
  render(
    <TaskCard
      id={1}
      category="Frontend"
      title="Bygga formulär"
      description="Bygg ett formulär för att skapa nya uppgifter."
      assignee="Adam"
      priority="Hög"
    />,
  )

  expect(screen.getByText('Id: 1')).toBeInTheDocument()
  expect(screen.getByText('Frontend')).toBeInTheDocument()
  expect(screen.getByText('Bygga formulär')).toBeInTheDocument()
  expect(
    screen.getByText('Bygg ett formulär för att skapa nya uppgifter.'),
  ).toBeInTheDocument()
  expect(screen.getByText('Ansvarig: Adam')).toBeInTheDocument()
  expect(screen.getByText('Prioritet: Hög')).toBeInTheDocument()
})
