export const schema = gql`
  type Admin {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    tierAccess: [AdminRole]!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: Int!): Admin @requireAuth
  }

  input CreateAdminInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateAdminInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: Int!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: Int!): Admin! @requireAuth
  }
`
