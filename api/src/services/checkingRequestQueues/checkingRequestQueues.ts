import type {
  QueryResolvers,
  MutationResolvers,
  CheckingRequestQueueRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const checkingRequestQueues: QueryResolvers['checkingRequestQueues'] =
  () => {
    return db.checkingRequestQueue.findMany()
  }

export const checkingRequestQueue: QueryResolvers['checkingRequestQueue'] = ({
  id,
}) => {
  return db.checkingRequestQueue.findUnique({
    where: { id },
  })
}

export const checkingRequestQueuesByOrganization: QueryResolvers['checkingRequestQueuesByOrganization'] =
  ({ organizationId }) => {
    return db.checkingRequestQueue.findMany({
      where: {
        employee: {
          org_id: organizationId,
        },
      },
      include: {
        employee: true,
      },
    })
  }

export const createCheckingRequestQueue: MutationResolvers['createCheckingRequestQueue'] =
  ({ input }) => {
    return db.checkingRequestQueue.create({
      data: input,
    })
  }

export const updateCheckingRequestQueue: MutationResolvers['updateCheckingRequestQueue'] =
  ({ id, input }) => {
    return db.checkingRequestQueue.update({
      data: input,
      where: { id },
    })
  }

export const deleteCheckingRequestQueue: MutationResolvers['deleteCheckingRequestQueue'] =
  ({ id }) => {
    return db.checkingRequestQueue.delete({
      where: { id },
    })
  }

export const CheckingRequestQueue: CheckingRequestQueueRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.checkingRequestQueue
      .findUnique({ where: { id: root?.id } })
      .employee()
  },
}
