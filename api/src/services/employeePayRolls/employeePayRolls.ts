import type {
  QueryResolvers,
  MutationResolvers,
  EmployeePayRollRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeePayRolls: QueryResolvers['employeePayRolls'] = () => {
  return db.employeePayRoll.findMany()
}

export const employeePayRoll: QueryResolvers['employeePayRoll'] = ({ id }) => {
  return db.employeePayRoll.findUnique({
    where: { id },
  })
}

export const createEmployeePayRoll: MutationResolvers['createEmployeePayRoll'] =
  ({ input }) => {
    return db.employeePayRoll.create({
      data: input,
    })
  }

export const updateEmployeePayRoll: MutationResolvers['updateEmployeePayRoll'] =
  ({ id, input }) => {
    return db.employeePayRoll.update({
      data: input,
      where: { id },
    })
  }

export const deleteEmployeePayRoll: MutationResolvers['deleteEmployeePayRoll'] =
  ({ id }) => {
    return db.employeePayRoll.delete({
      where: { id },
    })
  }

export const EmployeePayRoll: EmployeePayRollRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.employeePayRoll.findUnique({ where: { id: root?.id } }).employee()
  },
}
