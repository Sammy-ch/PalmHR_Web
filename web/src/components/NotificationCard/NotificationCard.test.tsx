import { render } from '@redwoodjs/testing/web'

import NotificationCard from './NotificationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationCard />)
    }).not.toThrow()
  })
})
