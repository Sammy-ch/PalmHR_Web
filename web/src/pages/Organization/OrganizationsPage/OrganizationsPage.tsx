import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import OrganizationsCell from 'src/components/Organization/OrganizationsCell'
const OrganizationsPage = () => {
  const { currentUser } = useAuth()
  if (!currentUser) {
    navigate(routes.home())
  }
  const userId = currentUser?.sub as string
  return <OrganizationsCell tag={userId} />
}

export default OrganizationsPage
