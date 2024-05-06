import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: checkingRequestHook function`)

  const payload = JSON.parse(event.body)
  // Handle the webhook event based on the event type
  switch (payload.event) {
    case 'INSERT':
      // Handle INSERT event
      // Example: Insert the new record into your database
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

  // Print the user ID using console.log
  console.log(event)
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
