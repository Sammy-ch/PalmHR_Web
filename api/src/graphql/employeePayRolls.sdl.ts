export const schema = gql`
  type EmployeePayRoll {
    id: String!
    employee: EmployeeProfile!
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    base_salary: Int!
    net_salary: Int
    gross_salary: Int
    bonuses: Int
    labor_cost: Int
    IPR: Int
  }

  type Query {
    employeePayRolls: [EmployeePayRoll!]! @requireAuth
    employeePayRoll(id: String!): EmployeePayRoll @requireAuth
  }

  input CreateEmployeePayRollInput {
    id: String!
    pay_period_start: DateTime!
    pay_period_end: DateTime!
    base_salary: Int!
    net_salary: Int
    gross_salary: Int
    bonuses: Int
    labor_cost: Int
    IPR: Int
  }

  input UpdateEmployeePayRollInput {
    pay_period_start: DateTime
    pay_period_end: DateTime
    base_salary: Int
    net_salary: Int
    gross_salary: Int
    bonuses: Int
    labor_cost: Int
    IPR: Int
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
