import { useEffect } from 'react'

import { navigate, routes, useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import DashboardHeaderCell from 'src/components/DashboardHeaderCell'
import Navigation from 'src/components/Navigation/Navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../components/ui/alert-dialog'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const GET_ORGANIZATION_QUERY = gql`
  query CheckVerificationStatus($OrganizationId: String!) {
    organization(OrganizationId: $OrganizationId) {
      isVerified
    }
  }
`

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  const { id } = useParams()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.sub !== id) {
      navigate(routes.home())
    }
  })

  const { data, loading, error } = useQuery(GET_ORGANIZATION_QUERY, {
    variables: { OrganizationId: id },
  })

  const isVerified = data?.organization?.isVerified

  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Navigation />
      <div className="flex flex-col">
        <DashboardHeaderCell id={id} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
          {!isVerified ? (
            <AlertDialog open={true}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Welcome to PALM HR</AlertDialogTitle>
                  <AlertDialogDescription>
                    Before proceeding to use the app, users must verify their
                    organization email address. Upon sign-up or email change
                    requests, a verification email containing a unique link or
                    code is sent to the provided email address.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Verify</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : null}
        </main>
      </div>
    </main>
  )
}

export default DashoardLayout
