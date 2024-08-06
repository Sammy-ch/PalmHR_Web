import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { kyselyDB } from 'src/lib/kysely'

export const organizationPayrollSettings: QueryResolvers['organizationPayrollSettings'] =
  async () => {
    return await kyselyDB
      .selectFrom('OrganizationPayrollSetting')
      .selectAll()
      .execute()
  }

export const organizationPayrollSetting: QueryResolvers['organizationPayrollSetting'] =
  async ({ id }) => {
    return await kyselyDB
      .selectFrom('OrganizationPayrollSetting')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst()
  }

export const organizationPayrollSettingsByOrgId = async ({ org_id }) => {
  return await kyselyDB
    .selectFrom('OrganizationPayrollSetting')
    .selectAll()
    .where('org_id', '=', org_id)
    .execute()
}

export const createOrganizationPayrollSetting: MutationResolvers['createOrganizationPayrollSetting'] =
  async ({ input }) => {
    return await kyselyDB
      .insertInto('OrganizationPayrollSetting')
      .values(input)
      .returningAll()
      .executeTakeFirst()
  }

export const updateOrganizationPayrollSetting: MutationResolvers['updateOrganizationPayrollSetting'] =
  async ({ id, input }) => {
    return await kyselyDB
      .updateTable('OrganizationPayrollSetting')
      .set(input)
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }

export const deleteOrganizationPayrollSetting: MutationResolvers['deleteOrganizationPayrollSetting'] =
  async ({ id }) => {
    return await kyselyDB
      .deleteFrom('OrganizationPayrollSetting')
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst()
  }

export const OrganizationPayrollSetting = {
  organization: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('Organization')
      .selectAll()
      .where('Organization.OrganizationId', '=', root?.org_id)
      .executeTakeFirst()
  },
}
