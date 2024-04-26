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

import EmployeeProfileCard from './EmployeeProfileCard'

const meta: Meta<typeof EmployeeProfileCard> = {
  component: EmployeeProfileCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EmployeeProfileCard>

export const Primary: Story = {}
