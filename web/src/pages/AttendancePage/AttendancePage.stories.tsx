import type { Meta, StoryObj } from '@storybook/react'

import AttendancePage from './AttendancePage'

const meta: Meta<typeof AttendancePage> = {
  component: AttendancePage,
}

export default meta

type Story = StoryObj<typeof AttendancePage>

export const Primary: Story = {}
