import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/App'

describe('<App />', () => {
  it('Frontend page is displayed correctly', async () => {
    await act(async () => {
      const { getByText } = render(
        <Router>
          <App />
        </Router>
      )
      expect(getByText('Software anecdotes')).toBeVisible()
    })
  })
})
