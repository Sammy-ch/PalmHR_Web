import type { FindLeaveCustoms, FindLeaveCustomsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import LeaveCustoms from 'src/components/LeaveCustom/LeaveCustoms'

export const QUERY: TypedDocumentNode<
  FindLeaveCustoms,
  FindLeaveCustomsVariables
> = gql`
  query FindLeaveCustoms {
    leaveCustoms {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_days
      leave_approval
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No leaveCustoms yet. '}
      <Link to={routes.newLeaveCustom()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindLeaveCustoms>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  leaveCustoms,
}: CellSuccessProps<FindLeaveCustoms, FindLeaveCustomsVariables>) => {
  return <LeaveCustoms leaveCustoms={leaveCustoms} />
}
