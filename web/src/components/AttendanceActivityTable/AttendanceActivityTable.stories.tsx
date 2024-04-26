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

import AttendanceActivityTable from './AttendanceActivityTable.1'

const meta: Meta<typeof AttendanceActivityTable> = {
  component: AttendanceActivityTable,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AttendanceActivityTable>

export const Primary: Story = {}
