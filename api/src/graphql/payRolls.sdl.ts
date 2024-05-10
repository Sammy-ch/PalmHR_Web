export const schema = gql`
  type PayRoll {
    id: String!
    employee: EmployeeProfile!
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    hours_Worked: DateTime!
    overtime: DateTime
    base_salary: Int!
    netpay: Int!
  }

  type Query {
    payRolls: [PayRoll!]! @requireAuth
    payRoll(id: String!): PayRoll @requireAuth
  }

  input CreatePayRollInput {
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    hours_Worked: DateTime!
    overtime: DateTime
    base_salary: Int!
    netpay: Int!
  }

  input UpdatePayRollInput {
    pay_period_start: DateTime
    pay_period_end: DateTime
    hours_Worked: DateTime
    overtime: DateTime
    base_salary: Int
    netpay: Int
  }

  type Mutation {
    createPayRoll(input: CreatePayRollInput!): PayRoll! @requireAuth
    updatePayRoll(id: String!, input: UpdatePayRollInput!): PayRoll!
      @requireAuth
    deletePayRoll(id: String!): PayRoll! @requireAuth
  }
`
