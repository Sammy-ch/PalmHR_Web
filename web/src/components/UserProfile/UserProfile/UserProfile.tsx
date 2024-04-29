import type {
  DeleteUserProfileMutation,
  DeleteUserProfileMutationVariables,
  FindUserProfileByUserId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_USER_PROFILE_MUTATION: TypedDocumentNode<
  DeleteUserProfileMutation,
  DeleteUserProfileMutationVariables
> = gql`
  mutation DeleteUserProfileMutation($user_id: Int!) {
    deleteUserProfile(user_id: $user_id) {
      user_id
    }
  }
`

interface Props {
  userProfile: NonNullable<FindUserProfileByUserId['userProfile']>
}

const UserProfile = ({ userProfile }: Props) => {
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('UserProfile deleted')
      navigate(routes.userProfiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    user_id: DeleteUserProfileMutationVariables['user_id']
  ) => {
    if (
      confirm('Are you sure you want to delete userProfile ' + user_id + '?')
    ) {
      deleteUserProfile({ variables: { user_id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserProfile {userProfile.user_id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>User id</th>
              <td>{userProfile.user_id}</td>
            </tr>
            <tr>
              <th>User ref id</th>
              <td>{userProfile.user_ref_id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{userProfile.first_name}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{userProfile.last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userProfile.email}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{userProfile.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserProfile({ user_id: userProfile.user_id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userProfile.user_id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserProfile
