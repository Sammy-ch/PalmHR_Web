import type { FindAdminRoles, FindAdminRolesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import AdminRoles from 'src/components/AdminRole/AdminRoles'

export const QUERY: TypedDocumentNode<
  FindAdminRoles,
  FindAdminRolesVariables
> = gql`
  query FindAdminRoles {
    adminRoles {
      id
      adminId
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No adminRoles yet. '}
      <Link to={routes.newAdminRole()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindAdminRoles>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  adminRoles,
}: CellSuccessProps<FindAdminRoles, FindAdminRolesVariables>) => {
  return <AdminRoles adminRoles={adminRoles} />
}
