export const schema = gql`
  type EmployeeLeaveForm {
    id: String!
    requested_leave_date: DateTime!
    leave: EmployeeProfile!
    leave_id: String!
    leave_type: LeaveType!
    leave_days: Int!
    leave_approval: Boolean
  }

  enum LeaveType {
    PERSONAL
    SICK
    HOLIDAY
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
    leave_days: Int!
    leave_approval: Boolean
  }

  input UpdateEmployeeLeaveFormInput {
    requested_leave_date: DateTime
    leave_id: String
    leave_type: LeaveType
    leave_days: Int
    leave_approval: Boolean
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
