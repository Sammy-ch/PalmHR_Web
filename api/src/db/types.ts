import type { ColumnType } from 'kysely'
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

import type {
  AttendanceTag,
  CheckingType,
  CheckingStatus,
  LeaveType,
  LeaveStatus,
  OrganizationSize,
  Industry,
  OrganizationType,
} from './enums'

export type Admin = {
  id: string
  org_id: string
  fullName: Generated<string>
  email: string
  imageUrl: string | null
}
export type AdminRole = {
  id: Generated<string>
  adminId: string | null
  role: string
}
export type CheckingRequestQueue = {
  id: Generated<string>
  employee_id: string
  checking_date: Timestamp
  checking_time: Timestamp
  checking_type: CheckingType
  checking_status: CheckingStatus
}
export type EmployeeAttendance = {
  attendance_id: string
  employee_id: string
  checkin_time: Timestamp | null
  checkout_time: Timestamp | null
  checking_date: Timestamp | null
  working_time: Timestamp | null
  overtime: Timestamp | null
  attendance_tag: AttendanceTag
}
export type EmployeeLeaveForm = {
  id: Generated<string>
  requested_leave_date: Timestamp
  leave_id: Generated<string>
  leave_type: LeaveType
  leave_start: Timestamp
  leave_end: Timestamp
  leave_days: number | null
  leave_status: LeaveStatus
}
export type EmployeePayRoll = {
  id: string
  pay_period_start: Timestamp
  pay_period_end: Timestamp
  base_salary: number
  net_salary: number | null
  gross_salary: number | null
  bonuses: number | null
  labor_cost: number | null
  IPR: number | null
}
export type EmployeeProfile = {
  profile_id: string
  org_id: string
  first_name: string
  last_name: string
  profile_image: string | null
  position: string
  email: string | null
  allowed_leaves: number | null
}
export type Organization = {
  OrganizationId: string
  OrganizationName: string
  organizationType: OrganizationType
  addressStreet: string
  addressCity: string
  addressState: string
  addressCountry: string
  Email: string
  websiteUrl: string
  Phone: string
  isVerified: Generated<boolean>
  organizationSize: OrganizationSize
  Industry: Industry
  adminId: string | null
}
export type PayrollSetting = {
  id: Generated<string>
  org_id: string
  housing: number | null
  transportation: number | null
  INSS: number | null
  INSS_patronal: number | null
  INSS_risque: number | null
  medical_insurance: number | null
}
export type DB = {
  Admin: Admin
  AdminRole: AdminRole
  CheckingRequestQueue: CheckingRequestQueue
  EmployeeAttendance: EmployeeAttendance
  EmployeeLeaveForm: EmployeeLeaveForm
  EmployeePayRoll: EmployeePayRoll
  EmployeeProfile: EmployeeProfile
  Organization: Organization
  PayrollSetting: PayrollSetting
}
