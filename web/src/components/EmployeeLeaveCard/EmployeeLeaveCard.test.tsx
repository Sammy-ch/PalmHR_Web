import { render } from '@redwoodjs/testing/web'

import EmployeeLeaveCard from './EmployeeLeaveCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmployeeLeaveCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeLeaveCard />)
    }).not.toThrow()
  })
})
