import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizations: QueryResolvers['organizations'] = () => {
  return db.organization.findMany()
}

export const organization: QueryResolvers['organization'] = ({
  OrganizationId,
}) => {
  return db.organization.findUnique({
    where: { OrganizationId },
  })
}

export const createOrganization: MutationResolvers['createOrganization'] = ({
  input,
}) => {
  return db.organization.create({
    data: input,
  })
}

export const updateOrganization: MutationResolvers['updateOrganization'] = ({
  OrganizationId,
  input,
}) => {
  return db.organization.update({
    data: input,
    where: { OrganizationId },
  })
}

export const deleteOrganization: MutationResolvers['deleteOrganization'] = ({
  OrganizationId,
}) => {
  return db.organization.delete({
    where: { OrganizationId },
  })
}

export const Organization: OrganizationRelationResolvers = {
  PayrollData: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .PayrollData()
  },
  Admin: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .Admin()
  },
  EmployeeProfiles: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .EmployeeProfiles()
  },
  OrganizationAttendanceKpi: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .OrganizationAttendanceKpi()
  },
}
