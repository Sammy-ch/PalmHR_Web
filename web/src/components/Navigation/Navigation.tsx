import { useState, useEffect } from 'react'

import { useAuth } from 'src/auth'
import DashboardNavigationCell from 'src/components/DashboardNavigationCell'
import { Button } from 'src/components/ui/button'

import logo from './palmHR_logo.png'

const Navigation = () => {
  const { currentUser } = useAuth()
  const [orgId, setOrgId] = useState('')

  useEffect(() => {
    setOrgId(currentUser?.id)
  }, [currentUser])

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <img
            src={logo}
            alt={'Palm HR Logo'}
            height={150}
            width={150}
            className="h-auto"
          />
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <DashboardNavigationCell id={orgId} />
        </div>
      </div>
    </div>
  )
}

export default Navigation

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
