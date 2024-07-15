import type {
  QueryResolvers,
  MutationResolvers,
  EmployeePayRollRelationResolvers,
} from 'types/graphql'

import { kyselyDB } from 'src/lib/kysely'

export const employeePayRolls: QueryResolvers['employeePayRolls'] =
  async () => {
    return await kyselyDB.selectFrom('EmployeePayRoll').selectAll().execute()
  }

export const employeePayRoll: QueryResolvers['employeePayRoll'] = async ({
  id,
}) => {
  return await kyselyDB
    .selectFrom('EmployeePayRoll')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
}

export const createEmployeePayRoll: MutationResolvers['createEmployeePayRoll'] =
  async ({ input }) => {
    return await kyselyDB
      .insertInto('EmployeePayRoll')
      .values(input)
      .returningAll()
      .executeTakeFirst()
  }

export const updateEmployeePayRoll: MutationResolvers['updateEmployeePayRoll'] =
  async ({ id, input }) => {
    return await kyselyDB
      .updateTable('EmployeePayRoll')
      .set(input)
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }

export const deleteEmployeePayRoll: MutationResolvers['deleteEmployeePayRoll'] =
  async ({ id }) => {
    return await kyselyDB
      .deleteFrom('EmployeePayRoll')
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }

export const EmployeePayRoll: EmployeePayRollRelationResolvers = {
  employee: async (_obj, { root }) => {
    if (!root?.id) return null
    return await kyselyDB
      .selectFrom('EmployeeProfile')
      .selectAll()
      .innerJoin(
        'EmployeePayRoll',
        'EmployeeProfile.profile_id',
        'EmployeePayRoll.id'
      )
      .where('EmployeePayRoll.id', '=', root.id)
      .executeTakeFirst()
  },
}
