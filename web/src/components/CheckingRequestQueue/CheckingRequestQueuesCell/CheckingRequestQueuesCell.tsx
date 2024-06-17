import type {
  FindCheckingRequestQueuesByOrganization,
  FindCheckingRequestQueuesByOrganizationVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import CheckingRequestQueues from 'src/components/CheckingRequestQueue/CheckingRequestQueues'

export const QUERY: TypedDocumentNode<
  FindCheckingRequestQueuesByOrganization,
  FindCheckingRequestQueuesByOrganizationVariables
> = gql`
  query FindCheckingRequestQueuesByOrganization($organizationId: String!) {
    checkingRequestQueuesByOrganization(organizationId: $organizationId) {
      id
      employee_id
      checking_date
      checking_time
      checking_type
      checking_status
      employee {
        first_name
        last_name
        profile_image
        position
      }
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
}: CellFailureProps<FindCheckingRequestQueuesByOrganization>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  checkingRequestQueuesByOrganization,
}: CellSuccessProps<
  FindCheckingRequestQueuesByOrganization,
  FindCheckingRequestQueuesByOrganizationVariables
>) => {
  return (
    <CheckingRequestQueues
      checkingRequestQueues={checkingRequestQueuesByOrganization}
    />
  )
}
