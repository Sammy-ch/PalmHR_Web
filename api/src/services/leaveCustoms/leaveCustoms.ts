import type {
  QueryResolvers,
  MutationResolvers,
  LeaveCustomRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const leaveCustoms: QueryResolvers['leaveCustoms'] = () => {
  return db.leaveCustom.findMany()
}

export const leaveCustom: QueryResolvers['leaveCustom'] = ({ id }) => {
  return db.leaveCustom.findUnique({
    where: { id },
  })
}

export const createLeaveCustom: MutationResolvers['createLeaveCustom'] = ({
  input,
}) => {
  return db.leaveCustom.create({
    data: input,
  })
}

export const updateLeaveCustom: MutationResolvers['updateLeaveCustom'] = ({
  id,
  input,
}) => {
  return db.leaveCustom.update({
    data: input,
    where: { id },
  })
}

export const deleteLeaveCustom: MutationResolvers['deleteLeaveCustom'] = ({
  id,
}) => {
  return db.leaveCustom.delete({
    where: { id },
  })
}

export const LeaveCustom: LeaveCustomRelationResolvers = {
  leave: (_obj, { root }) => {
    return db.leaveCustom.findUnique({ where: { id: root?.id } }).leave()
  },
}
