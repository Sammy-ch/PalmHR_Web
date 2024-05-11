import type {
  DeleteAdminRoleMutation,
  DeleteAdminRoleMutationVariables,
  FindAdminRoleById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ADMIN_ROLE_MUTATION: TypedDocumentNode<
  DeleteAdminRoleMutation,
  DeleteAdminRoleMutationVariables
> = gql`
  mutation DeleteAdminRoleMutation($id: String!) {
    deleteAdminRole(id: $id) {
      id
    }
  }
`

interface Props {
  adminRole: NonNullable<FindAdminRoleById['adminRole']>
}

const AdminRole = ({ adminRole }: Props) => {
  const [deleteAdminRole] = useMutation(DELETE_ADMIN_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('AdminRole deleted')
      navigate(routes.adminRoles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAdminRoleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete adminRole ' + id + '?')) {
      deleteAdminRole({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AdminRole {adminRole.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{adminRole.id}</td>
            </tr>
            <tr>
              <th>Admin id</th>
              <td>{adminRole.adminId}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{adminRole.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdminRole({ id: adminRole.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(adminRole.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AdminRole
