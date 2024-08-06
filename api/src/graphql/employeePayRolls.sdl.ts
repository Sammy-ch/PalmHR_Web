export const schema = gql`
  type EmployeePayRoll {
    id: String!
    employee: EmployeeProfile!
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
    base_salary: Int!
    net_salary: Int
    gross_salary: Int
    bonuses: Int
    labor_cost: Int
    IPR: Int
  }

  input UpdateEmployeePayRollInput {
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
