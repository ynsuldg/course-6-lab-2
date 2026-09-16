import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Column from '../components/Column'

it('visar sin titel och sitt innehåll', () => {
  render(
    <Column title="Todo">
      <p>Ett task-kort</p>
    </Column>,
  )

  expect(screen.getByText('Todo')).toBeInTheDocument()
  expect(screen.getByText('Ett task-kort')).toBeInTheDocument()
})
