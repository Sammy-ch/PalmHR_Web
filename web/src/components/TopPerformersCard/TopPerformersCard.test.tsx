import { render } from '@redwoodjs/testing/web'

import TopPerformersCard from './TopPerformersCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopPerformersCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopPerformersCard />)
    }).not.toThrow()
  })
})
