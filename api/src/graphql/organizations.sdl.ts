export const schema = gql`
  type Organization {
    OrganizationId: String!
    OrganizationName: String!
    User: UserAccount!
    organizationType: OrganizationType!
    addressStreet: String!
    addressCity: String!
    addressState: String!
    addressCountry: String!
    Email: String!
    websiteUrl: String!
    Phone: String!
    isVerified: Boolean!
    organizationSize: OrganizationSize!
    Industry: Industry!
    PayRollSetting: [PayRollSetting]!
    Admin: [Admin]!
    EmployeeProfiles: [EmployeeProfile]!
    OrganizationAttendanceKpi: [OrganizationAttendanceKpi]!
  }

  enum OrganizationType {
    NonProfit
    ForProfit
    Government
    Other
  }

  enum OrganizationSize {
    Small
    Medium
    Large
  }

  enum Industry {
    Technology
    HealthCare
    Finance
    Education
    Retail
    Manufactoring
    Other
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(OrganizationId: String!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    OrganizationId: String!
    OrganizationName: String!
    organizationType: OrganizationType!
    addressStreet: String!
    addressCity: String!
    addressState: String!
    addressCountry: String!
    Email: String!
    websiteUrl: String!
    Phone: String!
    isVerified: Boolean!
    organizationSize: OrganizationSize!
    Industry: Industry!
  }

  input UpdateOrganizationInput {
    OrganizationName: String
    organizationType: OrganizationType
    addressStreet: String
    addressCity: String
    addressState: String
    addressCountry: String
    Email: String
    websiteUrl: String
    Phone: String
    isVerified: Boolean
    organizationSize: OrganizationSize
    Industry: Industry
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
