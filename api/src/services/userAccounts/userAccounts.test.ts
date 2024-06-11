import type { UserAccount } from '@prisma/client'

import {
  userAccounts,
  userAccount,
  createUserAccount,
  updateUserAccount,
  deleteUserAccount,
} from './userAccounts'
import type { StandardScenario } from './userAccounts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userAccounts', () => {
  scenario('returns all userAccounts', async (scenario: StandardScenario) => {
    const result = await userAccounts()

    expect(result.length).toEqual(Object.keys(scenario.userAccount).length)
  })

  scenario(
    'returns a single userAccount',
    async (scenario: StandardScenario) => {
      const result = await userAccount({ id: scenario.userAccount.one.id })

      expect(result).toEqual(scenario.userAccount.one)
    }
  )

  scenario('creates a userAccount', async () => {
    const result = await createUserAccount({
      input: { id: 'String', first_name: 'String', email: 'String' },
    })

    expect(result.id).toEqual('String')
    expect(result.first_name).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a userAccount', async (scenario: StandardScenario) => {
    const original = (await userAccount({
      id: scenario.userAccount.one.id,
    })) as UserAccount
    const result = await updateUserAccount({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a userAccount', async (scenario: StandardScenario) => {
    const original = (await deleteUserAccount({
      id: scenario.userAccount.one.id,
    })) as UserAccount
    const result = await userAccount({ id: original.id })

    expect(result).toEqual(null)
  })
})
