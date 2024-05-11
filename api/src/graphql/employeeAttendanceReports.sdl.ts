export const schema = gql`
  type EmployeeAttendanceReport {
    id: String!
    employee: EmployeeProfile!
    employee_id: String!
    TotalOvertime: DateTime!
    TotalWorkhours: DateTime!
    TotalSickLeaves: DateTime!
    AbstenteeismRate: Int!
    EarlyAttendaceRate: Int!
    LateAttedanceRate: Int!
  }

  type Query {
    employeeAttendanceReports: [EmployeeAttendanceReport!]! @requireAuth
    employeeAttendanceReport(id: String!): EmployeeAttendanceReport @requireAuth
  }

  input CreateEmployeeAttendanceReportInput {
    employee_id: String!
    TotalOvertime: DateTime!
    TotalWorkhours: DateTime!
    TotalSickLeaves: DateTime!
    AbstenteeismRate: Int!
    EarlyAttendaceRate: Int!
    LateAttedanceRate: Int!
  }

  input UpdateEmployeeAttendanceReportInput {
    employee_id: String
    TotalOvertime: DateTime
    TotalWorkhours: DateTime
    TotalSickLeaves: DateTime
    AbstenteeismRate: Int
    EarlyAttendaceRate: Int
    LateAttedanceRate: Int
  }

  type Mutation {
    createEmployeeAttendanceReport(
      input: CreateEmployeeAttendanceReportInput!
    ): EmployeeAttendanceReport! @requireAuth
    updateEmployeeAttendanceReport(
      id: String!
      input: UpdateEmployeeAttendanceReportInput!
    ): EmployeeAttendanceReport! @requireAuth
    deleteEmployeeAttendanceReport(id: String!): EmployeeAttendanceReport!
      @requireAuth
  }
`
