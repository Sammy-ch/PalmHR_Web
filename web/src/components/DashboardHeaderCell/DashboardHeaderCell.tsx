import type {
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables,
} from 'types/graphql'

import { navigate } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'
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
      isVerified
      Email
    }
  }
`

export const Loading = () => (
  <Skeleton className="m-5 h-10 w-full bg-slate-300" />
)

export const Empty = () => navigate(routes.newOrganization())

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
  if (dashboard.isVerified === false) {
    navigate(routes.verifyOrganizationEmail())
  }

  return <DashboardHeader organizationId={dashboard.OrganizationId} />
}
