import type {
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables,
} from 'types/graphql'

import type { CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import EmployeeProfileCard from 'src/components/EmployeeProfileCard/EmployeeProfileCard'
import { useRetry } from 'src/hooks/useRetry'

export const QUERY: TypedDocumentNode<
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables
> = gql`
  query GetEmployeeProfilesByOrg($org_id: String!) {
    employeeProfiles: employeeProfilesByOrg(org_id: $org_id) {
      profile_id
      first_name
      last_name
      position
      email
      profile_image
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="">{'No Employee Profiles yet. '}</div>
}

export const Failure = () => {
  const {
    data,
    error: retryError,
    loading,
  } = useRetry(
    async () => {
      const result = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: QUERY.loc?.source.body,
        }),
      })
      if (!result.ok) {
        throw new Error('Network response was not ok')
      }
      return result.json()
    },
    10,
    2000
  )

  if (loading) {
    return <Loading />
  }

  if (retryError) {
    return <div style={{ color: 'red' }}>Error: {retryError.message}</div>
  }

  if (data) {
    return <Success employeeProfiles={data.data.employeeProfiles} />
  }

  return null
}

export const Success = ({
  employeeProfiles,
}: CellSuccessProps<
  GetEmployeeProfilesByOrg,
  GetEmployeeProfilesByOrgVariables
>) => {
  return <EmployeeProfileCard employeeProfiles={employeeProfiles} />
}
