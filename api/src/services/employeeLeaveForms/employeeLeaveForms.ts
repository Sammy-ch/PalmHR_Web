import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeLeaveFormRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { kyselyDB } from 'src/lib/kysely'

export const employeeLeaveForms: QueryResolvers['employeeLeaveForms'] =
  async () => {
    return await kyselyDB.selectFrom('EmployeeLeaveForm').selectAll().execute()
  }

export const employeeLeaveForm: QueryResolvers['employeeLeaveForm'] = async ({
  id,
}) => {
  return await kyselyDB
    .selectFrom('EmployeeLeaveForm')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
}

export const createEmployeeLeaveForm: MutationResolvers['createEmployeeLeaveForm'] =
  async ({ input }) => {
    return await kyselyDB
      .insertInto('EmployeeLeaveForm')
      .values(input)
      .returningAll()
      .executeTakeFirst()
  }

export const updateEmployeeLeaveForm: MutationResolvers['updateEmployeeLeaveForm'] =
  async ({ id, input }) => {
    return await kyselyDB
      .updateTable('EmployeeLeaveForm')
      .set(input)
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }

export const deleteEmployeeLeaveForm: MutationResolvers['deleteEmployeeLeaveForm'] =
  async ({ id }) => {
    return await kyselyDB
      .deleteFrom('EmployeeLeaveForm')
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }
export const EmployeeLeaveForm: EmployeeLeaveFormRelationResolvers = {
  leave: (_obj, { root }) => {
    return db.employeeLeaveForm.findUnique({ where: { id: root?.id } }).leave()
  },
}

export const approvedEmployeeLeaveForms: QueryResolvers['approvedEmployeeLeaveForms'] =
  async () => {
    return await kyselyDB
      .selectFrom('EmployeeLeaveForm')
      .selectAll()
      .where('leave_status', '=', 'APPROVED')
      .execute()
  }
