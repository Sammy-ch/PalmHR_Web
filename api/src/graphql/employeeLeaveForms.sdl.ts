export const schema = gql`
  type EmployeeLeaveForm {
    id: String!
    requested_leave_date: DateTime!
    leave: EmployeeProfile!
    leave_id: String!
    leave_type: LeaveType!
    leave_start: DateTime!
    leave_end: DateTime!
    leave_days: Int
    leave_status: LeaveStatus!
  }

  enum LeaveType {
    PERSONAL
    SICK
    HOLIDAY
  }

  enum LeaveStatus {
    APPROVED
    PENDING
    DENIED
  }

  type Query {
    employeeLeaveForms: [EmployeeLeaveForm!]! @requireAuth
    employeeLeaveForm(id: String!): EmployeeLeaveForm @requireAuth
    approvedEmployeeLeaveForms: [EmployeeLeaveForm!]! @requireAuth
  }

  input CreateEmployeeLeaveFormInput {
    requested_leave_date: DateTime!
    leave_id: String!
    leave_type: LeaveType!
    leave_start: DateTime!
    leave_end: DateTime!
    leave_days: Int
    leave_status: LeaveStatus!
  }

  input UpdateEmployeeLeaveFormInput {
    requested_leave_date: DateTime
    leave_id: String
    leave_type: LeaveType
    leave_start: DateTime
    leave_end: DateTime
    leave_days: Int
    leave_status: LeaveStatus
  }

  type Mutation {
    createEmployeeLeaveForm(
      input: CreateEmployeeLeaveFormInput!
    ): EmployeeLeaveForm! @requireAuth
    updateEmployeeLeaveForm(
      id: String!
      input: UpdateEmployeeLeaveFormInput!
    ): EmployeeLeaveForm! @requireAuth
    deleteEmployeeLeaveForm(id: String!): EmployeeLeaveForm! @requireAuth
  }
`
