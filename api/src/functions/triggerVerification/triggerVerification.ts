import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'
import { sendVerificationEmail } from 'src/services/organizations/organizations'
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(
    `${event.httpMethod} ${event.path}: sendVerificationEmail function`
  )

  const { organizationId, email } = JSON.parse(event.body)

  try {
    await sendVerificationEmail(organizationId, email)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'Verification email sent successfully',
      }),
    }
  } catch (error) {
    logger.error(error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Failed to send verification email',
      }),
    }
  }
}
