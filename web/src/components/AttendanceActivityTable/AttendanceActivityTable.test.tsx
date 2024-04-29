import { render } from '@redwoodjs/testing/web'

import AttendanceActivityTable from './AttendanceActivityTable.1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendanceActivityTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceActivityTable />)
    }).not.toThrow()
  })
})
