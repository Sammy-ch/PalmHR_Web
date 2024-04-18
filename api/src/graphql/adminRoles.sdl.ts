export const schema = gql`
  type AdminRole {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    admin: Admin
    adminId: Int
  }

  type Query {
    adminRoles: [AdminRole!]! @requireAuth
    adminRole(id: String!): AdminRole @requireAuth
  }

  input CreateAdminRoleInput {
    name: String!
    adminId: Int
  }

  input UpdateAdminRoleInput {
    name: String
    adminId: Int
  }

  type Mutation {
    createAdminRole(input: CreateAdminRoleInput!): AdminRole! @requireAuth
    updateAdminRole(id: String!, input: UpdateAdminRoleInput!): AdminRole!
      @requireAuth
    deleteAdminRole(id: String!): AdminRole! @requireAuth
  }
`
