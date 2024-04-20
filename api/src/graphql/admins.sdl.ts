export const schema = gql`
  type Admin {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    tierAccess: [AdminRole]!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: Int!): Admin @requireAuth
  }

  input CreateAdminInput {
    first_name: String!
    last_name: String!
    email: String!
  }

  input UpdateAdminInput {
    first_name: String
    last_name: String
    email: String
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: Int!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: Int!): Admin! @requireAuth
  }
`
