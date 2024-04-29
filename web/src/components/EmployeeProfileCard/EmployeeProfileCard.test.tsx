import { render } from '@redwoodjs/testing/web'

import EmployeeProfileCard from './EmployeeProfileCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmployeeProfileCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmployeeProfileCard />)
    }).not.toThrow()
  })
})
