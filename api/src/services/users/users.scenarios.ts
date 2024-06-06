import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        id: 'String',
        first_name: 'String',
        last_name: 'String',
        email: 'String',
      },
    },
    two: {
      data: {
        id: 'String',
        first_name: 'String',
        last_name: 'String',
        email: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
