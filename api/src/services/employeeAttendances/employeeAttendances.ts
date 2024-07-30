import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeAttendanceRelationResolvers,
} from 'types/graphql'

import { kyselyDB } from 'src/lib/kysely'

const formatDatetime = (dateTime: string | Date): Date => {
  if (typeof dateTime === 'string' && /^\d{2}:\d{2}:\d{2}$/.test(dateTime)) {
    // If the input is a time string (e.g., "08:22:00"), prepend a default date
    dateTime = `1970-01-01T${dateTime}Z`
  }
  const date = new Date(dateTime)
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateTime}`)
  }
  return date
}

export const employeeAttendances: QueryResolvers['employeeAttendances'] =
  async () => {
    const attendances = await kyselyDB
      .selectFrom('EmployeeAttendance')
      .selectAll()
      .execute()
    return attendances.map((attendance) => ({
      ...attendance,
      checkin_time: formatDatetime(attendance.checkin_time),
      checkout_time: formatDatetime(attendance.checkout_time),
    }))
  }

export const employeeAttendance: QueryResolvers['employeeAttendance'] = async ({
  attendance_id,
}) => {
  const attendance = await kyselyDB
    .selectFrom('EmployeeAttendance')
    .selectAll()
    .where('attendance_id', '=', attendance_id)
    .executeTakeFirst()
  return {
    ...attendance,
    checkin_time: formatDatetime(attendance.checkin_time),
    checkout_time: formatDatetime(attendance.checkout_time),
  }
}

export const employeeAttendancesByOrganization: QueryResolvers['employeeAttendancesByOrganization'] =
  async ({ orgId }) => {
    const attendances = await kyselyDB
      .selectFrom('EmployeeAttendance')
      .innerJoin(
        'EmployeeProfile',
        'EmployeeAttendance.employee_id',
        'EmployeeProfile.profile_id'
      )
      .selectAll()
      .where('EmployeeProfile.org_id', '=', orgId)
      .execute()
    return attendances.map((attendance) => ({
      ...attendance,
      checkin_time: formatDatetime(attendance.checkin_time),
      checkout_time: formatDatetime(attendance.checkout_time),
    }))
  }

export const createEmployeeAttendance: MutationResolvers['createEmployeeAttendance'] =
  async ({ input }) => {
    console.log(
      'Trying to create EmployeeAttendance with time fr : ',
      input.checkin_time.toLocaleTimeString('fr-FR')
    )
    input.checkin_time = input.checkin_time.toLocaleTimeString('fr-FR')
    return await kyselyDB
      .insertInto('EmployeeAttendance')
      .values(input)
      .returningAll()
      .executeTakeFirst()
  }

export const updateEmployeeAttendance: MutationResolvers['updateEmployeeAttendance'] =
  async ({ attendance_id, input }) => {
    const attendance = await kyselyDB
      .updateTable('EmployeeAttendance')
      .set(input)
      .where('attendance_id', '=', attendance_id)
      .returningAll()
      .executeTakeFirst()
    return {
      ...attendance,
      checkin_time: formatDatetime(attendance.checkin_time),
      checkout_time: formatDatetime(attendance.checkout_time),
    }
  }

export const approveEmployeeCheckout: MutationResolvers['approveEmployeeCheckout'] =
  async ({ attendance_id, checkout_time }) => {
    try {
      const updatedAttendance = await kyselyDB
        .updateTable('EmployeeAttendance')
        .set({ checkout_time: formatDatetime(checkout_time) })
        .where('attendance_id', '=', attendance_id)
        .returningAll()
        .executeTakeFirst()

      return updatedAttendance
    } catch (error) {
      console.error('Error approving employee checkout:', error)
      throw error
    }
  }

export const deleteEmployeeAttendance: MutationResolvers['deleteEmployeeAttendance'] =
  async ({ attendance_id }) => {
    const attendance = await kyselyDB
      .deleteFrom('EmployeeAttendance')
      .where('attendance_id', '=', attendance_id)
      .returningAll()
      .executeTakeFirst()
    return {
      ...attendance,
      checkin_time: formatDatetime(attendance.checkin_time),
      checkout_time: formatDatetime(attendance.checkout_time),
    }
  }

export const EmployeeAttendance: EmployeeAttendanceRelationResolvers = {
  employee: async (_obj, { root }) => {
    return await kyselyDB
      .selectFrom('EmployeeProfile')
      .selectAll()
      .where('profile_id', '=', root?.employee_id)
      .executeTakeFirst()
  },
}

export const getOrganizationAttendanceKPI = async () => {
  const employees = await kyselyDB
    .selectFrom('EmployeeProfile')
    .innerJoin(
      'EmployeeAttendance',
      'EmployeeProfile.profile_id',
      'EmployeeAttendance.employee_id'
    )
    .selectAll()
    .execute()

  let totalOnTime = 0
  let totalAbsent = 0
  let totalWorkingHours = 0
  let totalLate = 0
  let totalAttendances = 0

  employees.forEach((employee) => {
    // Assuming each employee object contains attendance data directly
    const attendances = employee // This should be the correct property containing attendance data
    totalAttendances += 1 // Increment for each attendance record

    const checkInTime = new Date(attendances.checkin_time)
    const checkOutTime = new Date(attendances.checkout_time)

    // On-time if check-in before 9:00 AM
    if (
      checkInTime.getHours() < 9 ||
      (checkInTime.getHours() === 9 && checkInTime.getMinutes() === 0)
    ) {
      totalOnTime++
    } else {
      totalLate++
    }

    // Calculate working hours
    const workingHours =
      (checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60 * 60)
    totalWorkingHours += workingHours

    // Absent if no check-in or check-out
    if (!attendances.checkin_time || !attendances.checkout_time) {
      totalAbsent++
    }
  })

  const onTimePercentage = (totalOnTime / totalAttendances) * 100
  const absenteeismRate = (totalAbsent / totalAttendances) * 100
  const averageWorkingHours = totalWorkingHours / totalAttendances
  const lateAttendanceRate = (totalLate / totalAttendances) * 100

  return {
    onTimePercentage: parseFloat(onTimePercentage.toFixed(2)) || 0,
    absenteeismRate: parseFloat(absenteeismRate.toFixed(2)) || 0,
    averageWorkingHours: parseFloat(averageWorkingHours.toFixed(2)) || 0,
    lateAttendanceRate: parseFloat(lateAttendanceRate.toFixed(2)) || 0,
  }
}

export const weeklyAttendance = async () => {
  // Calculate start and end of the current week
  const today = new Date()
  const currentDay = today.getDay() // 0 (Sunday) to 6 (Saturday)
  const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1) // adjust when Sunday

  const startOfWeek = new Date(today.setDate(diff))
  startOfWeek.setHours(0, 0, 0, 0) // Set to beginning of the day

  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(endOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999) // Set to end of the day

  const attendances = await kyselyDB
    .selectFrom('EmployeeAttendance')
    .selectAll()
    .where('checking_date', '>=', startOfWeek)
    .where('checking_date', '<=', endOfWeek)
    .execute()

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const result = days.map((day) => ({
    day,
    onTime: 0,
    late: 0,
  }))

  attendances.forEach((attendance) => {
    const attendanceDate = new Date(attendance.checking_date)
    const dayIndex = (attendanceDate.getDay() + 6) % 7 // Adjust so Monday is 0, Sunday is 6

    if (attendance.checkin_time) {
      const checkInTime = new Date(attendance.checkin_time)
      if (
        checkInTime.getHours() < 9 ||
        (checkInTime.getHours() === 9 && checkInTime.getMinutes() === 0)
      ) {
        result[dayIndex].onTime++
      } else {
        result[dayIndex].late++
      }
    }
  })

  return result
}
