import type {
  DeleteAdminMutation,
  DeleteAdminMutationVariables,
  FindAdminById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ADMIN_MUTATION: TypedDocumentNode<
  DeleteAdminMutation,
  DeleteAdminMutationVariables
> = gql`
  mutation DeleteAdminMutation($id: Int!) {
    deleteAdmin(id: $id) {
      id
    }
  }
`

interface Props {
  admin: NonNullable<FindAdminById['admin']>
}

const Admin = ({ admin }: Props) => {
  const [deleteAdmin] = useMutation(DELETE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('Admin deleted')
      navigate(routes.admins())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAdminMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete admin ' + id + '?')) {
      deleteAdmin({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Admin {admin.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{admin.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{admin.email}</td>
            </tr>
            <tr>
              <th>Hashed password</th>
              <td>{admin.hashedPassword}</td>
            </tr>
            <tr>
              <th>Salt</th>
              <td>{admin.salt}</td>
            </tr>
            <tr>
              <th>Reset token</th>
              <td>{admin.resetToken}</td>
            </tr>
            <tr>
              <th>Reset token expires at</th>
              <td>{timeTag(admin.resetTokenExpiresAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdmin({ id: admin.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(admin.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Admin
