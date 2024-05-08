import type {
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import AttendanceActivityTable from 'src/components/AttendanceActivityTable'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables
> = gql`
  query FindEmployeeAttendances {
    employeeAttendances {
      attendance_id
      employee_id
      checkin_time
      checkout_time
      checking_date
      working_time
      presence_tag
      employee {
        first_name
        last_name
        position
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeeAttendances yet. '}
      <Link to={routes.newEmployeeAttendance()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendances>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendances,
}: CellSuccessProps<
  FindEmployeeAttendances,
  FindEmployeeAttendancesVariables
>) => {
  return <AttendanceActivityTable employeeAttendances={employeeAttendances} />
}
