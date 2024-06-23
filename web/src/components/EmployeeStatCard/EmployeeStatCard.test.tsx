import { render } from '@redwoodjs/testing/web'

import EmployeeStatCard from './EmployeeStatCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmployeeStatCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeStatCard />)
    }).not.toThrow()
  })
})
