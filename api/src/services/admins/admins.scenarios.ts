import type { Prisma, Admin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminCreateArgs>({
  admin: {
    one: { data: { id: 'String', org_id: 'String', email: 'String' } },
    two: { data: { id: 'String', org_id: 'String', email: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Admin, 'admin'>
