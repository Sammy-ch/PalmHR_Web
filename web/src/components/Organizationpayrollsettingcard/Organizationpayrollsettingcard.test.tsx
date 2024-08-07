import { render } from '@redwoodjs/testing/web'

import Organizationpayrollsettingcard from './Organizationpayrollsettingcard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Organizationpayrollsettingcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Organizationpayrollsettingcard />)
    }).not.toThrow()
  })
})
