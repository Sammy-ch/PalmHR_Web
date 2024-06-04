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

export const QUERY: TypedDocumentNode<
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables
> = gql`
  query FindDashboardHeaderQuery($tag: String!) {
    dashboard: organizationByTag(Organisation_tag: $tag) {
      OrganizationId
      Organisation_tag
    }
  }
`

export const Loading = () => <div>Loading...</div>

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
  return <DashboardHeader organizationId={dashboard.OrganizationId} />
}
