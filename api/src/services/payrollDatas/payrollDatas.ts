import type {
  QueryResolvers,
  MutationResolvers,
  PayrollDataRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const payrollDatas: QueryResolvers['payrollDatas'] = () => {
  return db.payrollData.findMany()
}

export const payrollData: QueryResolvers['payrollData'] = ({ id }) => {
  return db.payrollData.findUnique({
    where: { id },
  })
}

export const createPayrollData: MutationResolvers['createPayrollData'] = ({
  input,
}) => {
  return db.payrollData.create({
    data: input,
  })
}

export const updatePayrollData: MutationResolvers['updatePayrollData'] = ({
  id,
  input,
}) => {
  return db.payrollData.update({
    data: input,
    where: { id },
  })
}

export const deletePayrollData: MutationResolvers['deletePayrollData'] = ({
  id,
}) => {
  return db.payrollData.delete({
    where: { id },
  })
}

export const PayrollData: PayrollDataRelationResolvers = {
  organization: (_obj, { root }) => {
    return db.payrollData.findUnique({ where: { id: root?.id } }).organization()
  },
}
