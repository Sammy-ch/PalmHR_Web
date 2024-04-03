import type { Meta, StoryObj } from '@storybook/react'

import PerformancePage from './PerformancePage'

const meta: Meta<typeof PerformancePage> = {
  component: PerformancePage,
}

export default meta

type Story = StoryObj<typeof PerformancePage>

export const Primary: Story = {}
