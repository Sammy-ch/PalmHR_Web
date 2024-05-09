import type { APIGatewayEvent, Context } from 'aws-lambda'
import { Database } from 'types/supabase'

import { parseFetchEventBody, parseLambdaEventBody } from '@redwoodjs/api'

import { logger } from 'src/lib/logger'

type CheckingRequestRecord =
  Database['public']['Tables']['CheckingRequest']['Row']

interface webhookPayload {
  type: 'INSERT' | 'UPDATE'
  table: string
  record: CheckingRequestRecord
  schema: 'public'
  old_record: null | CheckingRequestRecord
}

export const handler = async (event, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    const payload: any = event.body

    if (payload) {
      console.log(payload[0].record.checking_date)
    } else {
      console.log('Error logging Payload')
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'Payload received',
      }),
    }
  } catch (error) {
    logger.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
