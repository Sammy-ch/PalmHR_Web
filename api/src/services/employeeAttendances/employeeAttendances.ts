import type {
  QueryResolvers,
  MutationResolvers,
  EmployeeAttendanceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employeeAttendances: QueryResolvers['employeeAttendances'] =
  () => {
    return db.employeeAttendance.findMany()
  }

export const employeeAttendance: QueryResolvers['employeeAttendance'] = ({
  attendance_id,
}) => {
  return db.employeeAttendance.findUnique({
    where: { attendance_id },
  })
}

export const employeeAttendancesByOrganization: QueryResolvers['employeeAttendancesByOrganization'] =
  ({ orgId }) => {
    return db.employeeAttendance.findMany({
      where: {
        employee: {
          org_id: orgId,
        },
      },
      include: {
        employee: true,
      },
    })
  }

export const createEmployeeAttendance: MutationResolvers['createEmployeeAttendance'] =
  ({ input }) => {
    return db.employeeAttendance.create({
      data: input,
    })
  }

export const updateEmployeeAttendance: MutationResolvers['updateEmployeeAttendance'] =
  ({ attendance_id, input }) => {
    return db.employeeAttendance.update({
      data: input,
      where: { attendance_id },
    })
  }

export const approveEmployeeCheckout: MutationResolvers['approveEmployeeCheckout'] =
  async ({ attendance_id, checkout_time }) => {
    try {
      const updatedAttendance = await db.employeeAttendance.update({
        where: { attendance_id: attendance_id },
        data: { checkout_time: checkout_time },
      })

      return updatedAttendance
    } catch (error) {
      console.error('Error approving employee checkout:', error)
      throw error
    }
  }

export const deleteEmployeeAttendance: MutationResolvers['deleteEmployeeAttendance'] =
  ({ attendance_id }) => {
    return db.employeeAttendance.delete({
      where: { attendance_id },
    })
  }

export const EmployeeAttendance: EmployeeAttendanceRelationResolvers = {
  employee: (_obj, { root }) => {
    return db.employeeAttendance
      .findUnique({ where: { attendance_id: root?.attendance_id } })
      .employee()
  },
}
export const getOrganizationAttendanceKPI = async () => {
  const employees = await db.employeeProfile.findMany({
    include: {
      AttendanceData: true,
    },
  })

  let totalOnTime = 0
  let totalAbsent = 0
  let totalWorkingHours = 0
  let totalLate = 0
  let totalAttendances = 0

  employees.forEach((employee) => {
    const attendances = employee.AttendanceData
    totalAttendances += attendances.length

    attendances.forEach((attendance) => {
      const checkInTime = new Date(attendance.checkin_time)
      const checkOutTime = new Date(attendance.checkout_time)

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
      if (!attendance.checkin_time || !attendance.checkout_time) {
        totalAbsent++
      }
    })
  })

  const onTimePercentage = (totalOnTime / totalAttendances) * 100
  const absenteeismRate = (totalAbsent / totalAttendances) * 100
  const averageWorkingHours = totalWorkingHours / totalAttendances
  const lateAttendanceRate = (totalLate / totalAttendances) * 100

  return {
    onTimePercentage: parseFloat(onTimePercentage.toFixed(2)),
    absenteeismRate: parseFloat(absenteeismRate.toFixed(2)),
    averageWorkingHours: parseFloat(averageWorkingHours.toFixed(2)),
    lateAttendanceRate: parseFloat(lateAttendanceRate.toFixed(2)),
  }
}

export const weeklyAttendance: QueryResolvers['employeesWeeklyAttendance'] =
  async () => {
    // Calculate start and end of the current week
    const today = new Date()
    const currentDay = today.getDay() // 0 (Sunday) to 6 (Saturday)
    const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1) // adjust when Sunday

    const startOfWeek = new Date(today.setDate(diff))
    startOfWeek.setHours(0, 0, 0, 0) // Set to beginning of the day

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 6)
    endOfWeek.setHours(23, 59, 59, 999) // Set to end of the day

    const attendances = await db.employeeAttendance.findMany({
      where: {
        checking_date: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
    })

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
