import type {
  QueryResolvers,
  MutationResolvers,
  AdminRoleRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const adminRoles: QueryResolvers['adminRoles'] = () => {
  return db.adminRole.findMany()
}

export const adminRole: QueryResolvers['adminRole'] = ({ id }) => {
  return db.adminRole.findUnique({
    where: { id },
  })
}

export const createAdminRole: MutationResolvers['createAdminRole'] = ({
  input,
}) => {
  return db.adminRole.create({
    data: input,
  })
}

export const updateAdminRole: MutationResolvers['updateAdminRole'] = ({
  id,
  input,
}) => {
  return db.adminRole.update({
    data: input,
    where: { id },
  })
}

export const deleteAdminRole: MutationResolvers['deleteAdminRole'] = ({
  id,
}) => {
  return db.adminRole.delete({
    where: { id },
  })
}

export const AdminRole: AdminRoleRelationResolvers = {
  admin: (_obj, { root }) => {
    return db.adminRole.findUnique({ where: { id: root?.id } }).admin()
  },
}
