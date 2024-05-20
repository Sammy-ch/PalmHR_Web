import type { Prisma, EmployeeLeaveForm } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeLeaveFormCreateArgs>({
  employeeLeaveForm: {
    one: {
      data: {
        requested_leave_date: '2024-05-20T13:31:50.933Z',
        leave_type: 'PERSONAL',
        leave_days: 3964571,
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
        requested_leave_date: '2024-05-20T13:31:50.933Z',
        leave_type: 'PERSONAL',
        leave_days: 7744169,
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
