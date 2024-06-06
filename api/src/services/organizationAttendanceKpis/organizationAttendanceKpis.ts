import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationAttendanceKpiRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizationAttendanceKpis: QueryResolvers['organizationAttendanceKpis'] =
  () => {
    return db.organizationAttendanceKpi.findMany()
  }

export const organizationAttendanceKpi: QueryResolvers['organizationAttendanceKpi'] =
  ({ id }) => {
    return db.organizationAttendanceKpi.findUnique({
      where: { id },
    })
  }

export const createOrganizationAttendanceKpi: MutationResolvers['createOrganizationAttendanceKpi'] =
  ({ input }) => {
    return db.organizationAttendanceKpi.create({
      data: input,
    })
  }

export const updateOrganizationAttendanceKpi: MutationResolvers['updateOrganizationAttendanceKpi'] =
  ({ id, input }) => {
    return db.organizationAttendanceKpi.update({
      data: input,
      where: { id },
    })
  }

export const deleteOrganizationAttendanceKpi: MutationResolvers['deleteOrganizationAttendanceKpi'] =
  ({ id }) => {
    return db.organizationAttendanceKpi.delete({
      where: { id },
    })
  }

export const OrganizationAttendanceKpi: OrganizationAttendanceKpiRelationResolvers =
  {
    Organization: (_obj, { root }) => {
      return db.organizationAttendanceKpi
        .findUnique({ where: { id: root?.id } })
        .Organization()
    },
  }
