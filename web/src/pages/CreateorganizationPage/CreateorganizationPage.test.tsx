import { render } from '@redwoodjs/testing/web'

import CreateorganizationPage from './CreateorganizationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateorganizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateorganizationPage />)
    }).not.toThrow()
  })
})
