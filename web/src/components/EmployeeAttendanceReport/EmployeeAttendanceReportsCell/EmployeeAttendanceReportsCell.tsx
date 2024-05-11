import type {
  FindEmployeeAttendanceReports,
  FindEmployeeAttendanceReportsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EmployeeAttendanceReports from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReports'

export const QUERY: TypedDocumentNode<
  FindEmployeeAttendanceReports,
  FindEmployeeAttendanceReportsVariables
> = gql`
  query FindEmployeeAttendanceReports {
    employeeAttendanceReports {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employeeAttendanceReports yet. '}
      <Link to={routes.newEmployeeAttendanceReport()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({
  error,
}: CellFailureProps<FindEmployeeAttendanceReports>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendanceReports,
}: CellSuccessProps<
  FindEmployeeAttendanceReports,
  FindEmployeeAttendanceReportsVariables
>) => {
  return (
    <EmployeeAttendanceReports
      employeeAttendanceReports={employeeAttendanceReports}
    />
  )
}
