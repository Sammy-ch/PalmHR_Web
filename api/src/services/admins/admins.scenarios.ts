import type { Prisma, Admin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminCreateArgs>({
  admin: {
    one: {
      data: { first_name: 'String', last_name: 'String', email: 'String' },
    },
    two: {
      data: { first_name: 'String', last_name: 'String', email: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<Admin, 'admin'>
