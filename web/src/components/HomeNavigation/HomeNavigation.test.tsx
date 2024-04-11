import { render } from '@redwoodjs/testing/web'

import HomeNavigation from './HomeNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeNavigation />)
    }).not.toThrow()
  })
})
