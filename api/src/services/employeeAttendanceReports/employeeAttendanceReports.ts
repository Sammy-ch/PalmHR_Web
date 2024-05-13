import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeAttendanceReportRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeeAttendanceReports: QueryResolvers['employeeAttendanceReports'] =
  () => {
    return db.employeeAttendanceReport.findMany()
  }

export const employeeAttendanceReport: QueryResolvers['employeeAttendanceReport'] =
  ({ id }) => {
    return db.employeeAttendanceReport.findUnique({
      where: { id },
    })
  }

export const createEmployeeAttendanceReport: MutationResolvers['createEmployeeAttendanceReport'] =
  ({ input }) => {
    return db.employeeAttendanceReport.create({
      data: input,
    })
  }

export const updateEmployeeAttendanceReport: MutationResolvers['updateEmployeeAttendanceReport'] =
  ({ id, input }) => {
    return db.employeeAttendanceReport.update({
      data: input,
      where: { id },
    })
  }

export const deleteEmployeeAttendanceReport: MutationResolvers['deleteEmployeeAttendanceReport'] =
  ({ id }) => {
    return db.employeeAttendanceReport.delete({
      where: { id },
    })
  }

export const EmployeeAttendanceReport: EmployeeAttendanceReportRelationResolvers =
  {
    employee: (_obj, { root }) => {
      return db.employeeAttendanceReport
        .findUnique({ where: { id: root?.id } })
        .employee()
    },
  }
