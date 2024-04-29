import type {
  FindLeaveCustomById,
  FindLeaveCustomByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import LeaveCustom from 'src/components/LeaveCustom/LeaveCustom'

export const QUERY: TypedDocumentNode<
  FindLeaveCustomById,
  FindLeaveCustomByIdVariables
> = gql`
  query FindLeaveCustomById($id: String!) {
    leaveCustom: leaveCustom(id: $id) {
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

export const Empty = () => <div>LeaveCustom not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLeaveCustomByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  leaveCustom,
}: CellSuccessProps<FindLeaveCustomById, FindLeaveCustomByIdVariables>) => {
  return <LeaveCustom leaveCustom={leaveCustom} />
}
