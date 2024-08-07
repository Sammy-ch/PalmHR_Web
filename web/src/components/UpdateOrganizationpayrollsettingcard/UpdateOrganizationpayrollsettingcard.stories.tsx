// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UpdateOrganizationpayrollsettingcard from './UpdateOrganizationpayrollsettingcard'

const meta: Meta<typeof UpdateOrganizationpayrollsettingcard> = {
  component: UpdateOrganizationpayrollsettingcard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UpdateOrganizationpayrollsettingcard>

export const Primary: Story = {}
