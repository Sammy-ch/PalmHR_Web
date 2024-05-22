import type { Prisma, PayRollSetting } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PayRollSettingCreateArgs>({
  payRollSetting: {
    one: {
      data: {
        organization: {
          create: {
            OrganizationName: 'String',
            Address: 'String',
            Email: 'String',
            Phone: 'String',
            User: {
              create: {
                id: 'String',
                first_name: 'String',
                last_name: 'String',
                email: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        organization: {
          create: {
            OrganizationName: 'String',
            Address: 'String',
            Email: 'String',
            Phone: 'String',
            User: {
              create: {
                id: 'String',
                first_name: 'String',
                last_name: 'String',
                email: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PayRollSetting, 'payRollSetting'>
