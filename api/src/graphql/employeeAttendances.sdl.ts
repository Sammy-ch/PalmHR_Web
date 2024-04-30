export const schema = gql`
  type EmployeeAttendance {
    attendance_id: String!
    employee: EmployeeProfile!
    employee_id: String!
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: DateTime
    presence_tag: PresenceTag!
  }

  enum PresenceTag {
    PRESENT
    LATE
    JUSTIFIED_ABSENCE
    UNJUSTIFIED_ABSENCE
    UNNOTIFIED_ABSENCE
  }

  type Query {
    employeeAttendances: [EmployeeAttendance!]! @requireAuth
    employeeAttendance(attendance_id: String!): EmployeeAttendance @requireAuth
  }

  input CreateEmployeeAttendanceInput {
    employee_id: String!
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: DateTime
    presence_tag: PresenceTag!
  }

  input UpdateEmployeeAttendanceInput {
    employee_id: String
    checkin_time: DateTime
    checkout_time: DateTime
    checking_date: DateTime
    working_time: DateTime
    presence_tag: PresenceTag
  }

  type Mutation {
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
