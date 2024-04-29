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

import AttendanceBarChart from './AttendanceBarChart'

const meta: Meta<typeof AttendanceBarChart> = {
  component: AttendanceBarChart,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AttendanceBarChart>

export const Primary: Story = {}
