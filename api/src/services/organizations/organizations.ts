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
  redis.set('organizations', JSON.stringify(organizations), 'EX', 1800)

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
  redis.set(
    `organization:${OrganizationId}`,
    JSON.stringify(organization),
    'EX',
    1800
  )

  return organization
}

export const createOrganization: MutationResolvers['createOrganization'] =
  async ({ input }) => {
    const newOrganization = await db.organization.create({
      data: input,
    })

    // Invalidate the cache for the organizations list and the new organization
    redis.del('organizations')
    redis.del(`organization:${newOrganization.OrganizationId}`)

    return newOrganization
  }

export const updateOrganization: MutationResolvers['updateOrganization'] =
  async ({ OrganizationId, input }) => {
    const updatedOrganization = await db.organization.update({
      data: input,
      where: { OrganizationId },
    })

    // Invalidate the cache for the updated organization
    redis.del(`organization:${OrganizationId}`)

    return updatedOrganization
  }

export const deleteOrganization: MutationResolvers['deleteOrganization'] =
  async ({ OrganizationId }) => {
    const deletedOrganization = await db.organization.delete({
      where: { OrganizationId },
    })

    // Invalidate the cache for the deleted organization
    redis.del(`organization:${OrganizationId}`)

    return deletedOrganization
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
