import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        user_id: 'String',
        first_name: 'String',
        last_name: 'String',
        email: 'String',
        password: 'String',
      },
    },
    two: {
      data: {
        user_id: 'String',
        first_name: 'String',
        last_name: 'String',
        email: 'String',
        password: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
