import type { Prisma, CheckingRequestQueue } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CheckingRequestQueueCreateArgs>({
  checkingRequestQueue: {
    one: {
      data: {
        checking_date: '2024-05-11T12:42:29.586Z',
        checking_time: '2024-05-11T12:42:29.586Z',
        checking_type: 'CHECKIN',
        checking_status: 'APPROVED',
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
        checking_date: '2024-05-11T12:42:29.586Z',
        checking_time: '2024-05-11T12:42:29.586Z',
        checking_type: 'CHECKIN',
        checking_status: 'APPROVED',
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

export type StandardScenario = ScenarioData<
  CheckingRequestQueue,
  'checkingRequestQueue'
>
