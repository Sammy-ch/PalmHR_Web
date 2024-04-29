import { render } from '@redwoodjs/testing/web'

import AttendanceLineChart from './AttendanceLineChart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendanceLineChart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceLineChart />)
    }).not.toThrow()
  })
})
