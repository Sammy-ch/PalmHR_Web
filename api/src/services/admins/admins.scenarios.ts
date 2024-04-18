import type { Prisma, Admin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminCreateArgs>({
  admin: {
    one: {
      data: { email: 'String516367', hashedPassword: 'String', salt: 'String' },
    },
    two: {
      data: {
        email: 'String6466376',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Admin, 'admin'>
