import type {
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import DashboardHeader from '../DashboardHeader/DashboardHeader'
import { Skeleton } from '../ui/skeleton'

export const QUERY: TypedDocumentNode<
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables
> = gql`
  query FindDashboardHeaderQuery($id: String!) {
    dashboard: organization(OrganizationId: $id) {
      OrganizationId
    }
  }
`

export const Loading = () => <Skeleton className="m-5 h-10 w-full" />

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDashboardHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dashboard,
}: CellSuccessProps<
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables
>) => {
  console.log(dashboard)
  return <DashboardHeader organizationId={dashboard.OrganizationId} />
}
