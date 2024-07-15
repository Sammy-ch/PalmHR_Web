import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeProfileRelationResolvers,
} from 'types/graphql'

import { kyselyDB } from 'src/lib/kysely'

export const employeeProfiles: QueryResolvers['employeeProfiles'] =
  async () => {
    return await kyselyDB.selectFrom('EmployeeProfile').selectAll().execute()
  }

export const employeeProfile: QueryResolvers['employeeProfile'] = async ({
  profile_id,
}) => {
  return await kyselyDB
    .selectFrom('EmployeeProfile')
    .selectAll()
    .where('profile_id', '=', profile_id)
    .executeTakeFirst()
}

export const employeeProfilesByOrg: QueryResolvers['employeeProfilesByOrg'] =
  async ({ org_id }) => {
    return await kyselyDB
      .selectFrom('EmployeeProfile')
      .selectAll()
      .where('org_id', '=', org_id)
      .execute()
  }

export const createEmployeeProfile: MutationResolvers['createEmployeeProfile'] =
  async ({ input }) => {
    return await kyselyDB
      .insertInto('EmployeeProfile')
      .values(input)
      .returningAll()
      .executeTakeFirstOrThrow()
  }

export const updateEmployeeProfile: MutationResolvers['updateEmployeeProfile'] =
  async ({ profile_id, input }) => {
    return await kyselyDB
      .updateTable('EmployeeProfile')
      .set(input)
      .where('profile_id', '=', profile_id)
      .returningAll()
      .executeTakeFirstOrThrow()
  }

export const deleteEmployeeProfile: MutationResolvers['deleteEmployeeProfile'] =
  async ({ profile_id }) => {
    return await kyselyDB
      .deleteFrom('EmployeeProfile')
      .where('profile_id', '=', profile_id)
      .returningAll()
      .executeTakeFirstOrThrow()
  }

export const EmployeeProfile: EmployeeProfileRelationResolvers = {
  Organization: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('Organization')
      .selectAll()
      .innerJoin(
        'EmployeeProfile',
        'Organization.OrganizationId',
        'EmployeeProfile.org_id'
      )
      .where('EmployeeProfile.profile_id', '=', root?.profile_id)
      .executeTakeFirst()
  },
  AttendanceData: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('EmployeeAttendance')
      .selectAll()
      .where('EmployeeAttendance.employee_id', '=', root?.profile_id)
      .execute()
  },
  LeaveData: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('EmployeeLeaveForm')
      .selectAll()
      .where('EmployeeLeaveForm.leave_id', '=', root?.profile_id)
      .execute()
  },
  CheckingRequestsData: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('CheckingRequestQueue')
      .selectAll()
      .where('CheckingRequestQueue.employee_id', '=', root?.profile_id)
      .execute()
  },
  PayrollData: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('EmployeePayRoll')
      .selectAll()
      .where('EmployeePayRoll.id', '=', root?.profile_id)
      .execute()
  },
}
