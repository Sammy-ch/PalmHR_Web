import type {
  FindUserProfileByUserId,
  FindUserProfileByUserIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UserProfile from 'src/components/UserProfile/UserProfile'

export const QUERY: TypedDocumentNode<
  FindUserProfileByUserId,
  FindUserProfileByUserIdVariables
> = gql`
  query FindUserProfileByUserId($user_id: String!) {
    userProfile: userProfile(user_id: $user_id) {
      user_id
      first_name
      last_name
      email
      password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserProfile not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserProfileByUserIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userProfile,
}: CellSuccessProps<
  FindUserProfileByUserId,
  FindUserProfileByUserIdVariables
>) => {
  return <UserProfile userProfile={userProfile} />
}
