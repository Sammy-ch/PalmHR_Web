import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

import { DB } from 'src/db/types'

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DIRECT_URL,
    }),
  }),
})

export { db }
