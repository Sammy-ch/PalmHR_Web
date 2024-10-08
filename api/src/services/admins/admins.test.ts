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

  scenario('creates a admin', async (scenario: StandardScenario) => {
    const result = await createAdmin({
      input: {
        org_id: scenario.admin.two.org_id,
        username: 'String',
        email: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.org_id).toEqual(scenario.admin.two.org_id)
    expect(result.username).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a admin', async (scenario: StandardScenario) => {
    const original = (await admin({ id: scenario.admin.one.id })) as Admin
    const result = await updateAdmin({
      id: original.id,
      input: { username: 'String2' },
    })

    expect(result.username).toEqual('String2')
  })

  scenario('deletes a admin', async (scenario: StandardScenario) => {
    const original = (await deleteAdmin({ id: scenario.admin.one.id })) as Admin
    const result = await admin({ id: original.id })

    expect(result).toEqual(null)
  })
})
