import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const userProfiles: QueryResolvers['userProfiles'] = () => {
  return db.userProfile.findMany()
}

export const userProfile: QueryResolvers['userProfile'] = ({ user_id }) => {
  return db.userProfile.findUnique({
    where: { user_id },
  })
}

export const createUserProfile: MutationResolvers['createUserProfile'] = ({
  input,
}) => {
  return db.userProfile.create({
    data: input,
  })
}

export const updateUserProfile: MutationResolvers['updateUserProfile'] = ({
  user_id,
  input,
}) => {
  return db.userProfile.update({
    data: input,
    where: { user_id },
  })
}

export const deleteUserProfile: MutationResolvers['deleteUserProfile'] = ({
  user_id,
}) => {
  return db.userProfile.delete({
    where: { user_id },
  })
}
