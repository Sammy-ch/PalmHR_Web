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
        OrganizationId: scenario.organization.two.OrganizationId,
        OrganizationName: 'String',
        organizationType: 'NonProfit',
        addressStreet: 'String',
        addressCity: 'String',
        addressState: 'String',
        addressCountry: 'String',
        Email: 'String',
        websiteUrl: 'String',
        Phone: 'String',
        organizationSize: 'Small',
        Industry: 'Technology',
      },
    })

    expect(result.OrganizationId).toEqual(
      scenario.organization.two.OrganizationId
    )
    expect(result.OrganizationName).toEqual('String')
    expect(result.organizationType).toEqual('NonProfit')
    expect(result.addressStreet).toEqual('String')
    expect(result.addressCity).toEqual('String')
    expect(result.addressState).toEqual('String')
    expect(result.addressCountry).toEqual('String')
    expect(result.Email).toEqual('String')
    expect(result.websiteUrl).toEqual('String')
    expect(result.Phone).toEqual('String')
    expect(result.organizationSize).toEqual('Small')
    expect(result.Industry).toEqual('Technology')
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
