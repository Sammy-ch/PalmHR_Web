export const schema = gql`
  type Organization {
    OrganizationId: String!
    OrganizationName: String!
    User: UserAccount!
    Address: String!
    Email: String!
    isVerified: Boolean!
    Phone: String!
    PayRollSetting: [PayRollSetting]!
    Admin: [Admin]!
    EmployeeProfiles: [EmployeeProfile]!
    OrganizationAttendanceKpi: [OrganizationAttendanceKpi]!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(OrganizationId: String!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    OrganizationId: String!
    OrganizationName: String!
    Address: String!
    Email: String!
    Phone: String!
  }

  input UpdateOrganizationInput {
    OrganizationName: String
    Address: String
    Email: String
    Phone: String
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      OrganizationId: String!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(OrganizationId: String!): Organization! @requireAuth
  }
`
