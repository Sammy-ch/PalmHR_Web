export const schema = gql`
  type Organization {
    OrganizationId: Int!
    OrganizationName: String!
    Address: String!
    ContactName: String!
    Email: String!
    Phone: String!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(OrganizationId: Int!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    OrganizationName: String!
    Address: String!
    ContactName: String!
    Email: String!
    Phone: String!
  }

  input UpdateOrganizationInput {
    OrganizationName: String
    Address: String
    ContactName: String
    Email: String
    Phone: String
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      OrganizationId: Int!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(OrganizationId: Int!): Organization! @requireAuth
  }
`
