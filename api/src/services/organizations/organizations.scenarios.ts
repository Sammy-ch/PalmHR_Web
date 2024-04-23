import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: {
      data: {
        OrganizationName: 'String',
        Address: 'String',
        ContactName: 'String',
        Email: 'String',
        Phone: 'String',
      },
    },
    two: {
      data: {
        OrganizationName: 'String',
        Address: 'String',
        ContactName: 'String',
        Email: 'String',
        Phone: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
