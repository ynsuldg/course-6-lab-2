import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from '../components/Header'

describe('Header', () => {
  it('renderas utan fel', () => {
    render(<Header />)
  })

  it('visar appens huvudrubrik', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: 'Task Board' })).toBeInTheDocument()
  })

  it('visar den korta introduktionstexten', () => {
    render(<Header />)

    expect(
      screen.getByText('En enkel task board byggd med React och TypeScript.'),
    ).toBeInTheDocument()
  })
})
