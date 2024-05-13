import type {
  CreateEmployeeLeaveFormMutation,
  CreateEmployeeLeaveFormInput,
  CreateEmployeeLeaveFormMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeeLeaveFormForm from 'src/components/EmployeeLeaveForm/EmployeeLeaveFormForm'

const CREATE_EMPLOYEE_LEAVE_FORM_MUTATION: TypedDocumentNode<
  CreateEmployeeLeaveFormMutation,
  CreateEmployeeLeaveFormMutationVariables
> = gql`
  mutation CreateEmployeeLeaveFormMutation(
    $input: CreateEmployeeLeaveFormInput!
  ) {
    createEmployeeLeaveForm(input: $input) {
      id
    }
  }
`

const NewEmployeeLeaveForm = () => {
  const [createEmployeeLeaveForm, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_LEAVE_FORM_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeeLeaveForm created')
        navigate(routes.employeeLeaveForms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmployeeLeaveFormInput) => {
    createEmployeeLeaveForm({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New EmployeeLeaveForm
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmployeeLeaveFormForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewEmployeeLeaveForm
