import type { Prisma, PayRoll } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PayRollCreateArgs>({
  payRoll: {
    one: {
      data: {
        pay_period_start: '2024-05-10T09:24:41.416Z',
        pay_period_end: '2024-05-10T09:24:41.416Z',
        hours_Worked: '2024-05-10T09:24:41.416Z',
        base_salary: 9475347,
        netpay: 3016963,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
          },
        },
      },
    },
    two: {
      data: {
        pay_period_start: '2024-05-10T09:24:41.416Z',
        pay_period_end: '2024-05-10T09:24:41.416Z',
        hours_Worked: '2024-05-10T09:24:41.416Z',
        base_salary: 6846844,
        netpay: 8977051,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PayRoll, 'payRoll'>
