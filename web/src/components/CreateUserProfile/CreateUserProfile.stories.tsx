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

import CreateUserProfile from './CreateUserProfile'

const meta: Meta<typeof CreateUserProfile> = {
  component: CreateUserProfile,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CreateUserProfile>

export const Primary: Story = {}
