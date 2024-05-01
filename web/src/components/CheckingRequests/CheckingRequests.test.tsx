import { render } from '@redwoodjs/testing/web'

import CheckingRequests from './CheckingRequests'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckingRequests', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckingRequests />)
    }).not.toThrow()
  })
})
