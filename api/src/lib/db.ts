// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

import { handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
export const db = new PrismaClient({ adapter })

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})
