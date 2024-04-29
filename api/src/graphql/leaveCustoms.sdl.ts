export const schema = gql`
  type LeaveCustom {
    id: String!
    requested_leave_date: DateTime!
    leave: EmployeeProfile!
    leave_id: String!
    leave_type: String!
    leave_days: Int!
    leave_approval: Boolean
  }

  type Query {
    leaveCustoms: [LeaveCustom!]! @requireAuth
    leaveCustom(id: String!): LeaveCustom @requireAuth
  }

  input CreateLeaveCustomInput {
    requested_leave_date: DateTime!
    leave_id: String!
    leave_type: String!
    leave_days: Int!
    leave_approval: Boolean
  }

  input UpdateLeaveCustomInput {
    requested_leave_date: DateTime
    leave_id: String
    leave_type: String
    leave_days: Int
    leave_approval: Boolean
  }

  type Mutation {
    createLeaveCustom(input: CreateLeaveCustomInput!): LeaveCustom! @requireAuth
    updateLeaveCustom(
      id: String!
      input: UpdateLeaveCustomInput!
    ): LeaveCustom! @requireAuth
    deleteLeaveCustom(id: String!): LeaveCustom! @requireAuth
  }
`
