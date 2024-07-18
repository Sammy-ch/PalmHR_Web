import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { kyselyDB } from 'src/lib/kysely'

export const admins: QueryResolvers['admins'] = async () => {
  return await kyselyDB.selectFrom('Admin').selectAll().execute()
}

export const admin: QueryResolvers['admin'] = async ({ id }) => {
  return await kyselyDB
    .selectFrom('Admin')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
}

export const createAdmin: MutationResolvers['createAdmin'] = async ({
  input,
}) => {
  return await kyselyDB
    .insertInto('Admin')
    .values(input)
    .returningAll()
    .executeTakeFirst()
}

export const updateAdmin: MutationResolvers['updateAdmin'] = async ({
  id,
  input,
}) => {
  return await kyselyDB
    .updateTable('Admin')
    .set(input)
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export const deleteAdmin: MutationResolvers['deleteAdmin'] = async ({ id }) => {
  return await kyselyDB
    .deleteFrom('Admin')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}
