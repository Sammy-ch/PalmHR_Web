import type { EmployeeProfile } from '@prisma/client'

import {
  employeeProfiles,
  employeeProfile,
  createEmployeeProfile,
  updateEmployeeProfile,
  deleteEmployeeProfile,
} from './employeeProfiles'
import type { StandardScenario } from './employeeProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employeeProfiles', () => {
  scenario(
    'returns all employeeProfiles',
    async (scenario: StandardScenario) => {
      const result = await employeeProfiles()

      expect(result.length).toEqual(
        Object.keys(scenario.employeeProfile).length
      )
    }
  )

  scenario(
    'returns a single employeeProfile',
    async (scenario: StandardScenario) => {
      const result = await employeeProfile({
        profile_id: scenario.employeeProfile.one.profile_id,
      })

      expect(result).toEqual(scenario.employeeProfile.one)
    }
  )

  scenario('creates a employeeProfile', async (scenario: StandardScenario) => {
    const result = await createEmployeeProfile({
      input: {
        profile_id: 'String',
        org_id: scenario.employeeProfile.two.org_id,
        first_name: 'String',
        last_name: 'String',
        position: 'String',
      },
    })

    expect(result.profile_id).toEqual('String')
    expect(result.org_id).toEqual(scenario.employeeProfile.two.org_id)
    expect(result.first_name).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.position).toEqual('String')
  })

  scenario('updates a employeeProfile', async (scenario: StandardScenario) => {
    const original = (await employeeProfile({
      profile_id: scenario.employeeProfile.one.profile_id,
    })) as EmployeeProfile
    const result = await updateEmployeeProfile({
      profile_id: original.profile_id,
      input: { profile_id: 'String2' },
    })

    expect(result.profile_id).toEqual('String2')
  })

  scenario('deletes a employeeProfile', async (scenario: StandardScenario) => {
    const original = (await deleteEmployeeProfile({
      profile_id: scenario.employeeProfile.one.profile_id,
    })) as EmployeeProfile
    const result = await employeeProfile({ profile_id: original.profile_id })

    expect(result).toEqual(null)
  })
})
