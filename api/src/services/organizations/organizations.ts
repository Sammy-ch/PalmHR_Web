import { Resend } from 'resend'
import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

const resend = new Resend(process.env.RESEND_API_KEY)

export const organizations: QueryResolvers['organizations'] = () => {
  return db.organization.findMany()
}

export const sendVerificationEmail = async (
  organizationId: string,
  email: string
) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verifyOrganization?id=${organizationId}`

  const emailContent = `
    <p>Please verify your organization by clicking the link below:</p>
    <a href="${verificationLink}">Verify Organization</a>
  `
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: 'Organization Verification',
    html: emailContent,
  })
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
  OrganizationAttendanceKpi: (_obj, { root }) => {
    return db.organization
      .findUnique({ where: { OrganizationId: root?.OrganizationId } })
      .OrganizationAttendanceKpi()
  },
}
