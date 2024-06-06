import type { Organization } from '@prisma/client'

import {
  organizations,
  organization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from './organizations'
import type { StandardScenario } from './organizations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organizations', () => {
  scenario('returns all organizations', async (scenario: StandardScenario) => {
    const result = await organizations()

    expect(result.length).toEqual(Object.keys(scenario.organization).length)
  })

  scenario(
    'returns a single organization',
    async (scenario: StandardScenario) => {
      const result = await organization({
        OrganizationId: scenario.organization.one.OrganizationId,
      })

      expect(result).toEqual(scenario.organization.one)
    }
  )

  scenario('creates a organization', async (scenario: StandardScenario) => {
    const result = await createOrganization({
      input: {
        OrganizationName: 'String',
        Organisation_tag: scenario.organization.two.Organisation_tag,
        Address: 'String',
        Email: 'String',
        Phone: 'String',
      },
    })

    expect(result.OrganizationName).toEqual('String')
    expect(result.Organisation_tag).toEqual(
      scenario.organization.two.Organisation_tag
    )
    expect(result.Address).toEqual('String')
    expect(result.Email).toEqual('String')
    expect(result.Phone).toEqual('String')
  })

  scenario('updates a organization', async (scenario: StandardScenario) => {
    const original = (await organization({
      OrganizationId: scenario.organization.one.OrganizationId,
    })) as Organization
    const result = await updateOrganization({
      OrganizationId: original.OrganizationId,
      input: { OrganizationName: 'String2' },
    })

    expect(result.OrganizationName).toEqual('String2')
  })

  scenario('deletes a organization', async (scenario: StandardScenario) => {
    const original = (await deleteOrganization({
      OrganizationId: scenario.organization.one.OrganizationId,
    })) as Organization
    const result = await organization({
      OrganizationId: original.OrganizationId,
    })

    expect(result).toEqual(null)
  })
})
