import type {
  EditEmployeeAttendanceReportById,
  UpdateEmployeeAttendanceReportInput,
  UpdateEmployeeAttendanceReportMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeAttendanceReportForm from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReportForm'

export const QUERY: TypedDocumentNode<EditEmployeeAttendanceReportById> = gql`
  query EditEmployeeAttendanceReportById($id: String!) {
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

const UPDATE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION: TypedDocumentNode<
  EditEmployeeAttendanceReportById,
  UpdateEmployeeAttendanceReportMutationVariables
> = gql`
  mutation UpdateEmployeeAttendanceReportMutation(
    $id: String!
    $input: UpdateEmployeeAttendanceReportInput!
  ) {
    updateEmployeeAttendanceReport(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendanceReport,
}: CellSuccessProps<EditEmployeeAttendanceReportById>) => {
  const [updateEmployeeAttendanceReport, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendanceReport updated')
        navigate(routes.employeeAttendanceReports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeeAttendanceReportInput,
    id: EditEmployeeAttendanceReportById['employeeAttendanceReport']['id']
  ) => {
    updateEmployeeAttendanceReport({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmployeeAttendanceReport {employeeAttendanceReport?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeAttendanceReportForm
          employeeAttendanceReport={employeeAttendanceReport}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
