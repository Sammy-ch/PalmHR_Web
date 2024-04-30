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
      },
    },
    two: {
      data: {
        profile_id: 'String',
        first_name: 'String',
        last_name: 'String',
        position: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<EmployeeProfile, 'employeeProfile'>
