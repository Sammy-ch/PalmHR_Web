import type {
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../components/ui/alert-dialog'
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
  if (dashboard.isVerified === false) {
    return (
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Welcome to PALM HR</AlertDialogTitle>
            <AlertDialogDescription>
              Before proceeding to use the app, users must verify their
              organization email address.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Verify</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return <DashboardHeader organizationId={dashboard.OrganizationId} />
}
