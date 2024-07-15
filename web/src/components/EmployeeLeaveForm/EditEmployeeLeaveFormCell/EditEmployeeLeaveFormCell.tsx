import type {
  EditEmployeeLeaveFormById,
  UpdateEmployeeLeaveFormInput,
  UpdateEmployeeLeaveFormMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeLeaveFormForm from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormForm'

export const QUERY: TypedDocumentNode<EditEmployeeLeaveFormById> = gql`
  query EditEmployeeLeaveFormById($id: String!) {
    employeeLeaveForm: employeeLeaveForm(id: $id) {
      id
      requested_leave_date
      leave_id
      leave_type
      leave_days
    }
  }
`

// const UPDATE_EMPLOYEE_LEAVE_FORM_MUTATION: TypedDocumentNode<
//   EditEmployeeLeaveFormById,
//   UpdateEmployeeLeaveFormMutationVariables
// > = gql`
//   mutation UpdateEmployeeLeaveFormMutation(
//     $id: String!
//     $input: UpdateEmployeeLeaveFormInput!
//   ) {
//     updateEmployeeLeaveForm(id: $id, input: $input) {
//       id
//       requested_leave_date
//       leave_id
//       leave_type
//       leave_days
//       Leave_status
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employeeLeaveForm,
}: CellSuccessProps<EditEmployeeLeaveFormById>) => {
  const [updateEmployeeLeaveForm, { loading, error }] = useMutation(
    UPDATE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeLeaveForm updated')
        navigate(routes.employeeLeaveForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmployeeLeaveFormInput,
    id: EditEmployeeLeaveFormById['employeeLeaveForm']['id']
  ) => {
    updateEmployeeLeaveForm({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmployeeLeaveForm {employeeLeaveForm?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeLeaveFormForm
          employeeLeaveForm={employeeLeaveForm}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
