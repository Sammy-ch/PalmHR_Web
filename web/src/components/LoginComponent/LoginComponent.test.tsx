import { render } from '@redwoodjs/testing/web'

import LoginComponent from './LoginComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoginComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginComponent />)
    }).not.toThrow()
  })
})
