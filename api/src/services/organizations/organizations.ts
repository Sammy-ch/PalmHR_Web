import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizations: QueryResolvers['organizations'] = () => {
  return db.organization.findMany()
}

export const organizationByTag: QueryResolvers['organizationByTag'] = ({
  Organisation_tag,
  OrganizationId,
}) => {
  console.log('Querying for Organisation_tag:', Organisation_tag)
  return db.organization.findFirst({
    where: { Organisation_tag, OrganizationId },
  })
}

export const organizationsByTag: QueryResolvers['organizationsByTag'] = async ({
  Organisation_tag,
}) => {
  const organizations = await db.organization.findMany({
    where: { Organisation_tag },
  })
  return organizations || []
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
  User: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .User()
  },
  PayRollSetting: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .PayRollSetting()
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
}
