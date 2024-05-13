import { render } from '@redwoodjs/testing/web'

import AttendanceRadialBarChart from './AttendanceRadialBarChart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendanceRadialBarChart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceRadialBarChart />)
    }).not.toThrow()
  })
})
