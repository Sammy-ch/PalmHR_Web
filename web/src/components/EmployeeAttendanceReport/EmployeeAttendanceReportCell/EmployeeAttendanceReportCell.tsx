import type {
  FindEmployeeAttendanceReportById,
  FindEmployeeAttendanceReportByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeAttendanceReport from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReport'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendanceReportById,
  FindEmployeeAttendanceReportByIdVariables
> = gql`
  query FindEmployeeAttendanceReportById($id: String!) {
    employeeAttendanceReport: employeeAttendanceReport(id: $id) {
      id
      employee_id
      TotalOvertime
      TotalWorkhours
      TotalSickLeaves
      AbstenteeismRate
      EarlyAttendaceRate
      LateAttedanceRate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EmployeeAttendanceReport not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendanceReportByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendanceReport,
}: CellSuccessProps<
  FindEmployeeAttendanceReportById,
  FindEmployeeAttendanceReportByIdVariables
>) => {
  return (
    <EmployeeAttendanceReport
      employeeAttendanceReport={employeeAttendanceReport}
    />
  )
}
