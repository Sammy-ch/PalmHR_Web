import type {
  QueryResolvers,
  MutationResolvers,
  UserAccountRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userAccounts: QueryResolvers['userAccounts'] = () => {
  return db.userAccount.findMany()
}

export const userAccount: QueryResolvers['userAccount'] = ({ id }) => {
  return db.userAccount.findUnique({
    where: { id },
  })
}

export const createUserAccount: MutationResolvers['createUserAccount'] = ({
  input,
}) => {
  return db.userAccount.create({
    data: input,
  })
}

export const updateUserAccount: MutationResolvers['updateUserAccount'] = ({
  id,
  input,
}) => {
  return db.userAccount.update({
    data: input,
    where: { id },
  })
}

export const deleteUserAccount: MutationResolvers['deleteUserAccount'] = ({
  id,
}) => {
  return db.userAccount.delete({
    where: { id },
  })
}

export const UserAccount: UserAccountRelationResolvers = {
  organization: (_obj, { root }) => {
    return db.userAccount.findUnique({ where: { id: root?.id } }).organization()
  },
  PayRollSetting: (_obj, { root }) => {
    return db.userAccount
      .findUnique({ where: { id: root?.id } })
      .PayRollSetting()
  },
}
