import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'

interface InsertPayload {
  type: 'INSERT'
  table: string
  schema: string
  record: TableRecord<T>
  old_record: null
}
interface TableRecord<T> {
  id: string
  employee_id: string
  checking_date: string
  checking_time: string
  checking_type: 'checkout' | 'checkin'
  checking_status: 'pending' | 'approved' | 'ejected'
  // Add any other properties that are present in the record object
}

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    const body: InsertPayload = event
    console.log(body.record)

    // if (body.table !== 'CheckingRequest') {
    //   return {
    //     statusCode: 400,
    //     body: JSON.stringify({ error: 'Invalid table' }),
    //   }
    // }

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: body,
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
