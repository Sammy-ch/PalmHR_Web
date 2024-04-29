import { render } from '@redwoodjs/testing/web'

import AttendanceBarChart from './AttendanceBarChart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendanceBarChart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceBarChart />)
    }).not.toThrow()
  })
})
