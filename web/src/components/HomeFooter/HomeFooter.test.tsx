import { render } from '@redwoodjs/testing/web'

import HomeFooter from './HomeFooter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeFooter />)
    }).not.toThrow()
  })
})
