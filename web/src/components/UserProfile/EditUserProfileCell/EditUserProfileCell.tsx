import type {
  EditUserProfileByUserId,
  UpdateUserProfileInput,
  UpdateUserProfileMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserProfileForm from 'src/components/UserProfile/UserProfileForm'

export const QUERY: TypedDocumentNode<EditUserProfileByUserId> = gql`
  query EditUserProfileByUserId($user_id: Int!) {
    userProfile: userProfile(user_id: $user_id) {
      user_id
      user_ref_id
      first_name
      last_name
      email
      password
    }
  }
`

const UPDATE_USER_PROFILE_MUTATION: TypedDocumentNode<
  EditUserProfileById,
  UpdateUserProfileMutationVariables
> = gql`
  mutation UpdateUserProfileMutation(
    $user_id: Int!
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(user_id: $user_id, input: $input) {
      user_id
      user_ref_id
      first_name
      last_name
      email
      password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userProfile,
}: CellSuccessProps<EditUserProfileByUserId>) => {
  const [updateUserProfile, { loading, error }] = useMutation(
    UPDATE_USER_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserProfile updated')
        navigate(routes.userProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserProfileInput,
    id: EditUserProfileByUserId['userProfile']['id']
  ) => {
    updateUserProfile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserProfile {userProfile?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserProfileForm
          userProfile={userProfile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
