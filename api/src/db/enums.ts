export const AttendanceTag = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
} as const
export type AttendanceTag = (typeof AttendanceTag)[keyof typeof AttendanceTag]
export const CheckingType = {
  CHECKIN: 'CHECKIN',
  CHECKOUT: 'CHECKOUT',
} as const
export type CheckingType = (typeof CheckingType)[keyof typeof CheckingType]
export const CheckingStatus = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  DECLINED: 'DECLINED',
} as const
export type CheckingStatus =
  (typeof CheckingStatus)[keyof typeof CheckingStatus]
export const LeaveType = {
  PERSONAL: 'PERSONAL',
  SICK: 'SICK',
  HOLIDAY: 'HOLIDAY',
} as const
export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]
export const LeaveStatus = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  DENIED: 'DENIED',
} as const
export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]
export const OrganizationSize = {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Large',
} as const
export type OrganizationSize =
  (typeof OrganizationSize)[keyof typeof OrganizationSize]
export const Industry = {
  Technology: 'Technology',
  HealthCare: 'HealthCare',
  Finance: 'Finance',
  Education: 'Education',
  Retail: 'Retail',
  Manufactoring: 'Manufactoring',
  Other: 'Other',
} as const
export type Industry = (typeof Industry)[keyof typeof Industry]
export const OrganizationType = {
  NonProfit: 'NonProfit',
  ForProfit: 'ForProfit',
  Government: 'Government',
  Other: 'Other',
} as const
export type OrganizationType =
  (typeof OrganizationType)[keyof typeof OrganizationType]
