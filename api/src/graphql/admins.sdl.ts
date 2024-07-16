export const schema = gql`
  type Admin {
    id: String!
    org_id: String!
    Organization: Organization!
    username: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetTokenExpiresAt: DateTime
    admin_role: [AdminRole]!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: String!): Admin @requireAuth
  }

  input CreateAdminInput {
    org_id: String!
    username: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetTokenExpiresAt: DateTime
  }

  input UpdateAdminInput {
    org_id: String
    username: String
    email: String
    hashedPassword: String
    salt: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: String!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: String!): Admin! @requireAuth
  }
`
