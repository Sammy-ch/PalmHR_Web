export const schema = gql`
  type EmployeeProfile {
    profile_id: String!
    org_id: String!
    Organization: Organization!
    first_name: String!
    last_name: String!
    profile_image: String
    position: String!
    email: String
    allowed_leaves: Int
    AttendanceData: [EmployeeAttendance]!
    LeaveData: [EmployeeLeaveForm]!
    CheckingRequestsData: [CheckingRequestQueue]!
    PayrollData: [EmployeePayRoll]!
    AttendanceReport: [EmployeeAttendanceReport]!
  }

  type Query {
    employeeProfiles: [EmployeeProfile!]! @requireAuth
    employeeProfile(profile_id: String!): EmployeeProfile @requireAuth
    employeeProfilesByOrg(org_id: String!): [EmployeeProfile!]! @requireAuth
  }

  input CreateEmployeeProfileInput {
    org_id: String!
    first_name: String!
    last_name: String!
    profile_image: String
    position: String!
    email: String
    allowed_leaves: Int
  }

  input UpdateEmployeeProfileInput {
    org_id: String
    first_name: String
    last_name: String
    profile_image: String
    position: String
    email: String
    allowed_leaves: Int
  }

  type Mutation {
    createEmployeeProfile(input: CreateEmployeeProfileInput!): EmployeeProfile!
      @requireAuth
    updateEmployeeProfile(
      profile_id: String!
      input: UpdateEmployeeProfileInput!
    ): EmployeeProfile! @requireAuth
    deleteEmployeeProfile(profile_id: String!): EmployeeProfile! @requireAuth
  }
`
