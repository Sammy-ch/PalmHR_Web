import type { Prisma, Admin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminCreateArgs>({
  admin: {
    one: {
      data: {
        username: 'String',
        email: 'String',
        hashedPassword: 'String',
        salt: 'String',
        Organization: {
          create: {
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
    },
    two: {
      data: {
        username: 'String',
        email: 'String',
        hashedPassword: 'String',
        salt: 'String',
        Organization: {
          create: {
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
    },
  },
})

export type StandardScenario = ScenarioData<Admin, 'admin'>
