import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: {
      data: {
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
        User: {
          create: {
            first_name: 'String',
            email: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
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
        User: {
          create: {
            first_name: 'String',
            email: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
