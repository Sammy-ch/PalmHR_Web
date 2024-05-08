import type { CheckingRequest } from '@prisma/client'

import {
  checkingRequests,
  checkingRequest,
  createCheckingRequest,
  updateCheckingRequest,
  deleteCheckingRequest,
} from './checkingRequests'
import type { StandardScenario } from './checkingRequests.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('checkingRequests', () => {
  scenario(
    'returns all checkingRequests',
    async (scenario: StandardScenario) => {
      const result = await checkingRequests()

      expect(result.length).toEqual(
        Object.keys(scenario.checkingRequest).length
      )
    }
  )

  scenario(
    'returns a single checkingRequest',
    async (scenario: StandardScenario) => {
      const result = await checkingRequest({
        id: scenario.checkingRequest.one.id,
      })

      expect(result).toEqual(scenario.checkingRequest.one)
    }
  )

  scenario('creates a checkingRequest', async (scenario: StandardScenario) => {
    const result = await createCheckingRequest({
      input: {
        employee_id: scenario.checkingRequest.two.employee_id,
        checking_date: '2024-05-08T12:25:43.102Z',
        checking_time: '2024-05-08T12:25:43.102Z',
        checking_type: 'checkin',
        checking_status: 'approved',
      },
    })

    expect(result.employee_id).toEqual(scenario.checkingRequest.two.employee_id)
    expect(result.checking_date).toEqual(new Date('2024-05-08T12:25:43.102Z'))
    expect(result.checking_time).toEqual(new Date('2024-05-08T12:25:43.102Z'))
    expect(result.checking_type).toEqual('checkin')
    expect(result.checking_status).toEqual('approved')
  })

  scenario('updates a checkingRequest', async (scenario: StandardScenario) => {
    const original = (await checkingRequest({
      id: scenario.checkingRequest.one.id,
    })) as CheckingRequest
    const result = await updateCheckingRequest({
      id: original.id,
      input: { checking_date: '2024-05-09T12:25:43.102Z' },
    })

    expect(result.checking_date).toEqual(new Date('2024-05-09T12:25:43.102Z'))
  })

  scenario('deletes a checkingRequest', async (scenario: StandardScenario) => {
    const original = (await deleteCheckingRequest({
      id: scenario.checkingRequest.one.id,
    })) as CheckingRequest
    const result = await checkingRequest({ id: original.id })

    expect(result).toEqual(null)
  })
})
