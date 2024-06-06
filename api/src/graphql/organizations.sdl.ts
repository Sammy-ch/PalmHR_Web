export const schema = gql`
  type Organization {
    OrganizationId: String!
    OrganizationName: String!
    User: User!
    Organisation_tag: String!
    Address: String!
    Email: String!
    Phone: String!
    PayRollSetting: [PayRollSetting]!
    Admin: [Admin]!
    EmployeeProfiles: [EmployeeProfile]!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(OrganizationId: String!): Organization @requireAuth
    organizationsByTag(Organisation_tag: String!): [Organization!]! @requireAuth
    organizationByTag(
      Organisation_tag: String!
      OrganizationId: String!
    ): Organization @requireAuth
  }

  input CreateOrganizationInput {
    OrganizationName: String!
    Organisation_tag: String!
    Address: String!
    Email: String!
    Phone: String!
  }

  input UpdateOrganizationInput {
    OrganizationName: String
    Organisation_tag: String
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
