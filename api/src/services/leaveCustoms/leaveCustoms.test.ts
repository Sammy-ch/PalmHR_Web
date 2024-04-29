import type { LeaveCustom } from '@prisma/client'

import {
  leaveCustoms,
  leaveCustom,
  createLeaveCustom,
  updateLeaveCustom,
  deleteLeaveCustom,
} from './leaveCustoms'
import type { StandardScenario } from './leaveCustoms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('leaveCustoms', () => {
  scenario('returns all leaveCustoms', async (scenario: StandardScenario) => {
    const result = await leaveCustoms()

    expect(result.length).toEqual(Object.keys(scenario.leaveCustom).length)
  })

  scenario(
    'returns a single leaveCustom',
    async (scenario: StandardScenario) => {
      const result = await leaveCustom({ id: scenario.leaveCustom.one.id })

      expect(result).toEqual(scenario.leaveCustom.one)
    }
  )

  scenario('creates a leaveCustom', async () => {
    const result = await createLeaveCustom({
      input: {
        requested_leave_date: '2024-04-29T13:58:08.531Z',
        leave_type: 'String',
        leave_days: 1642688,
      },
    })

    expect(result.requested_leave_date).toEqual(
      new Date('2024-04-29T13:58:08.531Z')
    )
    expect(result.leave_type).toEqual('String')
    expect(result.leave_days).toEqual(1642688)
  })

  scenario('updates a leaveCustom', async (scenario: StandardScenario) => {
    const original = (await leaveCustom({
      id: scenario.leaveCustom.one.id,
    })) as LeaveCustom
    const result = await updateLeaveCustom({
      id: original.id,
      input: { requested_leave_date: '2024-04-30T13:58:08.531Z' },
    })

    expect(result.requested_leave_date).toEqual(
      new Date('2024-04-30T13:58:08.531Z')
    )
  })

  scenario('deletes a leaveCustom', async (scenario: StandardScenario) => {
    const original = (await deleteLeaveCustom({
      id: scenario.leaveCustom.one.id,
    })) as LeaveCustom
    const result = await leaveCustom({ id: original.id })

    expect(result).toEqual(null)
  })
})
