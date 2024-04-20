export const schema = gql`
  type AdminRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    admin: Admin
    adminId: Int
  }

  type Query {
    adminRoles: [AdminRole!]! @requireAuth
    adminRole(id: Int!): AdminRole @requireAuth
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
    updateAdminRole(id: Int!, input: UpdateAdminRoleInput!): AdminRole!
      @requireAuth
    deleteAdminRole(id: Int!): AdminRole! @requireAuth
  }
`
