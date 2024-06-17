export const schema = gql`
  type UserAccount {
    id: String!
    first_name: String!
    last_name: String
    email: String!
    organization: [Organization]!
    PayRollSetting: [PayRollSetting]!
  }

  type Query {
    userAccounts: [UserAccount!]! @requireAuth
    userAccount(id: String!): UserAccount @requireAuth
  }

  input CreateUserAccountInput {
    id: String!
    first_name: String!
    last_name: String
    email: String!
  }

  input UpdateUserAccountInput {
    first_name: String
    last_name: String
    email: String
  }

  type Mutation {
    createUserAccount(input: CreateUserAccountInput!): UserAccount! @requireAuth
    updateUserAccount(
      id: String!
      input: UpdateUserAccountInput!
    ): UserAccount! @requireAuth
    deleteUserAccount(id: String!): UserAccount! @requireAuth
  }
`
