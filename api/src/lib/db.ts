// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'
import { createClient } from '@supabase/supabase-js'

import { handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export const db = new PrismaClient()

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})
