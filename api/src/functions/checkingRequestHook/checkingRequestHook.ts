import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'
import { approveCheckingRequest } from 'src/services/checkingRequests'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: supabaseWebhook function`)

  if (event.httpMethod === 'POST') {
    const payload = JSON.parse(event.body)
    const insertedRow = payload.new

    if (insertedRow) {
      const { id } = insertedRow
      await approveCheckingRequest(id)

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: 'Checking request approved',
        }),
      }
    }
  }

  return {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      error: 'Invalid request',
    }),
  }
}
