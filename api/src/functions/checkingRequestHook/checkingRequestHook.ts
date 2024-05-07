import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`Supabase webhook received: ${event.httpMethod} ${event.path}`)

  // Parse the Supabase webhook payload
  const payload = JSON.parse(event.body)

  // Handle the webhook event based on the event type
  switch (payload.event) {
    case 'INSERT':
      // Handle INSERT event
      // Example: Insert the new record into your database
      logger.info('INSERT event received')
      break
    case 'UPDATE':
      // Handle UPDATE event
      // Example: Update the existing record in your database
      break
    case 'DELETE':
      // Handle DELETE event
      // Example: Delete the record from your database
      break
    default:
      // Handle unknown event type
      break
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'Supabase webhook processed',
    }),
  }
}
