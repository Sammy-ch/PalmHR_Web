export const schema = gql`
  type OrganizationAttendanceKpi {
    id: String!
    TotalOvertime: Int!
    TotalWorkhours: Int!
    TotalSickLeaves: Int!
    AbstenteeismRate: Int!
    EarlyAttendaceRate: Int!
    LateAttedanceRate: Int!
    org_id: String!
    Organization: Organization!
  }

  type Query {
    organizationAttendanceKpis: [OrganizationAttendanceKpi!]! @requireAuth
    organizationAttendanceKpi(id: String!): OrganizationAttendanceKpi
      @requireAuth
  }

  input CreateOrganizationAttendanceKpiInput {
    TotalOvertime: Int!
    TotalWorkhours: Int!
    TotalSickLeaves: Int!
    AbstenteeismRate: Int!
    EarlyAttendaceRate: Int!
    LateAttedanceRate: Int!
    org_id: String!
  }

  input UpdateOrganizationAttendanceKpiInput {
    TotalOvertime: Int
    TotalWorkhours: Int
    TotalSickLeaves: Int
    AbstenteeismRate: Int
    EarlyAttendaceRate: Int
    LateAttedanceRate: Int
    org_id: String
  }

  type Mutation {
    createOrganizationAttendanceKpi(
      input: CreateOrganizationAttendanceKpiInput!
    ): OrganizationAttendanceKpi! @requireAuth
    updateOrganizationAttendanceKpi(
      id: String!
      input: UpdateOrganizationAttendanceKpiInput!
    ): OrganizationAttendanceKpi! @requireAuth
    deleteOrganizationAttendanceKpi(id: String!): OrganizationAttendanceKpi!
      @requireAuth
  }
`
