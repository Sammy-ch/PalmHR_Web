import { render } from '@redwoodjs/testing/web'

import FeatureSection from './FeatureSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeatureSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeatureSection />)
    }).not.toThrow()
  })
})
