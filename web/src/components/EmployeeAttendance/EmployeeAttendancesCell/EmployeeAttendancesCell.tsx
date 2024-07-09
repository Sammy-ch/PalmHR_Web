import type {
  FindEmployeeAttendancesByOrganization,
  FindEmployeeAttendancesByOrganizationVariables,
} from 'types/graphql'

import type { CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

import EmployeeAttendances from 'src/components/EmployeeAttendance/EmployeeAttendances'
import { useRetry } from 'src/hooks/useRetry'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendancesByOrganization,
  FindEmployeeAttendancesByOrganizationVariables
> = gql`
  query FindEmployeeAttendancesByOrganization($orgId: String!) {
    employeeAttendances: employeeAttendancesByOrganization(orgId: $orgId) {
      attendance_id
      employee_id
      checkin_time
      checkout_time
      checking_date
      working_time
      attendance_tag
      employee {
        first_name
        last_name
        profile_image
        position
      }
    }
  }
`

export const Loading = () => {
  return (
    <main className="grid items-start gap-1 px-2 lg:px-4">
      <span>Loading</span>
    </main>
  )
}

export const Empty = () => {
  return <div className="text-lg">{'No Employee Attendances yet. '}</div>
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
    3,
    2000
  )

  if (loading) {
    return <Loading />
  }

  if (retryError) {
    return <div style={{ color: 'red' }}>Error: {retryError.message}</div>
  }

  if (data) {
    return <Success employeeAttendances={data.data.employeeAttendances} />
  }

  return null
}

export const Success = ({
  employeeAttendances,
}: CellSuccessProps<
  FindEmployeeAttendancesByOrganization,
  FindEmployeeAttendancesByOrganizationVariables
>) => {
  return <EmployeeAttendances employeeAttendances={employeeAttendances} />
}
