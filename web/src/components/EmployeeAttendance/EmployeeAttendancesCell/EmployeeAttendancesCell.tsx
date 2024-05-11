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

import EmployeeAttendances from 'src/components/EmployeeAttendance/EmployeeAttendances'

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
      attendance_tag
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
  return <EmployeeAttendances employeeAttendances={employeeAttendances} />
}
