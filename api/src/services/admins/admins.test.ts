import type { Admin } from '@prisma/client'

import { admins, admin, createAdmin, updateAdmin, deleteAdmin } from './admins'
import type { StandardScenario } from './admins.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('admins', () => {
  scenario('returns all admins', async (scenario: StandardScenario) => {
    const result = await admins()

    expect(result.length).toEqual(Object.keys(scenario.admin).length)
  })

  scenario('returns a single admin', async (scenario: StandardScenario) => {
    const result = await admin({ id: scenario.admin.one.id })

    expect(result).toEqual(scenario.admin.one)
  })

  scenario('creates a admin', async () => {
    const result = await createAdmin({
      input: {
        email: 'String4166049',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.email).toEqual('String4166049')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a admin', async (scenario: StandardScenario) => {
    const original = (await admin({ id: scenario.admin.one.id })) as Admin
    const result = await updateAdmin({
      id: original.id,
      input: { email: 'String16075032' },
    })

    expect(result.email).toEqual('String16075032')
  })

  scenario('deletes a admin', async (scenario: StandardScenario) => {
    const original = (await deleteAdmin({ id: scenario.admin.one.id })) as Admin
    const result = await admin({ id: original.id })

    expect(result).toEqual(null)
  })
})
