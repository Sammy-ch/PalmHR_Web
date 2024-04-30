import type {
  EditEmployeeAttendanceByAttendanceId,
  UpdateEmployeeAttendanceInput,
  UpdateEmployeeAttendanceMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeAttendanceForm from 'src/components/EmployeeAttendance/EmployeeAttendanceForm'

export const QUERY: TypedDocumentNode<EditEmployeeAttendanceByAttendanceId> = gql`
  query EditEmployeeAttendanceByAttendanceId($attendance_id: String!) {
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

const UPDATE_EMPLOYEE_ATTENDANCE_MUTATION: TypedDocumentNode<
  EditEmployeeAttendanceById,
  UpdateEmployeeAttendanceMutationVariables
> = gql`
  mutation UpdateEmployeeAttendanceMutation(
    $attendance_id: String!
    $input: UpdateEmployeeAttendanceInput!
  ) {
    updateEmployeeAttendance(attendance_id: $attendance_id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeAttendance,
}: CellSuccessProps<EditEmployeeAttendanceByAttendanceId>) => {
  const [updateEmployeeAttendance, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_ATTENDANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeAttendance updated')
        navigate(routes.employeeAttendances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeeAttendanceInput,
    id: EditEmployeeAttendanceByAttendanceId['employeeAttendance']['id']
  ) => {
    updateEmployeeAttendance({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmployeeAttendance {employeeAttendance?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeAttendanceForm
          employeeAttendance={employeeAttendance}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
