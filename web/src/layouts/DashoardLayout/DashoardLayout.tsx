import { useEffect, useState } from 'react'

import { Redirect, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import DashboardHeaderCell from 'src/components/DashboardHeaderCell'
import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  const { currentUser, isAuthenticated } = useAuth()
  const [orgId, setOrgId] = useState('')

  useEffect(() => {
    if (!isAuthenticated) {
      return () => {
        ;<Redirect to={routes.home()} />
        return
      }
    }

    setOrgId(currentUser?.id)
  }, [isAuthenticated, currentUser])

  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Navigation />
      <div className="flex flex-col">
        <DashboardHeaderCell id={orgId} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </main>
  )
}

export default DashoardLayout
