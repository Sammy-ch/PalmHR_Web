import type { Prisma, EmployeePayRoll } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeePayRollCreateArgs>({
  employeePayRoll: {
    one: {
      data: {
        base_salary: 5168792,
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
        base_salary: 2015363,
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
