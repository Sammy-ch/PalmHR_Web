import type {
  CreateUserProfileMutation,
  CreateUserProfileInput,
  CreateUserProfileMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserProfileForm from 'src/components/UserProfile/UserProfileForm'

const CREATE_USER_PROFILE_MUTATION: TypedDocumentNode<
  CreateUserProfileMutation,
  CreateUserProfileMutationVariables
> = gql`
  mutation CreateUserProfileMutation($input: CreateUserProfileInput!) {
    createUserProfile(input: $input) {
      user_id
    }
  }
`

const NewUserProfile = () => {
  const [createUserProfile, { loading, error }] = useMutation(
    CREATE_USER_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserProfile created')
        navigate(routes.userProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserProfileInput) => {
    createUserProfile({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserProfile</h2>
      </header>
      <div className="rw-segment-main">
        <UserProfileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserProfile
