import { render } from '@redwoodjs/testing/web'

import Payrolls from './Payrolls'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Payrolls', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Payrolls />)
    }).not.toThrow()
  })
})
