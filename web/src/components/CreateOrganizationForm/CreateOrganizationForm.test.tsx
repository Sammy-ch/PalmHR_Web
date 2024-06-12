import { render } from '@redwoodjs/testing/web'

import CreateOrganizationForm from './CreateOrganizationForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateOrganizationForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateOrganizationForm />)
    }).not.toThrow()
  })
})
