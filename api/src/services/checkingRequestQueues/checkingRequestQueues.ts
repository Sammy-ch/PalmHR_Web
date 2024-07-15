import type {
  QueryResolvers,
  MutationResolvers,
  CheckingRequestQueueRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { kyselyDB } from 'src/lib/kysely'

const formatDatetime = (dateTime: string | Date): Date => {
  if (typeof dateTime === 'string' && /^\d{2}:\d{2}:\d{2}$/.test(dateTime)) {
    // If the input is a time string (e.g., "08:22:00"), prepend a default date
    dateTime = `1970-01-01T${dateTime}Z`
  }
  const date = new Date(dateTime)
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateTime}`)
  }
  return date
}
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
  async ({ organizationId }) => {
    const queues = await kyselyDB
      .selectFrom('CheckingRequestQueue')
      .innerJoin(
        'EmployeeProfile',
        'CheckingRequestQueue.employee_id',
        'EmployeeProfile.profile_id'
      )
      .selectAll('CheckingRequestQueue')
      .selectAll('EmployeeProfile')
      .where('EmployeeProfile.org_id', '=', organizationId)
      .execute()

    return queues.map((queue) => ({
      ...queue,
      checking_time: formatDatetime(queue.checking_time),
    }))
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
