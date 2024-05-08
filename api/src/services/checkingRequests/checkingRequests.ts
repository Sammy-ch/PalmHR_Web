import type {
  QueryResolvers,
  MutationResolvers,
  CheckingRequestRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const checkingRequests: QueryResolvers['checkingRequests'] = () => {
  return db.checkingRequest.findMany()
}

export const checkingRequest: QueryResolvers['checkingRequest'] = ({ id }) => {
  return db.checkingRequest.findUnique({
    where: { id },
  })
}

export const createCheckingRequest: MutationResolvers['createCheckingRequest'] =
  ({ input }) => {
    return db.checkingRequest.create({
      data: input,
    })
  }

export const updateCheckingRequest: MutationResolvers['updateCheckingRequest'] =
  ({ id, input }) => {
    return db.checkingRequest.update({
      data: input,
      where: { id },
    })
  }

export const deleteCheckingRequest: MutationResolvers['deleteCheckingRequest'] =
  ({ id }) => {
    return db.checkingRequest.delete({
      where: { id },
    })
  }

export const CheckingRequest: CheckingRequestRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.checkingRequest.findUnique({ where: { id: root?.id } }).employee()
  },
}
