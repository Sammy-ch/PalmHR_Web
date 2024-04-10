import { render } from '@redwoodjs/testing/web'

import AttendanceChartCard from './AttendanceChartCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendanceChartCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendanceChartCard />)
    }).not.toThrow()
  })
})
