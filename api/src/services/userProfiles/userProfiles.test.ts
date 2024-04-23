import type { UserProfile } from '@prisma/client'

import {
  userProfiles,
  userProfile,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from './userProfiles'
import type { StandardScenario } from './userProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userProfiles', () => {
  scenario('returns all userProfiles', async (scenario: StandardScenario) => {
    const result = await userProfiles()

    expect(result.length).toEqual(Object.keys(scenario.userProfile).length)
  })

  scenario(
    'returns a single userProfile',
    async (scenario: StandardScenario) => {
      const result = await userProfile({
        user_id: scenario.userProfile.one.user_id,
      })

      expect(result).toEqual(scenario.userProfile.one)
    }
  )

  scenario('creates a userProfile', async () => {
    const result = await createUserProfile({
      input: {
        user_id: 'String',
        first_name: 'String',
        last_name: 'String',
        email: 'String',
        password: 'String',
      },
    })

    expect(result.user_id).toEqual('String')
    expect(result.first_name).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.password).toEqual('String')
  })

  scenario('updates a userProfile', async (scenario: StandardScenario) => {
    const original = (await userProfile({
      user_id: scenario.userProfile.one.user_id,
    })) as UserProfile
    const result = await updateUserProfile({
      user_id: original.user_id,
      input: { user_id: 'String2' },
    })

    expect(result.user_id).toEqual('String2')
  })

  scenario('deletes a userProfile', async (scenario: StandardScenario) => {
    const original = (await deleteUserProfile({
      user_id: scenario.userProfile.one.user_id,
    })) as UserProfile
    const result = await userProfile({ user_id: original.user_id })

    expect(result).toEqual(null)
  })
})
