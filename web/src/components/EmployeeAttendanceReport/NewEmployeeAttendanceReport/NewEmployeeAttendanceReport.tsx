import type {
  CreateEmployeeAttendanceReportMutation,
  CreateEmployeeAttendanceReportInput,
  CreateEmployeeAttendanceReportMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeAttendanceReportForm from 'src/components/EmployeeAttendanceReport/EmployeeAttendanceReportForm'

const CREATE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION: TypedDocumentNode<
  CreateEmployeeAttendanceReportMutation,
  CreateEmployeeAttendanceReportMutationVariables
> = gql`
  mutation CreateEmployeeAttendanceReportMutation(
    $input: CreateEmployeeAttendanceReportInput!
  ) {
    createEmployeeAttendanceReport(input: $input) {
      id
    }
  }
`

const NewEmployeeAttendanceReport = () => {
  const [createEmployeeAttendanceReport, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_ATTENDANCE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendanceReport created')
        navigate(routes.employeeAttendanceReports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmployeeAttendanceReportInput) => {
    createEmployeeAttendanceReport({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New EmployeeAttendanceReport
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeAttendanceReportForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewEmployeeAttendanceReport
