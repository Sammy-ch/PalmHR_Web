import type { Prisma, LeaveCustom } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LeaveCustomCreateArgs>({
  leaveCustom: {
    one: {
      data: {
        requested_leave_date: '2024-04-29T13:58:08.545Z',
        leave_type: 'String',
        leave_days: 6428411,
        leave: {
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
        requested_leave_date: '2024-04-29T13:58:08.545Z',
        leave_type: 'String',
        leave_days: 3013125,
        leave: {
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

export type StandardScenario = ScenarioData<LeaveCustom, 'leaveCustom'>
