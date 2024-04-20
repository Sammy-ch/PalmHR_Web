import type {
  DeleteAdminRoleMutation,
  DeleteAdminRoleMutationVariables,
  FindAdminRoles,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AdminRole/AdminRolesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ADMIN_ROLE_MUTATION: TypedDocumentNode<
  DeleteAdminRoleMutation,
  DeleteAdminRoleMutationVariables
> = gql`
  mutation DeleteAdminRoleMutation($id: Int!) {
    deleteAdminRole(id: $id) {
      id
    }
  }
`

const AdminRolesList = ({ adminRoles }: FindAdminRoles) => {
  const [deleteAdminRole] = useMutation(DELETE_ADMIN_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success('AdminRole deleted')
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

  const onDeleteClick = (id: DeleteAdminRoleMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete adminRole ' + id + '?')) {
      deleteAdminRole({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Name</th>
            <th>Admin id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {adminRoles.map((adminRole) => (
            <tr key={adminRole.id}>
              <td>{truncate(adminRole.id)}</td>
              <td>{timeTag(adminRole.createdAt)}</td>
              <td>{timeTag(adminRole.updatedAt)}</td>
              <td>{truncate(adminRole.name)}</td>
              <td>{truncate(adminRole.adminId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminRole({ id: adminRole.id })}
                    title={'Show adminRole ' + adminRole.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdminRole({ id: adminRole.id })}
                    title={'Edit adminRole ' + adminRole.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete adminRole ' + adminRole.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(adminRole.id)}
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

export default AdminRolesList
