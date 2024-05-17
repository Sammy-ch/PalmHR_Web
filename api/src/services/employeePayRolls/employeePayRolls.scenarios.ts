import type { Prisma, EmployeePayRoll } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeePayRollCreateArgs>({
  employeePayRoll: {
    one: {
      data: {
        pay_period_start: '2024-05-17T14:42:30.253Z',
        pay_period_end: '2024-05-17T14:42:30.253Z',
        base_salary: 6294181,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
          },
        },
        report: {
          create: {
            TotalOvertime: 8994550,
            TotalWorkhours: 9484665,
            TotalSickLeaves: 4043318,
            AbstenteeismRate: 9735469,
            EarlyAttendaceRate: 4304582,
            LateAttedanceRate: 2397829,
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
    },
    two: {
      data: {
        pay_period_start: '2024-05-17T14:42:30.253Z',
        pay_period_end: '2024-05-17T14:42:30.253Z',
        base_salary: 2221972,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
          },
        },
        report: {
          create: {
            TotalOvertime: 1035278,
            TotalWorkhours: 1363814,
            TotalSickLeaves: 8768243,
            AbstenteeismRate: 8595881,
            EarlyAttendaceRate: 7428212,
            LateAttedanceRate: 92612,
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
    },
  },
})

export type StandardScenario = ScenarioData<EmployeePayRoll, 'employeePayRoll'>
