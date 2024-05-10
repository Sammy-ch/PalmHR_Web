import type {
  QueryResolvers,
  MutationResolvers,
  PayRollRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const payRolls: QueryResolvers['payRolls'] = () => {
  return db.payRoll.findMany()
}

export const payRoll: QueryResolvers['payRoll'] = ({ id }) => {
  return db.payRoll.findUnique({
    where: { id },
  })
}

export const createPayRoll: MutationResolvers['createPayRoll'] = ({
  input,
}) => {
  return db.payRoll.create({
    data: input,
  })
}

export const updatePayRoll: MutationResolvers['updatePayRoll'] = ({
  id,
  input,
}) => {
  return db.payRoll.update({
    data: input,
    where: { id },
  })
}

export const deletePayRoll: MutationResolvers['deletePayRoll'] = ({ id }) => {
  return db.payRoll.delete({
    where: { id },
  })
}

export const PayRoll: PayRollRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.payRoll.findUnique({ where: { id: root?.id } }).employee()
  },
}
