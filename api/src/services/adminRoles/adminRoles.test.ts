import type { AdminRole } from '@prisma/client'

import {
  adminRoles,
  adminRole,
  createAdminRole,
  updateAdminRole,
  deleteAdminRole,
} from './adminRoles'
import type { StandardScenario } from './adminRoles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('adminRoles', () => {
  scenario('returns all adminRoles', async (scenario: StandardScenario) => {
    const result = await adminRoles()

    expect(result.length).toEqual(Object.keys(scenario.adminRole).length)
  })

  scenario('returns a single adminRole', async (scenario: StandardScenario) => {
    const result = await adminRole({ id: scenario.adminRole.one.id })

    expect(result).toEqual(scenario.adminRole.one)
  })

  scenario('creates a adminRole', async () => {
    const result = await createAdminRole({
      input: { role: 'String' },
    })

    expect(result.role).toEqual('String')
  })

  scenario('updates a adminRole', async (scenario: StandardScenario) => {
    const original = (await adminRole({
      id: scenario.adminRole.one.id,
    })) as AdminRole
    const result = await updateAdminRole({
      id: original.id,
      input: { role: 'String2' },
    })

    expect(result.role).toEqual('String2')
  })

  scenario('deletes a adminRole', async (scenario: StandardScenario) => {
    const original = (await deleteAdminRole({
      id: scenario.adminRole.one.id,
    })) as AdminRole
    const result = await adminRole({ id: original.id })

    expect(result).toEqual(null)
  })
})
