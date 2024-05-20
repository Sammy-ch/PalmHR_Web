export const schema = gql`
  type User {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    payroll_setting: [PayRollSetting]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    email: String!
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
