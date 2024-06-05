import type { Prisma, OrganizationAttendanceKpi } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.OrganizationAttendanceKpiCreateArgs>({
    organizationAttendanceKpi: {
      one: {
        data: {
          TotalOvertime: 6017926,
          TotalWorkhours: 3457489,
          TotalSickLeaves: 4611895,
          AbstenteeismRate: 9826406,
          EarlyAttendaceRate: 7060090,
          LateAttedanceRate: 7494960,
          Organization: {
            create: {
              OrganizationName: 'String',
              Address: 'String',
              Email: 'String',
              Phone: 'String',
              User: {
                create: {
                  id: 'String',
                  first_name: 'String',
                  last_name: 'String',
                  email: 'String',
                },
              },
            },
          },
        },
      },
      two: {
        data: {
          TotalOvertime: 3185716,
          TotalWorkhours: 2808873,
          TotalSickLeaves: 710051,
          AbstenteeismRate: 4830451,
          EarlyAttendaceRate: 943968,
          LateAttedanceRate: 7320526,
          Organization: {
            create: {
              OrganizationName: 'String',
              Address: 'String',
              Email: 'String',
              Phone: 'String',
              User: {
                create: {
                  id: 'String',
                  first_name: 'String',
                  last_name: 'String',
                  email: 'String',
                },
              },
            },
          },
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  OrganizationAttendanceKpi,
  'organizationAttendanceKpi'
>
