import type { PayRoll } from '@prisma/client'

import {
  payRolls,
  payRoll,
  createPayRoll,
  updatePayRoll,
  deletePayRoll,
} from './payRolls'
import type { StandardScenario } from './payRolls.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payRolls', () => {
  scenario('returns all payRolls', async (scenario: StandardScenario) => {
    const result = await payRolls()

    expect(result.length).toEqual(Object.keys(scenario.payRoll).length)
  })

  scenario('returns a single payRoll', async (scenario: StandardScenario) => {
    const result = await payRoll({ id: scenario.payRoll.one.id })

    expect(result).toEqual(scenario.payRoll.one)
  })

  scenario('creates a payRoll', async (scenario: StandardScenario) => {
    const result = await createPayRoll({
      input: {
        id: scenario.payRoll.two.id,
        pay_period_start: '2024-05-10T09:24:41.404Z',
        pay_period_end: '2024-05-10T09:24:41.404Z',
        hours_Worked: '2024-05-10T09:24:41.404Z',
        base_salary: 9355560,
        netpay: 7135653,
      },
    })

    expect(result.id).toEqual(scenario.payRoll.two.id)
    expect(result.pay_period_start).toEqual(
      new Date('2024-05-10T09:24:41.404Z')
    )
    expect(result.pay_period_end).toEqual(new Date('2024-05-10T09:24:41.404Z'))
    expect(result.hours_Worked).toEqual(new Date('2024-05-10T09:24:41.404Z'))
    expect(result.base_salary).toEqual(9355560)
    expect(result.netpay).toEqual(7135653)
  })

  scenario('updates a payRoll', async (scenario: StandardScenario) => {
    const original = (await payRoll({ id: scenario.payRoll.one.id })) as PayRoll
    const result = await updatePayRoll({
      id: original.id,
      input: { pay_period_start: '2024-05-11T09:24:41.404Z' },
    })

    expect(result.pay_period_start).toEqual(
      new Date('2024-05-11T09:24:41.404Z')
    )
  })

  scenario('deletes a payRoll', async (scenario: StandardScenario) => {
    const original = (await deletePayRoll({
      id: scenario.payRoll.one.id,
    })) as PayRoll
    const result = await payRoll({ id: original.id })

    expect(result).toEqual(null)
  })
})
