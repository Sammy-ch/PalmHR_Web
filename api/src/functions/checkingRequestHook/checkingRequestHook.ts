import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    const body = event.body

    // if (body.table !== 'CheckingRequest') {
    //   return {
    //     statusCode: 400,
    //     body: JSON.stringify({ error: 'Invalid table' }),
    //   }
    // }

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
