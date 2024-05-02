import type { Prisma, CheckingRequest } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CheckingRequestCreateArgs>({
  checkingRequest: {
    one: {
      data: {
        checking_date: '2024-05-02T14:39:17.739Z',
        checking_time: '2024-05-02T14:39:17.739Z',
        checking_type: 'checkin',
        checking_status: 'approved',
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
        checking_date: '2024-05-02T14:39:17.739Z',
        checking_time: '2024-05-02T14:39:17.739Z',
        checking_type: 'checkin',
        checking_status: 'approved',
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

export type StandardScenario = ScenarioData<CheckingRequest, 'checkingRequest'>
