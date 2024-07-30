import { render } from '@redwoodjs/testing/web'

import PrintButton from './PrintButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrintButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrintButton />)
    }).not.toThrow()
  })
})
