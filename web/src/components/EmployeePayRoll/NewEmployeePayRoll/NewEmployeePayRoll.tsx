import type {
  CreateEmployeePayRollMutation,
  CreateEmployeePayRollInput,
  CreateEmployeePayRollMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmployeePayRollForm from 'src/components/EmployeePayRoll/EmployeePayRollForm'

const CREATE_EMPLOYEE_PAY_ROLL_MUTATION: TypedDocumentNode<
  CreateEmployeePayRollMutation,
  CreateEmployeePayRollMutationVariables
> = gql`
  mutation CreateEmployeePayRollMutation($input: CreateEmployeePayRollInput!) {
    createEmployeePayRoll(input: $input) {
      id
    }
  }
`

const NewEmployeePayRoll = () => {
  const [createEmployeePayRoll, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_PAY_ROLL_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmployeePayRoll created')
        navigate(routes.employeePayRolls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmployeePayRollInput) => {
    createEmployeePayRoll({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EmployeePayRoll</h2>
      </header>
      <div className="rw-segment-main">
        <EmployeePayRollForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmployeePayRoll
