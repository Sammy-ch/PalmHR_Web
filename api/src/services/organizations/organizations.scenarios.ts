import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: {
      data: {
        OrganizationName: 'String',
        Address: 'String',
        Email: 'String',
        Phone: 'String',
        User: {
          create: { id: 'String', first_name: 'String', email: 'String' },
        },
      },
    },
    two: {
      data: {
        OrganizationName: 'String',
        Address: 'String',
        Email: 'String',
        Phone: 'String',
        User: {
          create: { id: 'String', first_name: 'String', email: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
