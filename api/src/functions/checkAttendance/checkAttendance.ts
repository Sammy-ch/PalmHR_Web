import type { APIGatewayEvent, Context } from 'aws-lambda'
import { CreateEmployeeAttendanceInput } from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = async (_event: APIGatewayEvent, _context: Context) => {
  logger.info('checkAttendance function')

  try {
    const currentDate = new Date().toISOString().split('T')[0]
    const employees = await db.employeeAttendance.findMany()

    for (const employee of employees) {
      const checkInRecord = await db.employeeAttendance.findFirst({
        where: {
          employee_id: employee.employee_id,
          checking_date: currentDate,
        },
      })

      if (!checkInRecord) {
        await db.employeeAttendance.create({
          data: {
            employee_id: employee.employee_id,
            attendance_tag: 'ABSENT',
            checking_date: currentDate,
          } as CreateEmployeeAttendanceInput,
        })
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Attendance records updated successfully',
      }),
    }
  } catch (error) {
    logger.error('Error updating attendance records:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
      }),
    }
  }
}
