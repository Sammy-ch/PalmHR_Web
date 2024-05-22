import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeProfileRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeeProfiles: QueryResolvers['employeeProfiles'] = () => {
  return db.employeeProfile.findMany()
}

export const employeeProfile: QueryResolvers['employeeProfile'] = ({
  profile_id,
}) => {
  return db.employeeProfile.findUnique({
    where: { profile_id },
  })
}

export const createEmployeeProfile: MutationResolvers['createEmployeeProfile'] =
  ({ input }) => {
    return db.employeeProfile.create({
      data: input,
    })
  }

export const updateEmployeeProfile: MutationResolvers['updateEmployeeProfile'] =
  ({ profile_id, input }) => {
    return db.employeeProfile.update({
      data: input,
      where: { profile_id },
    })
  }

export const deleteEmployeeProfile: MutationResolvers['deleteEmployeeProfile'] =
  ({ profile_id }) => {
    return db.employeeProfile.delete({
      where: { profile_id },
    })
  }

export const EmployeeProfile: EmployeeProfileRelationResolvers = {
  Organization: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .Organization()
  },
  AttendanceData: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .AttendanceData()
  },
  LeaveData: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .LeaveData()
  },
  CheckingRequestsData: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .CheckingRequestsData()
  },
  PayrollData: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .PayrollData()
  },
  AttendanceReport: (_obj, { root }) => {
    return db.employeeProfile
      .findUnique({ where: { profile_id: root?.profile_id } })
      .AttendanceReport()
  },
}
