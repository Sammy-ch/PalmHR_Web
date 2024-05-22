import { render } from '@redwoodjs/testing/web'

import OrganizationCard from './OrganizationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrganizationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationCard />)
    }).not.toThrow()
  })
})
