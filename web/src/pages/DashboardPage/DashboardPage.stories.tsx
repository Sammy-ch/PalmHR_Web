import type { Meta, StoryObj } from '@storybook/react'

import DashboardPage from './DashboardPage.1'

const meta: Meta<typeof DashboardPage> = {
  component: DashboardPage,
}

export default meta

type Story = StoryObj<typeof DashboardPage>

export const Primary: Story = {}
