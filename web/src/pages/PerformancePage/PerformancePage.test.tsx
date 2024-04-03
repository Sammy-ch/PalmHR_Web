import { render } from '@redwoodjs/testing/web'

import PerformancePage from './PerformancePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PerformancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PerformancePage />)
    }).not.toThrow()
  })
})
