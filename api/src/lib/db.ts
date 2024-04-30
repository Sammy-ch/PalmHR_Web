// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { createClient } from '@supabase/supabase-js'

import { handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

/*
 * Instance of the Prisma Client
 */

// const libsql = createClient({
//   url: `${process.env.TURSO_DATABASE_URL}`,
//   authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// })

// const adapter = new PrismaLibSQL(libsql)
export const db = supabase

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})
