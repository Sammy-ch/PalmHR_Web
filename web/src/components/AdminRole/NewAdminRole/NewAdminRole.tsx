import type {
  CreateAdminRoleMutation,
  CreateAdminRoleInput,
  CreateAdminRoleMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminRoleForm from 'src/components/AdminRole/AdminRoleForm'

const CREATE_ADMIN_ROLE_MUTATION: TypedDocumentNode<
  CreateAdminRoleMutation,
  CreateAdminRoleMutationVariables
> = gql`
  mutation CreateAdminRoleMutation($input: CreateAdminRoleInput!) {
    createAdminRole(input: $input) {
      id
    }
  }
`

const NewAdminRole = () => {
  const [createAdminRole, { loading, error }] = useMutation(
    CREATE_ADMIN_ROLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdminRole created')
        navigate(routes.adminRoles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAdminRoleInput) => {
    createAdminRole({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AdminRole</h2>
      </header>
      <div className="rw-segment-main">
        <AdminRoleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAdminRole
