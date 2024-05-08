export const schema = gql`
  type CheckingRequest {
    id: String!
    employee: EmployeeProfile!
    employee_id: String!
    checking_date: DateTime!
    checking_time: DateTime!
    checking_type: CheckingType!
    checking_status: CheckingStatus!
  }

  enum CheckingType {
    checkin
    checkout
  }

  enum CheckingStatus {
    approved
    pending
    declined
  }

  type Query {
    checkingRequests: [CheckingRequest!]! @requireAuth
    checkingRequest(id: String!): CheckingRequest @requireAuth
  }

  input CreateCheckingRequestInput {
    employee_id: String!
    checking_date: DateTime!
    checking_time: DateTime!
    checking_type: CheckingType!
    checking_status: CheckingStatus!
  }

  input UpdateCheckingRequestInput {
    employee_id: String
    checking_date: DateTime
    checking_time: DateTime
    checking_type: CheckingType
    checking_status: CheckingStatus
  }

  type Mutation {
    createCheckingRequest(input: CreateCheckingRequestInput!): CheckingRequest!
      @requireAuth
    updateCheckingRequest(
      id: String!
      input: UpdateCheckingRequestInput!
    ): CheckingRequest! @requireAuth
    deleteCheckingRequest(id: String!): CheckingRequest! @requireAuth
  }
`
