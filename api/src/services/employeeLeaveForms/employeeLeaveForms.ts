import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeLeaveFormRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeeLeaveForms: QueryResolvers['employeeLeaveForms'] = () => {
  return db.employeeLeaveForm.findMany()
}

export const employeeLeaveForm: QueryResolvers['employeeLeaveForm'] = ({
  id,
}) => {
  return db.employeeLeaveForm.findUnique({
    where: { id },
  })
}

export const createEmployeeLeaveForm: MutationResolvers['createEmployeeLeaveForm'] =
  ({ input }) => {
    return db.employeeLeaveForm.create({
      data: input,
    })
  }

export const updateEmployeeLeaveForm: MutationResolvers['updateEmployeeLeaveForm'] =
  ({ id, input }) => {
    return db.employeeLeaveForm.update({
      data: input,
      where: { id },
    })
  }

export const deleteEmployeeLeaveForm: MutationResolvers['deleteEmployeeLeaveForm'] =
  ({ id }) => {
    return db.employeeLeaveForm.delete({
      where: { id },
    })
  }

export const EmployeeLeaveForm: EmployeeLeaveFormRelationResolvers = {
  leave: (_obj, { root }) => {
    return db.employeeLeaveForm.findUnique({ where: { id: root?.id } }).leave()
  },
}
