import { render } from '@redwoodjs/testing/web'

import DashboardHeader from './DashboardHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardHeader />)
    }).not.toThrow()
  })
})
