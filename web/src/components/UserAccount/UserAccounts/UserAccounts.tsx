import type {
  DeleteUserAccountMutation,
  DeleteUserAccountMutationVariables,
  FindUserAccounts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserAccount/UserAccountsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_USER_ACCOUNT_MUTATION: TypedDocumentNode<
  DeleteUserAccountMutation,
  DeleteUserAccountMutationVariables
> = gql`
  mutation DeleteUserAccountMutation($id: String!) {
    deleteUserAccount(id: $id) {
      id
    }
  }
`

const UserAccountsList = ({ userAccounts }: FindUserAccounts) => {
  const [deleteUserAccount] = useMutation(DELETE_USER_ACCOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('UserAccount deleted')
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

  const onDeleteClick = (id: DeleteUserAccountMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userAccount ' + id + '?')) {
      deleteUserAccount({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userAccounts.map((userAccount) => (
            <tr key={userAccount.id}>
              <td>{truncate(userAccount.id)}</td>
              <td>{truncate(userAccount.first_name)}</td>
              <td>{truncate(userAccount.last_name)}</td>
              <td>{truncate(userAccount.email)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userAccount({ id: userAccount.id })}
                    title={'Show userAccount ' + userAccount.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserAccount({ id: userAccount.id })}
                    title={'Edit userAccount ' + userAccount.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userAccount ' + userAccount.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userAccount.id)}
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

export default UserAccountsList
