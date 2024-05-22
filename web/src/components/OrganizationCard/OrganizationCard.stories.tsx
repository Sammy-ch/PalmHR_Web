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

import OrganizationCard from './OrganizationCard'

const meta: Meta<typeof OrganizationCard> = {
  component: OrganizationCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof OrganizationCard>

export const Primary: Story = {}
