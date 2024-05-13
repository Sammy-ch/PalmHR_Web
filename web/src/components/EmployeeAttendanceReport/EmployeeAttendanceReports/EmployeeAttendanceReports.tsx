import type {
  DeleteEmployeeAttendanceReportMutation,
  DeleteEmployeeAttendanceReportMutationVariables,
  FindEmployeeAttendanceReports,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReportsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION: TypedDocumentNode<
  DeleteEmployeeAttendanceReportMutation,
  DeleteEmployeeAttendanceReportMutationVariables
> = gql`
  mutation DeleteEmployeeAttendanceReportMutation($id: String!) {
    deleteEmployeeAttendanceReport(id: $id) {
      id
    }
  }
`

const EmployeeAttendanceReportsList = ({
  employeeAttendanceReports,
}: FindEmployeeAttendanceReports) => {
  const [deleteEmployeeAttendanceReport] = useMutation(
    DELETE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendanceReport deleted')
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
    id: DeleteEmployeeAttendanceReportMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete employeeAttendanceReport ' + id + '?'
      )
    ) {
      deleteEmployeeAttendanceReport({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee id</th>
            <th>Total overtime</th>
            <th>Total workhours</th>
            <th>Total sick leaves</th>
            <th>Abstenteeism rate</th>
            <th>Early attendace rate</th>
            <th>Late attedance rate</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employeeAttendanceReports.map((employeeAttendanceReport) => (
            <tr key={employeeAttendanceReport.id}>
              <td>{truncate(employeeAttendanceReport.id)}</td>
              <td>{truncate(employeeAttendanceReport.employee_id)}</td>
              <td>{timeTag(employeeAttendanceReport.TotalOvertime)}</td>
              <td>{timeTag(employeeAttendanceReport.TotalWorkhours)}</td>
              <td>{timeTag(employeeAttendanceReport.TotalSickLeaves)}</td>
              <td>{truncate(employeeAttendanceReport.AbstenteeismRate)}</td>
              <td>{truncate(employeeAttendanceReport.EarlyAttendaceRate)}</td>
              <td>{truncate(employeeAttendanceReport.LateAttedanceRate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employeeAttendanceReport({
                      id: employeeAttendanceReport.id,
                    })}
                    title={
                      'Show employeeAttendanceReport ' +
                      employeeAttendanceReport.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployeeAttendanceReport({
                      id: employeeAttendanceReport.id,
                    })}
                    title={
                      'Edit employeeAttendanceReport ' +
                      employeeAttendanceReport.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete employeeAttendanceReport ' +
                      employeeAttendanceReport.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employeeAttendanceReport.id)}
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

export default EmployeeAttendanceReportsList
