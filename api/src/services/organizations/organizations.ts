import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { redis } from 'src/lib/redis'

export const organizations: QueryResolvers['organizations'] = async () => {
  const cachedOrganizations = await redis.get('organizations')

  if (cachedOrganizations) {
    return JSON.parse(cachedOrganizations)
  }

  const organizations = await db.organization.findMany()

  // Cache the organizations in Redis for 5 minutes
  redis.set('organizations', JSON.stringify(organizations))

  return organizations
}

export const organization: QueryResolvers['organization'] = async ({
  OrganizationId,
}) => {
  const cachedOrganization = await redis.get(`organization:${OrganizationId}`)

  if (cachedOrganization) {
    return JSON.parse(cachedOrganization)
  }

  const organization = await db.organization.findUnique({
    where: { OrganizationId },
  })

  // Cache the organization in Redis for 5 minutes
  redis.set(`organization:${OrganizationId}`, JSON.stringify(organization))

  return organization
}

export const createOrganization: MutationResolvers['createOrganization'] =
  async ({ input }) => {
    const newOrganization = await db.organization.create({
      data: input,
    })

    // Invalidate the cache for the 'organizations' key
    redis.del('organizations')

    return newOrganization
  }

export const updateOrganization: MutationResolvers['updateOrganization'] =
  async ({ OrganizationId, input }) => {
    const updatedOrganization = await db.organization.update({
      data: input,
      where: { OrganizationId },
    })

    // Invalidate the cache for the specific organization
    redis.del(`organization:${OrganizationId}`)

    // Invalidate the cache for the 'organizations' key
    redis.del('organizations')

    return updatedOrganization
  }

export const deleteOrganization: MutationResolvers['deleteOrganization'] =
  async ({ OrganizationId }) => {
    const deletedOrganization = await db.organization.delete({
      where: { OrganizationId },
    })

    // Invalidate the cache for the specific organization
    redis.del(`organization:${OrganizationId}`)

    // Invalidate the cache for the 'organizations' key
    redis.del('organizations')

    return deletedOrganization
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
  OrganizationAttendanceKpi: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .OrganizationAttendanceKpi()
  },
}
