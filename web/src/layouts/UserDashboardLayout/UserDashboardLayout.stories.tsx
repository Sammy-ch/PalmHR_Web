import type { Meta, StoryObj } from '@storybook/react'

import UserDashboardLayout from './UserDashboardLayout'

const meta: Meta<typeof UserDashboardLayout> = {
  component: UserDashboardLayout,
}

export default meta

type Story = StoryObj<typeof UserDashboardLayout>

export const Primary: Story = {}
