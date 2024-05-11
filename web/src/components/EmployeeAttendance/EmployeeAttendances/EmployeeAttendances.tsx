import type {
  DeleteEmployeeAttendanceMutation,
  DeleteEmployeeAttendanceMutationVariables,
  FindEmployeeAttendances,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeAttendance/EmployeeAttendancesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

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

const EmployeeAttendancesList = ({
  employeeAttendances,
}: FindEmployeeAttendances) => {
  const [deleteEmployeeAttendance] = useMutation(
    DELETE_EMPLOYEE_ATTENDANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendance deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Attendance id</th>
            <th>Employee id</th>
            <th>Checkin time</th>
            <th>Checkout time</th>
            <th>Checking date</th>
            <th>Working time</th>
            <th>Attendance tag</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employeeAttendances.map((employeeAttendance) => (
            <tr key={employeeAttendance.attendance_id}>
              <td>{truncate(employeeAttendance.attendance_id)}</td>
              <td>{truncate(employeeAttendance.employee_id)}</td>
              <td>{timeTag(employeeAttendance.checkin_time)}</td>
              <td>{timeTag(employeeAttendance.checkout_time)}</td>
              <td>{timeTag(employeeAttendance.checking_date)}</td>
              <td>{timeTag(employeeAttendance.working_time)}</td>
              <td>{formatEnum(employeeAttendance.attendance_tag)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employeeAttendance({
                      attendance_id: employeeAttendance.attendance_id,
                    })}
                    title={
                      'Show employeeAttendance ' +
                      employeeAttendance.attendance_id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployeeAttendance({
                      attendance_id: employeeAttendance.attendance_id,
                    })}
                    title={
                      'Edit employeeAttendance ' +
                      employeeAttendance.attendance_id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete employeeAttendance ' +
                      employeeAttendance.attendance_id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() =>
                      onDeleteClick(employeeAttendance.attendance_id)
                    }
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeAttendancesList
