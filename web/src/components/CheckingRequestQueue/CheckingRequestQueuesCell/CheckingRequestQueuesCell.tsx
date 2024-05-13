import type {
  FindCheckingRequestQueues,
  FindCheckingRequestQueuesVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequestQueues from 'src/components/CheckingRequestQueue/CheckingRequestQueues'

export const QUERY: TypedDocumentNode<
  FindCheckingRequestQueues,
  FindCheckingRequestQueuesVariables
> = gql`
  query FindCheckingRequestQueues {
    checkingRequestQueues {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No checkingRequestQueues yet. '}
      <Link to={routes.newCheckingRequestQueue()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindCheckingRequestQueues>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequestQueues,
}: CellSuccessProps<
  FindCheckingRequestQueues,
  FindCheckingRequestQueuesVariables
>) => {
  return <CheckingRequestQueues checkingRequestQueues={checkingRequestQueues} />
}
