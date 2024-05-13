import type { Prisma, EmployeeLeaveForm } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeLeaveFormCreateArgs>({
  employeeLeaveForm: {
    one: {
      data: {
        requested_leave_date: '2024-05-11T12:43:17.681Z',
        leave_type: 'PERSONAL',
        leave_days: 9967221,
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
        requested_leave_date: '2024-05-11T12:43:17.681Z',
        leave_type: 'PERSONAL',
        leave_days: 6248414,
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

export type StandardScenario = ScenarioData<
  EmployeeLeaveForm,
  'employeeLeaveForm'
>
