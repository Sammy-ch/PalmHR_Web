import type {
  FindCheckingRequestById,
  FindCheckingRequestByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequest from 'src/components/CheckingRequest/CheckingRequest'

export const QUERY: TypedDocumentNode<
  FindCheckingRequestById,
  FindCheckingRequestByIdVariables
> = gql`
  query FindCheckingRequestById($id: String!) {
    checkingRequest: checkingRequest(id: $id) {
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

export const Empty = () => <div>CheckingRequest not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCheckingRequestByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequest,
}: CellSuccessProps<
  FindCheckingRequestById,
  FindCheckingRequestByIdVariables
>) => {
  return <CheckingRequest checkingRequest={checkingRequest} />
}
