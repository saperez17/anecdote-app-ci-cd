import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/App'

describe('<App />', () => {
  it('Frontend page is displayed correctly', async () => {
    await act(async () => {
      const { getByText, getByRole } = render(
        <Router>
          <App />
        </Router>
      )
      expect(getByRole('heading', { name: /Software anecdotes/, level:1 })).toBeVisible();
      expect(getByText('anecdotes')).toHaveAttribute('href', '/')
      expect(getByText('create new')).toHaveAttribute('href', '/create')
      expect(getByText('about')).toHaveAttribute('href', '/about')

      expect(getByRole('heading', { name: /Anecdotes/, level:2 })).toBeVisible();
      expect(getByText('If it hurts, do it more often')).toHaveAttribute('href', '/anecdotes/1')
      expect(getByText('Premature optimization is the root of all evil')).toHaveAttribute('href', '/anecdotes/2')
    })
  })
})
