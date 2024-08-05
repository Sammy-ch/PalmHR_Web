import { render } from '@redwoodjs/testing/web'

import EmployeePayrollCard from './EmployeePayrollCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmployeePayrollCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeePayrollCard />)
    }).not.toThrow()
  })
})
