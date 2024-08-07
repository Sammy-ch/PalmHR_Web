import { render } from '@redwoodjs/testing/web'

import UpdateOrganizationpayrollsettingcard from './UpdateOrganizationpayrollsettingcard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateOrganizationpayrollsettingcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateOrganizationpayrollsettingcard />)
    }).not.toThrow()
  })
})
