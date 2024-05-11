import type {
  DeleteEmployeeAttendanceReportMutation,
  DeleteEmployeeAttendanceReportMutationVariables,
  FindEmployeeAttendanceReportById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

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

interface Props {
  employeeAttendanceReport: NonNullable<
    FindEmployeeAttendanceReportById['employeeAttendanceReport']
  >
}

const EmployeeAttendanceReport = ({ employeeAttendanceReport }: Props) => {
  const [deleteEmployeeAttendanceReport] = useMutation(
    DELETE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendanceReport deleted')
        navigate(routes.employeeAttendanceReports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmployeeAttendanceReport {employeeAttendanceReport.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{employeeAttendanceReport.id}</td>
            </tr>
            <tr>
              <th>Employee id</th>
              <td>{employeeAttendanceReport.employee_id}</td>
            </tr>
            <tr>
              <th>Total overtime</th>
              <td>{timeTag(employeeAttendanceReport.TotalOvertime)}</td>
            </tr>
            <tr>
              <th>Total workhours</th>
              <td>{timeTag(employeeAttendanceReport.TotalWorkhours)}</td>
            </tr>
            <tr>
              <th>Total sick leaves</th>
              <td>{timeTag(employeeAttendanceReport.TotalSickLeaves)}</td>
            </tr>
            <tr>
              <th>Abstenteeism rate</th>
              <td>{employeeAttendanceReport.AbstenteeismRate}</td>
            </tr>
            <tr>
              <th>Early attendace rate</th>
              <td>{employeeAttendanceReport.EarlyAttendaceRate}</td>
            </tr>
            <tr>
              <th>Late attedance rate</th>
              <td>{employeeAttendanceReport.LateAttedanceRate}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployeeAttendanceReport({
            id: employeeAttendanceReport.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employeeAttendanceReport.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmployeeAttendanceReport
