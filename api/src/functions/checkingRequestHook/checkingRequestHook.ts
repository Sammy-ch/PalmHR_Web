import type { APIGatewayEvent, Context } from 'aws-lambda'
import { Database } from 'types/supabase'

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

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    const payload: webhookPayload = event.body
    console.log(payload.record)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: payload,
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
