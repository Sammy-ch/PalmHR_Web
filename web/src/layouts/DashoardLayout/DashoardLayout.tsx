import { useEffect } from 'react'

import { navigate, routes, useParams } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import DashboardHeaderCell from 'src/components/DashboardHeaderCell'
import Navigation from 'src/components/Navigation/Navigation'

type DashoardLayoutProps = {
  children?: React.ReactNode
}

const DashoardLayout = ({ children }: DashoardLayoutProps) => {
  const { id } = useParams()
  const { currentUser } = useAuth()
  
  useEffect(() => {
    if (currentUser?.sub !== id) {
      navigate(routes.home())
    }
  })

  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Navigation />
      <div className="flex flex-col">
        <DashboardHeaderCell id={id} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </main>
  )
}

export default DashoardLayout
