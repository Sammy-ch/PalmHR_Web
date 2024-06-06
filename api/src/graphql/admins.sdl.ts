export const schema = gql`
  type Admin {
    id: String!
    org_id: String!
    Organization: Organization!
    first_name: String!
    last_name: String!
    email: String!
    admin_role: [AdminRole]!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: String!): Admin @requireAuth
  }

  input CreateAdminInput {
    org_id: String!
    first_name: String!
    last_name: String!
    email: String!
  }

  input UpdateAdminInput {
    org_id: String
    first_name: String
    last_name: String
    email: String
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: String!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: String!): Admin! @requireAuth
  }
`
