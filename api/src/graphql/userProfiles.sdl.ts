export const schema = gql`
  type UserProfile {
    user_id: Int!
    user_ref_id: String!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(user_id: Int!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    user_ref_id: String!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input UpdateUserProfileInput {
    user_ref_id: String
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(
      user_id: Int!
      input: UpdateUserProfileInput!
    ): UserProfile! @requireAuth
    deleteUserProfile(user_id: Int!): UserProfile! @requireAuth
  }
`
