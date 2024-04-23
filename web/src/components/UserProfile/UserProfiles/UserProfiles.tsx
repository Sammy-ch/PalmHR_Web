import type {
  DeleteUserProfileMutation,
  DeleteUserProfileMutationVariables,
  FindUserProfiles,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserProfile/UserProfilesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_USER_PROFILE_MUTATION: TypedDocumentNode<
  DeleteUserProfileMutation,
  DeleteUserProfileMutationVariables
> = gql`
  mutation DeleteUserProfileMutation($user_id: String!) {
    deleteUserProfile(user_id: $user_id) {
      user_id
    }
  }
`

const UserProfilesList = ({ userProfiles }: FindUserProfiles) => {
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('UserProfile deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>User id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Password</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userProfiles.map((userProfile) => (
            <tr key={userProfile.user_id}>
              <td>{truncate(userProfile.user_id)}</td>
              <td>{truncate(userProfile.first_name)}</td>
              <td>{truncate(userProfile.last_name)}</td>
              <td>{truncate(userProfile.email)}</td>
              <td>{truncate(userProfile.password)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userProfile({ user_id: userProfile.user_id })}
                    title={
                      'Show userProfile ' + userProfile.user_id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserProfile({
                      user_id: userProfile.user_id,
                    })}
                    title={'Edit userProfile ' + userProfile.user_id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userProfile ' + userProfile.user_id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userProfile.user_id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserProfilesList
