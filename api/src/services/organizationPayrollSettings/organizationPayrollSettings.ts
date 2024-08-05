import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationPayrollSettingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizationPayrollSettings: QueryResolvers['organizationPayrollSettings'] =
  () => {
    return db.organizationPayrollSetting.findMany()
  }

export const organizationPayrollSetting: QueryResolvers['organizationPayrollSetting'] =
  ({ id }) => {
    return db.organizationPayrollSetting.findUnique({
      where: { id },
    })
  }

export const createOrganizationPayrollSetting: MutationResolvers['createOrganizationPayrollSetting'] =
  ({ input }) => {
    return db.organizationPayrollSetting.create({
      data: input,
    })
  }

export const updateOrganizationPayrollSetting: MutationResolvers['updateOrganizationPayrollSetting'] =
  ({ id, input }) => {
    return db.organizationPayrollSetting.update({
      data: input,
      where: { id },
    })
  }

export const deleteOrganizationPayrollSetting: MutationResolvers['deleteOrganizationPayrollSetting'] =
  ({ id }) => {
    return db.organizationPayrollSetting.delete({
      where: { id },
    })
  }

export const OrganizationPayrollSetting: OrganizationPayrollSettingRelationResolvers =
  {
    organization: (_obj, { root }) => {
      return db.organizationPayrollSetting
        .findUnique({ where: { id: root?.id } })
        .organization()
    },
  }
