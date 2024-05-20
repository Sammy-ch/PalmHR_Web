import { render } from '@redwoodjs/testing/web'

import CreateUserProfile from './CreateUserProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateUserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateUserProfile />)
    }).not.toThrow()
  })
})
