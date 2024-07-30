import { render } from '@redwoodjs/testing/web'

import PrintableAttendenceTable from './PrintableAttendenceTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrintableAttendenceTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintableAttendenceTable />)
    }).not.toThrow()
  })
})
