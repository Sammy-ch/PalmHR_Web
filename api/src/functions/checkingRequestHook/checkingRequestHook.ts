import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    let body = null

    // Parse the event body if it exists
    if (event.body) {
      body = JSON.parse(event.body)
    } else {
      throw new Error('Request body is empty')
    }

    // Access the fields from the body object
    const {
      id,
      employee_id: employeeId,
      checking_date: checkingDate,
      checking_time: checkingTime,
      checking_type: checkingType,
      checking_status: checkingStatus,
    } = body

    // Process the checking request data here
    // For example, save it to your database or perform any other necessary actions
console.log(body)
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
