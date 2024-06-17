import type {
  FindDashboardHeaderQuery,
  FindDashboardHeaderQueryVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
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
      Email
    }
  }
`

const SEND_VERIFICATION_EMAIL = gql`
  mutation SendVerificationEmail($organizationId: String!, $email: String!) {
    sendVerificationEmail(organizationId: $organizationId, email: $email) {
      OrganizationId
      Email
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
  const [sendVerificationEmail] = useMutation(SEND_VERIFICATION_EMAIL)

  const OrgId = dashboard.OrganizationId
  const OrgEmail = dashboard.Email

  const handleSendVerificationEmail = async () => {
    try {
      await sendVerificationEmail({
        variables: { OrgId, OrgEmail },
      })
      alert('Verification email sent successfully')
    } catch (error) {
      console.error(error.message)
      alert('Failed to send verification email')
    }
  }

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
            <AlertDialogAction onClick={handleSendVerificationEmail}>
              Verify
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return <DashboardHeader organizationId={dashboard.OrganizationId} />
}
