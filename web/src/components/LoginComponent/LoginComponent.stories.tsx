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

import LoginComponent from './LoginComponent'

const meta: Meta<typeof LoginComponent> = {
  component: LoginComponent,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LoginComponent>

export const Primary: Story = {}
