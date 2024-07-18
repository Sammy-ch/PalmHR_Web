export const schema = gql`
  type Admin {
    id: String!
    org_id: String!
    fullName: String!
    email: String!
    imageUrl: String
    admin_role: [AdminRole]!
    organization: [Organization]!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: String!): Admin @requireAuth
  }

  input CreateAdminInput {
    id: String!
    org_id: String!
    fullName: String!
    email: String!
    imageUrl: String
  }

  input UpdateAdminInput {
    org_id: String
    fullName: String
    email: String
    imageUrl: String
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: String!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: String!): Admin! @requireAuth
  }
`
