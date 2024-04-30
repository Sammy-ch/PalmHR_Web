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
