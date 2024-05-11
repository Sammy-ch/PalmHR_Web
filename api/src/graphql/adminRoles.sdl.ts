export const schema = gql`
  type AdminRole {
    id: String!
    adminId: String
    role: String!
    admin: Admin
  }

  type Query {
    adminRoles: [AdminRole!]! @requireAuth
    adminRole(id: String!): AdminRole @requireAuth
  }

  input CreateAdminRoleInput {
    adminId: String
    role: String!
  }

  input UpdateAdminRoleInput {
    adminId: String
    role: String
  }

  type Mutation {
    createAdminRole(input: CreateAdminRoleInput!): AdminRole! @requireAuth
    updateAdminRole(id: String!, input: UpdateAdminRoleInput!): AdminRole!
      @requireAuth
    deleteAdminRole(id: String!): AdminRole! @requireAuth
  }
`
