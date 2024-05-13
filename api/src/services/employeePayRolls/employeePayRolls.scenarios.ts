import type { Prisma, EmployeePayRoll } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeePayRollCreateArgs>({
  employeePayRoll: {
    one: {
      data: {
        pay_period_start: '2024-05-11T12:42:50.070Z',
        pay_period_end: '2024-05-11T12:42:50.070Z',
        hours_Worked: '2024-05-11T12:42:50.070Z',
        base_salary: 5965335,
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
        pay_period_start: '2024-05-11T12:42:50.070Z',
        pay_period_end: '2024-05-11T12:42:50.070Z',
        hours_Worked: '2024-05-11T12:42:50.070Z',
        base_salary: 507078,
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

export type StandardScenario = ScenarioData<EmployeePayRoll, 'employeePayRoll'>
