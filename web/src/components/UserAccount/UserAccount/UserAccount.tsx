import type {
  DeleteUserAccountMutation,
  DeleteUserAccountMutationVariables,
  FindUserAccountById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  userAccount: NonNullable<FindUserAccountById['userAccount']>
}

const UserAccount = ({ userAccount }: Props) => {
  const [deleteUserAccount] = useMutation(DELETE_USER_ACCOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('UserAccount deleted')
      navigate(routes.userAccounts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserAccountMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userAccount ' + id + '?')) {
      deleteUserAccount({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserAccount {userAccount.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userAccount.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{userAccount.first_name}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{userAccount.last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userAccount.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserAccount({ id: userAccount.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userAccount.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserAccount
