import type { Prisma, AdminRole } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminRoleCreateArgs>({
  adminRole: {
    one: { data: { role: 'String' } },
    two: { data: { role: 'String' } },
  },
})

export type StandardScenario = ScenarioData<AdminRole, 'adminRole'>
