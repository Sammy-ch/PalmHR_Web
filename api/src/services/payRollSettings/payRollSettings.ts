import type {
  QueryResolvers,
  MutationResolvers,
  PayRollSettingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const payRollSettings: QueryResolvers['payRollSettings'] = () => {
  return db.payRollSetting.findMany()
}

export const payRollSetting: QueryResolvers['payRollSetting'] = ({ id }) => {
  return db.payRollSetting.findUnique({
    where: { id },
  })
}

export const createPayRollSetting: MutationResolvers['createPayRollSetting'] =
  ({ input }) => {
    return db.payRollSetting.create({
      data: input,
    })
  }

export const updatePayRollSetting: MutationResolvers['updatePayRollSetting'] =
  ({ id, input }) => {
    return db.payRollSetting.update({
      data: input,
      where: { id },
    })
  }

export const deletePayRollSetting: MutationResolvers['deletePayRollSetting'] =
  ({ id }) => {
    return db.payRollSetting.delete({
      where: { id },
    })
  }

export const PayRollSetting: PayRollSettingRelationResolvers = {
  user: (_obj, { root }) => {
    return db.payRollSetting.findUnique({ where: { id: root?.id } }).user()
  },
}
