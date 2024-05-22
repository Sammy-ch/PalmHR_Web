import type { Prisma, EmployeeProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmployeeProfileCreateArgs>({
  employeeProfile: {
    one: {
      data: {
        profile_id: 'String',
        first_name: 'String',
        last_name: 'String',
        position: 'String',
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
        profile_id: 'String',
        first_name: 'String',
        last_name: 'String',
        position: 'String',
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

export type StandardScenario = ScenarioData<EmployeeProfile, 'employeeProfile'>
