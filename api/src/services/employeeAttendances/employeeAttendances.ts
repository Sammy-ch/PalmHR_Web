import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeAttendanceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeeAttendances: QueryResolvers['employeeAttendances'] =
  () => {
    return db.employeeAttendance.findMany()
  }

export const employeeAttendance: QueryResolvers['employeeAttendance'] = ({
  attendance_id,
}) => {
  return db.employeeAttendance.findUnique({
    where: { attendance_id },
  })
}

export const employeeAttendancesByOrganization: QueryResolvers['employeeAttendancesByOrganization'] =
  ({ orgId }) => {
    return db.employeeAttendance.findMany({
      where: {
        employee: {
          org_id: orgId,
        },
      },
      include: {
        employee: true,
      },
    })
  }

export const createEmployeeAttendance: MutationResolvers['createEmployeeAttendance'] =
  ({ input }) => {
    return db.employeeAttendance.create({
      data: input,
    })
  }

export const updateEmployeeAttendance: MutationResolvers['updateEmployeeAttendance'] =
  ({ attendance_id, input }) => {
    return db.employeeAttendance.update({
      data: input,
      where: { attendance_id },
    })
  }

export const approveEmployeeCheckout: MutationResolvers['approveEmployeeCheckout'] =
  async ({ attendance_id, checkout_time }) => {
    try {
      const updatedAttendance = await db.employeeAttendance.update({
        where: { attendance_id: attendance_id },
        data: { checkout_time: checkout_time },
      })

      return updatedAttendance
    } catch (error) {
      console.error('Error approving employee checkout:', error)
      throw error
    }
  }

export const deleteEmployeeAttendance: MutationResolvers['deleteEmployeeAttendance'] =
  ({ attendance_id }) => {
    return db.employeeAttendance.delete({
      where: { attendance_id },
    })
  }

export const EmployeeAttendance: EmployeeAttendanceRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.employeeAttendance
      .findUnique({ where: { attendance_id: root?.attendance_id } })
      .employee()
  },
}
