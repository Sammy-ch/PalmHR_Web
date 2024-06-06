import { render } from '@redwoodjs/testing/web'

import UserDashboardLayout from './UserDashboardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserDashboardLayout />)
    }).not.toThrow()
  })
})
