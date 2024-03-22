import { render } from '@redwoodjs/testing/web'

import DashoardLayout from './DashoardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashoardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashoardLayout />)
    }).not.toThrow()
  })
})
