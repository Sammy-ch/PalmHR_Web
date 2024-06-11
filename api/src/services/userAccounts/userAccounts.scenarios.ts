import type { Prisma, UserAccount } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserAccountCreateArgs>({
  userAccount: {
    one: { data: { id: 'String', first_name: 'String', email: 'String' } },
    two: { data: { id: 'String', first_name: 'String', email: 'String' } },
  },
})

export type StandardScenario = ScenarioData<UserAccount, 'userAccount'>
