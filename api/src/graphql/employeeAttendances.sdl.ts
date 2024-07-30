export const schema = gql`
  type EmployeeAttendance {
    attendance_id: String!
    employee: EmployeeProfile!
    employee_id: String!
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: String
    attendance_tag: AttendanceTag!
  }

  enum AttendanceTag {
    PRESENT
    ABSENT
  }

  type WeeklyAttendance {
    day: String!
    onTime: Int!
    late: Int!
  }

  type OrganizationAttendanceKPI {
    onTimePercentage: Float!
    absenteeismRate: Float!
    averageWorkingHours: Float!
    lateAttendanceRate: Float!
  }
  type Query {
    employeeAttendances: [EmployeeAttendance!]! @requireAuth
    employeeAttendance(attendance_id: String!): EmployeeAttendance @requireAuth
    employeeAttendancesByOrganization(orgId: String!): [EmployeeAttendance!]!
      @requireAuth

    getOrganizationAttendanceKPI: OrganizationAttendanceKPI! @requireAuth
    employeesWeeklyAttendance: [WeeklyAttendance] @requireAuth
  }

  input CreateEmployeeAttendanceInput {
    attendance_id: String!
    employee_id: String!
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: DateTime
    attendance_tag: AttendanceTag!
  }

  input UpdateEmployeeAttendanceInput {
    employee_id: String
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: DateTime
    attendance_tag: AttendanceTag
  }

  type Mutation {
    approveEmployeeCheckout(
      attendance_id: String!
      checkout_time: DateTime!
    ): EmployeeAttendance! @requireAuth

    createEmployeeAttendance(
      input: CreateEmployeeAttendanceInput!
    ): EmployeeAttendance! @requireAuth
    updateEmployeeAttendance(
      attendance_id: String!
      input: UpdateEmployeeAttendanceInput!
    ): EmployeeAttendance! @requireAuth
    deleteEmployeeAttendance(attendance_id: String!): EmployeeAttendance!
      @requireAuth
  }
`
