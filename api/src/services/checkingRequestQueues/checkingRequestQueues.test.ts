import type { CheckingRequestQueue } from '@prisma/client'

import {
  checkingRequestQueues,
  checkingRequestQueue,
  createCheckingRequestQueue,
  updateCheckingRequestQueue,
  deleteCheckingRequestQueue,
} from './checkingRequestQueues'
import type { StandardScenario } from './checkingRequestQueues.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('checkingRequestQueues', () => {
  scenario(
    'returns all checkingRequestQueues',
    async (scenario: StandardScenario) => {
      const result = await checkingRequestQueues()

      expect(result.length).toEqual(
        Object.keys(scenario.checkingRequestQueue).length
      )
    }
  )

  scenario(
    'returns a single checkingRequestQueue',
    async (scenario: StandardScenario) => {
      const result = await checkingRequestQueue({
        id: scenario.checkingRequestQueue.one.id,
      })

      expect(result).toEqual(scenario.checkingRequestQueue.one)
    }
  )

  scenario(
    'creates a checkingRequestQueue',
    async (scenario: StandardScenario) => {
      const result = await createCheckingRequestQueue({
        input: {
          employee_id: scenario.checkingRequestQueue.two.employee_id,
          checking_date: '2024-05-11T12:42:29.576Z',
          checking_time: '2024-05-11T12:42:29.576Z',
          checking_type: 'CHECKIN',
          checking_status: 'APPROVED',
        },
      })

      expect(result.employee_id).toEqual(
        scenario.checkingRequestQueue.two.employee_id
      )
      expect(result.checking_date).toEqual(new Date('2024-05-11T12:42:29.576Z'))
      expect(result.checking_time).toEqual(new Date('2024-05-11T12:42:29.576Z'))
      expect(result.checking_type).toEqual('CHECKIN')
      expect(result.checking_status).toEqual('APPROVED')
    }
  )

  scenario(
    'updates a checkingRequestQueue',
    async (scenario: StandardScenario) => {
      const original = (await checkingRequestQueue({
        id: scenario.checkingRequestQueue.one.id,
      })) as CheckingRequestQueue
      const result = await updateCheckingRequestQueue({
        id: original.id,
        input: { checking_date: '2024-05-12T12:42:29.576Z' },
      })

      expect(result.checking_date).toEqual(new Date('2024-05-12T12:42:29.576Z'))
    }
  )

  scenario(
    'deletes a checkingRequestQueue',
    async (scenario: StandardScenario) => {
      const original = (await deleteCheckingRequestQueue({
        id: scenario.checkingRequestQueue.one.id,
      })) as CheckingRequestQueue
      const result = await checkingRequestQueue({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
