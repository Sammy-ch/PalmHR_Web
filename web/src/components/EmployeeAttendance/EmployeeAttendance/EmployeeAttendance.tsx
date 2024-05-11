import type {
  DeleteEmployeeAttendanceMutation,
  DeleteEmployeeAttendanceMutationVariables,
  FindEmployeeAttendanceByAttendanceId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_EMPLOYEE_ATTENDANCE_MUTATION: TypedDocumentNode<
  DeleteEmployeeAttendanceMutation,
  DeleteEmployeeAttendanceMutationVariables
> = gql`
  mutation DeleteEmployeeAttendanceMutation($attendance_id: String!) {
    deleteEmployeeAttendance(attendance_id: $attendance_id) {
      attendance_id
    }
  }
`

interface Props {
  employeeAttendance: NonNullable<
    FindEmployeeAttendanceByAttendanceId['employeeAttendance']
  >
}

const EmployeeAttendance = ({ employeeAttendance }: Props) => {
  const [deleteEmployeeAttendance] = useMutation(
    DELETE_EMPLOYEE_ATTENDANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendance deleted')
        navigate(routes.employeeAttendances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    attendance_id: DeleteEmployeeAttendanceMutationVariables['attendance_id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete employeeAttendance ' +
          attendance_id +
          '?'
      )
    ) {
      deleteEmployeeAttendance({ variables: { attendance_id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmployeeAttendance {employeeAttendance.attendance_id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Attendance id</th>
              <td>{employeeAttendance.attendance_id}</td>
            </tr>
            <tr>
              <th>Employee id</th>
              <td>{employeeAttendance.employee_id}</td>
            </tr>
            <tr>
              <th>Checkin time</th>
              <td>{timeTag(employeeAttendance.checkin_time)}</td>
            </tr>
            <tr>
              <th>Checkout time</th>
              <td>{timeTag(employeeAttendance.checkout_time)}</td>
            </tr>
            <tr>
              <th>Checking date</th>
              <td>{timeTag(employeeAttendance.checking_date)}</td>
            </tr>
            <tr>
              <th>Working time</th>
              <td>{timeTag(employeeAttendance.working_time)}</td>
            </tr>
            <tr>
              <th>Attendance tag</th>
              <td>{formatEnum(employeeAttendance.attendance_tag)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployeeAttendance({
            attendance_id: employeeAttendance.attendance_id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employeeAttendance.attendance_id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmployeeAttendance
