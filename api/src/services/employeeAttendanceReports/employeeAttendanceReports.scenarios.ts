import type { Prisma, EmployeeAttendanceReport } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.EmployeeAttendanceReportCreateArgs>({
    employeeAttendanceReport: {
      one: {
        data: {
          TotalOvertime: '2024-05-11T12:43:36.053Z',
          TotalWorkhours: '2024-05-11T12:43:36.053Z',
          TotalSickLeaves: '2024-05-11T12:43:36.053Z',
          AbstenteeismRate: 3044093,
          EarlyAttendaceRate: 7288704,
          LateAttedanceRate: 2335373,
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
          TotalOvertime: '2024-05-11T12:43:36.053Z',
          TotalWorkhours: '2024-05-11T12:43:36.053Z',
          TotalSickLeaves: '2024-05-11T12:43:36.053Z',
          AbstenteeismRate: 6719822,
          EarlyAttendaceRate: 3507941,
          LateAttedanceRate: 1792905,
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
  EmployeeAttendanceReport,
  'employeeAttendanceReport'
>
