import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: {
      data: {
        OrganizationId: 'String',
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
    },
    two: {
      data: {
        OrganizationId: 'String',
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
    },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
