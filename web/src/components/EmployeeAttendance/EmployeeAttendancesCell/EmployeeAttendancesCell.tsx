import type {
  FindEmployeeAttendancesByOrganization,
  FindEmployeeAttendancesByOrganizationVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  TypedDocumentNode,
  CellFailureProps,
} from '@redwoodjs/web'

import EmployeeAttendances from 'src/components/EmployeeAttendance/EmployeeAttendances'

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

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendancesByOrganization>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendances,
}: CellSuccessProps<
  FindEmployeeAttendancesByOrganization,
  FindEmployeeAttendancesByOrganizationVariables
>) => {
  return <EmployeeAttendances employeeAttendances={employeeAttendances} />
}
