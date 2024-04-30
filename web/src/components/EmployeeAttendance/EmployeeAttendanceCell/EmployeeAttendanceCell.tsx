import type {
  FindEmployeeAttendanceByAttendanceId,
  FindEmployeeAttendanceByAttendanceIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeAttendance from 'src/components/EmployeeAttendance/EmployeeAttendance'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendanceByAttendanceId,
  FindEmployeeAttendanceByAttendanceIdVariables
> = gql`
  query FindEmployeeAttendanceByAttendanceId($attendance_id: String!) {
    employeeAttendance: employeeAttendance(attendance_id: $attendance_id) {
      attendance_id
      employee_id
      checkin_time
      checkout_time
      checking_date
      working_time
      presence_tag
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EmployeeAttendance not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendanceByAttendanceIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendance,
}: CellSuccessProps<
  FindEmployeeAttendanceByAttendanceId,
  FindEmployeeAttendanceByAttendanceIdVariables
>) => {
  return <EmployeeAttendance employeeAttendance={employeeAttendance} />
}
