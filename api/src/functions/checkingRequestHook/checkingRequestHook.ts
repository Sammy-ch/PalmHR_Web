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
    let payload: webhookPayload
    const data = event.body

    if (data) {
      payload = JSON.parse(data)
    } else {
      throw Error('Payload is undefined')
    }

    console.log(payload.record.checking_date)

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
