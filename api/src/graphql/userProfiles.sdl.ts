export const schema = gql`
  type UserProfile {
    user_id: String!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(user_id: String!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input UpdateUserProfileInput {
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(
      user_id: String!
      input: UpdateUserProfileInput!
    ): UserProfile! @requireAuth
    deleteUserProfile(user_id: String!): UserProfile! @requireAuth
  }
`
