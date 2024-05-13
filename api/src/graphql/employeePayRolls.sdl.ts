export const schema = gql`
  type EmployeePayRoll {
    id: String!
    employee: EmployeeProfile!
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    hours_Worked: DateTime!
    base_salary: Int!
    overtime: DateTime
    netpay: Int
  }

  type Query {
    employeePayRolls: [EmployeePayRoll!]! @requireAuth
    employeePayRoll(id: String!): EmployeePayRoll @requireAuth
  }

  input CreateEmployeePayRollInput {
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    hours_Worked: DateTime!
    base_salary: Int!
    overtime: DateTime
    netpay: Int
  }

  input UpdateEmployeePayRollInput {
    pay_period_start: DateTime
    pay_period_end: DateTime
    hours_Worked: DateTime
    base_salary: Int
    overtime: DateTime
    netpay: Int
  }

  type Mutation {
    createEmployeePayRoll(input: CreateEmployeePayRollInput!): EmployeePayRoll!
      @requireAuth
    updateEmployeePayRoll(
      id: String!
      input: UpdateEmployeePayRollInput!
    ): EmployeePayRoll! @requireAuth
    deleteEmployeePayRoll(id: String!): EmployeePayRoll! @requireAuth
  }
`
