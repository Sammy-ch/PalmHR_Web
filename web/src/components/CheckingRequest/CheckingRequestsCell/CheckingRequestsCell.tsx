import type {
  FindCheckingRequests,
  FindCheckingRequestsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequests from '../../CheckingRequests/CheckingRequests'

export const QUERY: TypedDocumentNode<
  FindCheckingRequests,
  FindCheckingRequestsVariables
> = gql`
  query FindCheckingRequests {
    checkingRequests {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
      employee {
        first_name
        last_name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No checkingRequests yet. '}
      <Link to={routes.newCheckingRequest()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCheckingRequests>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequests,
}: CellSuccessProps<FindCheckingRequests, FindCheckingRequestsVariables>) => {
  return <CheckingRequests checkingRequests={checkingRequests} />
}
