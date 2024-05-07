import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  try {
    const payload = event.body

    const checkingRequest = payload

    // Access the fields from the checkingRequest object
    const id = checkingRequest.id
    const employeeId = checkingRequest.employee_id
    const checkingDate = checkingRequest.checking_date
    const checkingTime = checkingRequest.checking_time
    const checkingType = checkingRequest.checking_type
    const checkingStatus = checkingRequest.checking_status

    console.log(
      id,
      employeeId,
      checkingDate,
      checkingTime,
      checkingType,
      checkingStatus
    )
    // Process the checking request data here
    // For example, save it to your database or perform any other necessary actions

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: checkingRequest,
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
