import type { PayRollSetting } from '@prisma/client'

import {
  payRollSettings,
  payRollSetting,
  createPayRollSetting,
  updatePayRollSetting,
  deletePayRollSetting,
} from './payRollSettings'
import type { StandardScenario } from './payRollSettings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payRollSettings', () => {
  scenario(
    'returns all payRollSettings',
    async (scenario: StandardScenario) => {
      const result = await payRollSettings()

      expect(result.length).toEqual(Object.keys(scenario.payRollSetting).length)
    }
  )

  scenario(
    'returns a single payRollSetting',
    async (scenario: StandardScenario) => {
      const result = await payRollSetting({
        id: scenario.payRollSetting.one.id,
      })

      expect(result).toEqual(scenario.payRollSetting.one)
    }
  )

  scenario('creates a payRollSetting', async (scenario: StandardScenario) => {
    const result = await createPayRollSetting({
      input: { user_id: scenario.payRollSetting.two.user_id },
    })

    expect(result.user_id).toEqual(scenario.payRollSetting.two.user_id)
  })

  scenario('updates a payRollSetting', async (scenario: StandardScenario) => {
    const original = (await payRollSetting({
      id: scenario.payRollSetting.one.id,
    })) as PayRollSetting
    const result = await updatePayRollSetting({
      id: original.id,
      input: { user_id: scenario.payRollSetting.two.user_id },
    })

    expect(result.user_id).toEqual(scenario.payRollSetting.two.user_id)
  })

  scenario('deletes a payRollSetting', async (scenario: StandardScenario) => {
    const original = (await deletePayRollSetting({
      id: scenario.payRollSetting.one.id,
    })) as PayRollSetting
    const result = await payRollSetting({ id: original.id })

    expect(result).toEqual(null)
  })
})
