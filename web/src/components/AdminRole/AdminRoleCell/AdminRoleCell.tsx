import type {
  FindAdminRoleById,
  FindAdminRoleByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import AdminRole from 'src/components/AdminRole/AdminRole'

export const QUERY: TypedDocumentNode<
  FindAdminRoleById,
  FindAdminRoleByIdVariables
> = gql`
  query FindAdminRoleById($id: Int!) {
    adminRole: adminRole(id: $id) {
      id
      createdAt
      updatedAt
      name
      adminId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdminRole not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAdminRoleByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  adminRole,
}: CellSuccessProps<FindAdminRoleById, FindAdminRoleByIdVariables>) => {
  return <AdminRole adminRole={adminRole} />
}
