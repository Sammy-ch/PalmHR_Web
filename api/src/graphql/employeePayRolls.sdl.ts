export const schema = gql`
  type EmployeePayRoll {
    id: String!
    employee: EmployeeProfile!
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    base_salary: Int!
    overtime: Int
    net_salary: Int
    bonuses: Int
    gross_amount: Int
    labor_cost: Int
  }

  type Query {
    employeePayRolls: [EmployeePayRoll!]! @requireAuth
    employeePayRoll(id: String!): EmployeePayRoll @requireAuth
  }

  input CreateEmployeePayRollInput {
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    attendance_report: String!
    base_salary: Int!
    overtime: Int
    net_salary: Int
    bonuses: Int
    gross_amount: Int
    labor_cost: Int
  }

  input UpdateEmployeePayRollInput {
    pay_period_start: DateTime
    pay_period_end: DateTime
    attendance_report: String
    base_salary: Int
    overtime: Int
    net_salary: Int
    bonuses: Int
    gross_amount: Int
    labor_cost: Int
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
