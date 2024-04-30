import type { Prisma, EmployeeAttendance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeAttendanceCreateArgs>({
  employeeAttendance: {
    one: {
      data: {
        presence_tag: 'PRESENT',
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
        presence_tag: 'PRESENT',
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
  EmployeeAttendance,
  'employeeAttendance'
>
