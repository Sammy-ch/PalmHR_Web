import type {
  FindCheckingRequestQueueById,
  FindCheckingRequestQueueByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequestQueue from 'src/components/CheckingRequestQueue/CheckingRequestQueue'

export const QUERY: TypedDocumentNode<
  FindCheckingRequestQueueById,
  FindCheckingRequestQueueByIdVariables
> = gql`
  query FindCheckingRequestQueueById($id: String!) {
    checkingRequestQueue: checkingRequestQueue(id: $id) {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CheckingRequestQueue not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCheckingRequestQueueByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequestQueue,
}: CellSuccessProps<
  FindCheckingRequestQueueById,
  FindCheckingRequestQueueByIdVariables
>) => {
  return <CheckingRequestQueue checkingRequestQueue={checkingRequestQueue} />
}
