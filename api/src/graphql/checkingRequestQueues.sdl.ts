export const schema = gql`
  type CheckingRequestQueue {
    id: String!
    employee: EmployeeProfile!
    employee_id: String!
    checking_date: DateTime!
    checking_time: DateTime!
    checking_type: CheckingType!
    checking_status: CheckingStatus!
  }

  enum CheckingType {
    CHECKIN
    CHECKOUT
  }

  enum CheckingStatus {
    APPROVED
    PENDING
    DECLINED
  }

  type Query {
    checkingRequestQueues: [CheckingRequestQueue!]! @requireAuth
    checkingRequestQueue(id: String!): CheckingRequestQueue @requireAuth
  }

  input CreateCheckingRequestQueueInput {
    employee_id: String!
    checking_date: DateTime!
    checking_time: DateTime!
    checking_type: CheckingType!
    checking_status: CheckingStatus!
  }

  input UpdateCheckingRequestQueueInput {
    employee_id: String
    checking_date: DateTime
    checking_time: DateTime
    checking_type: CheckingType
    checking_status: CheckingStatus
  }

  type Mutation {
    createCheckingRequestQueue(
      input: CreateCheckingRequestQueueInput!
    ): CheckingRequestQueue! @requireAuth
    updateCheckingRequestQueue(
      id: String!
      input: UpdateCheckingRequestQueueInput!
    ): CheckingRequestQueue! @requireAuth
    deleteCheckingRequestQueue(id: String!): CheckingRequestQueue! @requireAuth
  }
`
