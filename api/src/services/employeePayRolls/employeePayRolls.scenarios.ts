import type { Prisma, EmployeePayRoll } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeePayRollCreateArgs>({
  employeePayRoll: {
    one: {
      data: {
        pay_period_start: '2024-08-05T13:43:58.138Z',
        pay_period_end: '2024-08-05T13:43:58.138Z',
        base_salary: 7484043,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
            Organization: {
              create: {
                OrganizationId: 'String',
                OrganizationName: 'String',
                organizationType: 'NonProfit',
                addressStreet: 'String',
                addressCity: 'String',
                addressState: 'String',
                addressCountry: 'String',
                Email: 'String',
                websiteUrl: 'String',
                Phone: 'String',
                organizationSize: 'Small',
                Industry: 'Technology',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        pay_period_start: '2024-08-05T13:43:58.138Z',
        pay_period_end: '2024-08-05T13:43:58.138Z',
        base_salary: 6515845,
        employee: {
          create: {
            profile_id: 'String',
            first_name: 'String',
            last_name: 'String',
            position: 'String',
            Organization: {
              create: {
                OrganizationId: 'String',
                OrganizationName: 'String',
                organizationType: 'NonProfit',
                addressStreet: 'String',
                addressCity: 'String',
                addressState: 'String',
                addressCountry: 'String',
                Email: 'String',
                websiteUrl: 'String',
                Phone: 'String',
                organizationSize: 'Small',
                Industry: 'Technology',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<EmployeePayRoll, 'employeePayRoll'>
